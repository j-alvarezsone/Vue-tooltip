import { type Directive, type DirectiveBinding, render, h, defineAsyncComponent } from 'vue';

type ObjectValues<T> = T[keyof T];

const TOOLTIP = {
  DISPLAY: '--tooltip-display',
  TOP: '--tooltip-top',
  BOTTOM: '--tooltip-bottom',
  LEFT: '--tooltip-left',
  RIGHT: '--tooltip-right',
  MAX_WIDTH: '--tooltip-maxWidth',
  FONT_SIZE: '--tooltip-fontSize',
  BACKGROUND_COLOR: '--tooltip-backgroundColor',
  TEXT_COLOR: '--tooltip-textColor',
  PADDING: '--tooltip-padding',
  Z_INDEX: '--tooltip-zIndex',
  ARROW_BORDER_COLOR: '--tooltip-arrowBorderColor',
} as const;

const TOOLTIP_PLACEMENTS = {
  TOP: 'top',
  TOP_START: 'topStart',
  TOP_END: 'topEnd',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottomStart',
  BOTTOM_END: 'bottomEnd',
  LEFT: 'left',
  LEFT_START: 'leftStart',
  LEFT_END: 'leftEnd',
  RIGHT: 'right',
  RIGHT_START: 'rightStart',
  RIGHT_END: 'rightEnd',
} as const;

type Placement = ObjectValues<typeof TOOLTIP_PLACEMENTS>;

const tooltipContainer = document.createElement('div');
let observer: IntersectionObserver | null = null;
let mutationObserver: MutationObserver | null = null;
let hideTimeout: number | null = null;
let wheelEventHandler: (() => void) | null = null;

export const tooltip: Directive = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    const mouseEnterHandler = () => handleMouseEnter(el, tooltipContainer, binding);
    const mouseLeaveHandler = () => handleMouseLeave(el, tooltipContainer, binding);

    el.onmouseenter = mouseEnterHandler;
    el.onmouseleave = mouseLeaveHandler;
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const mouseEnterHandler = () => handleMouseEnter(el, tooltipContainer, binding);
    const mouseLeaveHandler = () => handleMouseLeave(el, tooltipContainer, binding);

    el.onmouseenter = mouseEnterHandler;
    el.onmouseleave = mouseLeaveHandler;
  },
  beforeUnmount(el: HTMLElement) {
    el.onmouseenter = null;
    el.onmouseleave = null;
    tooltipContainer.onmouseenter = null;
    tooltipContainer.onmouseleave = null;
    render(null, tooltipContainer);

    if (observer) {
      observer.disconnect();
      observer = null;
    }

    if (mutationObserver) {
      mutationObserver.disconnect();
      mutationObserver = null;
    }
  },
};

function updateTooltip(el: HTMLElement, { value, modifiers, arg }: DirectiveBinding, container: HTMLDivElement) {
  let isComponent = false;

  if (typeof value === 'string' || typeof value === 'number') {
    const stringValue = typeof value === 'number' ? value.toString() : value;

    if (modifiers.html) {
      container.innerHTML = stringValue;
      container.style.setProperty(TOOLTIP.PADDING, '0.75rem');
    } else {
      container.innerText = stringValue;
    }
  } else if (typeof value === 'object') {
    if (value.__file || (value.content && value.content.__file)) {
      isComponent = true;

      const component = defineAsyncComponent(
        () =>
          import(
            /* @vite-ignore */
            value.__file || value.content.__file
          ),
      );

      render(h(component), container);

      mutationObserver = new MutationObserver(() => {
        setPlacement(el, container, modifiers, arg, value.placement);
      });

      if (value?.maxWidth) {
        container.style.setProperty(TOOLTIP.MAX_WIDTH, value.maxWidth);
      }

      mutationObserver.observe(container, { childList: true, subtree: true });
    } else {
      applyObjectTooltipStyles(value, container);
    }
  }
  container.className = '';
  container.classList.add('tooltip', 'tooltip-arrow');

  if (!isComponent) {
    setPlacement(el, container, modifiers, arg, value.placement);
  }

  if (modifiers.bgLight || value?.bgLight) {
    container.style.setProperty(TOOLTIP.BACKGROUND_COLOR, 'white');
    container.style.setProperty(TOOLTIP.TEXT_COLOR, '#374151');
    container.style.setProperty(TOOLTIP.ARROW_BORDER_COLOR, 'white');
  }

  if (modifiers.noArrow || value?.noArrow) {
    container.classList.remove('tooltip-arrow');
  }
}

function applyObjectTooltipStyles(value: any, container: HTMLDivElement) {
  if (value?.html) {
    container.innerHTML = value.content;
    container.style.setProperty(TOOLTIP.PADDING, '0.75rem');
  } else {
    container.innerText = value.content;
  }

  if (value?.maxWidth) {
    container.style.setProperty(TOOLTIP.MAX_WIDTH, value.maxWidth);
  }

  if (value?.fontSize) {
    container.style.setProperty(TOOLTIP.FONT_SIZE, value.fontSize);
  }

  if (value?.padding) {
    container.style.setProperty(TOOLTIP.PADDING, value.padding);
  }

  if (value?.zIndex) {
    container.style.setProperty(TOOLTIP.Z_INDEX, value.zIndex);
  }
}

function setPlacement(
  el: HTMLElement,
  container: HTMLDivElement,
  modifiers: DirectiveBinding['modifiers'],
  arg: DirectiveBinding['arg'],
  position: Placement | undefined,
) {
  switch (position || true) {
    case modifiers.left:
    case TOOLTIP_PLACEMENTS.LEFT:
      alignLeft(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignRight(el, container);
        }
      });
      break;
    case modifiers.leftStart:
    case TOOLTIP_PLACEMENTS.LEFT_START:
      alignLeftStart(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignRightStart(el, container);
        }
      });
      break;
    case modifiers.leftEnd:
    case TOOLTIP_PLACEMENTS.LEFT_END:
      alignLeftEnd(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignRightEnd(el, container);
        }
      });
      break;
    case modifiers.right:
    case TOOLTIP_PLACEMENTS.RIGHT:
      alignRight(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignLeft(el, container);
        }
      });
      break;
    case modifiers.rightStart:
    case TOOLTIP_PLACEMENTS.RIGHT_START:
      alignRightStart(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignLeftStart(el, container);
        }
      });
      break;
    case modifiers.rightEnd:
    case TOOLTIP_PLACEMENTS.RIGHT_END:
      alignRightEnd(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignLeftEnd(el, container);
        }
      });
      break;
    case modifiers.bottom:
    case TOOLTIP_PLACEMENTS.BOTTOM:
      alignBottom(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignTop(el, container);
        }
      });
      break;
    case modifiers.bottomStart:
    case TOOLTIP_PLACEMENTS.BOTTOM_START:
      alignBottomStart(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignTopStart(el, container);
        }
      });
      break;
    case modifiers.bottomEnd:
    case TOOLTIP_PLACEMENTS.BOTTOM_END:
      alignBottomEnd(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignTopEnd(el, container);
        }
      });
      break;
    case modifiers.topStart:
    case TOOLTIP_PLACEMENTS.TOP_START:
      alignTopStart(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignBottomStart(el, container);
        }
      });
      break;
    case modifiers.topEnd:
    case TOOLTIP_PLACEMENTS.TOP_END:
      alignTopEnd(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignBottomEnd(el, container);
        }
      });
      break;
    case TOOLTIP_PLACEMENTS.TOP:
      alignTop(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignBottom(el, container);
        }
      });
      break;
    default:
      alignTop(el, container);
      isOutOfBounds(container, arg, modifiers, (isOut) => {
        if (isOut) {
          alignBottom(el, container);
        }
      });
  }
}

function removeTooltip(container: HTMLDivElement, binding: DirectiveBinding, observer: IntersectionObserver | null) {
  container.style.setProperty(TOOLTIP.DISPLAY, 'none');

  if (typeof binding.value === 'string' || typeof binding.value === 'object') {
    clearTooltip(binding, container);
  }

  if (observer) {
    observer.disconnect();
    observer = null;
  }

  if (mutationObserver) {
    mutationObserver.disconnect();
    mutationObserver = null;
  }
}

function handleMouseEnter(el: HTMLElement, container: HTMLDivElement, binding: DirectiveBinding) {
  const isValueMissing = !binding.value;
  const isContentMissing = typeof binding.value === 'object' && !binding.value.content;
  const isFilePresent =
    binding.value && (binding.value.__file || (binding.value.content && binding.value.content.__file));

  if (((isValueMissing || isContentMissing) && !isFilePresent) || binding.value?.disabled) {
    clearTooltip(binding, container);
    return;
  }

  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }

  container.style.setProperty(TOOLTIP.DISPLAY, 'block');
  document.body.appendChild(container);
  updateTooltip(el, binding, container);

  wheelEventHandler = () => handleMouseLeave(el, container, binding);
  window.addEventListener('wheel', wheelEventHandler);

  el.onclick = () => {
    setTimeout(() => {
      handleMouseLeave(el, container, binding);
    }, binding.value.hideDelay ?? 300);
  };

  container.onmouseenter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
  };
}

function handleMouseLeave(el: HTMLElement, container: HTMLDivElement, binding: DirectiveBinding) {
  if (binding.modifiers.autoHide || binding.value?.autoHide) {
    removeTooltip(container, binding, observer);
  } else {
    hideTimeout = window.setTimeout(() => {
      removeTooltip(container, binding, observer);
    }, 50);
  }

  if (wheelEventHandler) {
    window.removeEventListener('wheel', wheelEventHandler);
    wheelEventHandler = null;
  }

  container.onmouseleave = () => handleMouseLeave(el, container, binding);
  el.onclick = null;
}

function clearTooltip({ modifiers, value, arg }: DirectiveBinding, container: HTMLDivElement) {
  container.className = '';
  container.style.cssText = '';

  if (modifiers.html || value?.html) {
    container.innerHTML = '';
  } else {
    container.innerText = '';
  }

  if (document.body.contains(container)) {
    document.body.removeChild(container);
  }

  if (arg) {
    arg = undefined;
  }
}

function setArrowPlacement(placement: Placement) {
  const arrow = document.querySelector('.tooltip-arrow');

  if (!arrow) return;

  Object.values(TOOLTIP_PLACEMENTS).forEach((dir) => {
    arrow.classList.remove(`${dir}-arrow`);
  });

  arrow.classList.add(`${placement}-arrow`);
}

function getElRect(el: HTMLElement) {
  return el.getBoundingClientRect();
}

function setContainerPlacement(container: HTMLDivElement, left: number, top: number) {
  container.style.left = `${left}px`;
  container.style.top = `${top}px`;
}

function alignTop(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.left + (elRect.width - container.offsetWidth) / 2;
  const top = elRect.top - container.offsetHeight - 12;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.TOP);
}

function alignTopStart(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.left;
  const top = elRect.top - container.offsetHeight - 12;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.TOP_START);
}

function alignTopEnd(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.right - container.offsetWidth;
  const top = elRect.top - container.offsetHeight - 12;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.TOP_END);
}

function alignBottom(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.left + (elRect.width - container.offsetWidth) / 2;
  const top = elRect.bottom + 12;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.BOTTOM);
}

function alignBottomStart(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.left;
  const top = elRect.bottom + 12;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.BOTTOM_START);
}

function alignBottomEnd(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.right - container.offsetWidth;
  const top = elRect.bottom + 12;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.BOTTOM_END);
}

function alignLeft(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.left - container.offsetWidth - 12;
  const top = elRect.top + (elRect.height - container.offsetHeight) / 2;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.LEFT);
}

function alignLeftStart(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.left - container.offsetWidth - 12;
  const top = elRect.top;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.LEFT_START);
}

function alignLeftEnd(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.left - container.offsetWidth - 12;
  const top = elRect.bottom - container.offsetHeight;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.LEFT_END);
}

function alignRight(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.right + 12;
  const top = elRect.top + (elRect.height - container.offsetHeight) / 2;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.RIGHT);
}

function alignRightStart(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.right + 12;
  const top = elRect.top;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.RIGHT_START);
}

function alignRightEnd(el: HTMLElement, container: HTMLDivElement) {
  const elRect = getElRect(el);

  const left = elRect.right + 12;
  const top = elRect.bottom - container.offsetHeight;

  setContainerPlacement(container, left, top);
  setArrowPlacement(TOOLTIP_PLACEMENTS.RIGHT_END);
}

function isOutOfBounds(
  container: HTMLDivElement,
  arg: DirectiveBinding['arg'],
  modifiers: DirectiveBinding['modifiers'],
  cb: (isOut: boolean) => void,
) {
  const observerEl = document.querySelector(`.${typeof arg === 'string' ? arg : null}`);
  const containerRect = container.getBoundingClientRect();

  if (observerEl) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          cb(!entry.isIntersecting);
        });
      },
      { root: observerEl, rootMargin: '0px', threshold: 1.0 },
    );

    observer.observe(container);
    return;
  }

  const width = container.offsetWidth;
  const height = container.offsetHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  cb(
    containerRect.left + width > viewportWidth ||
      containerRect.left < 0 ||
      containerRect.top < 0 ||
      containerRect.top + height > viewportHeight,
  );
}
