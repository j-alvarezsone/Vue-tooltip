<template>
  <div>
    <slot :event="event" />
    <teleport to="body">
      <div
        v-if="isTooltipVisible && !disabled"
        ref="tooltipContainerRef"
        class="tooltip_container"
        @mouseenter="keepTooltipVisible"
        @mouseleave="handleMouseLeave"
      >
        <slot name="content">
          <span v-if="content && html" v-html="content" />
          <span v-else-if="content">{{ content }}</span>
        </slot>
      </div>
      <div v-if="isTooltipVisible && !noArrow" ref="tooltipArrowRef" class="tooltip_arrow" />
    </teleport>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, nextTick, computed } from 'vue';
  import { TOOLTIP_PLACEMENTS, type TooltipPlacement } from '../../directives/tooltip';
  import { useEventListener } from '../../composables/useEventListener';

  type Props = {
    content?: string;
    delay?: number;
    placement?: TooltipPlacement;
    noArrow?: boolean;
    bgLight?: boolean;
    maxHeight?: string | number;
    maxWidth?: string | number;
    fontSize?: string;
    padding?: string;
    zIndex?: number;
    html?: boolean;
    autoHide?: boolean;
    disabled?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    content: undefined,
    delay: 50,
    placement: 'top',
    noArrow: false,
    bgLight: false,
    maxHeight: 800,
    maxWidth: 256,
    fontSize: '1rem',
    padding: '0.5rem 0.75rem',
    zIndex: 9999,
    html: false,
    autoHide: false,
    disabled: false,
  });

  const targetRef = ref<HTMLElement | null>(null);
  const tooltipContainerRef = ref<HTMLElement | null>(null);
  const tooltipArrowRef = ref<HTMLElement | null>(null);
  const isTooltipVisible = ref<boolean>(false);
  const isMouseOverTooltip = ref<boolean>(false);
  const hideTimeout = ref<number | null>(null);
  const arrowBorderColor = ref<string>('#1e293b transparent transparent transparent');

  const event = reactive({
    on: {
      mouseenter: (e: MouseEvent) => {
        handleMouseEnter(e);
      },
      mouseleave: () => {
        handleMouseLeave();
      },
    },
  });

  const fontSize = computed(() => {
    if (!isValidFontSize(props.fontSize)) {
      throw new Error(`Invalid fontSize value: ${props.fontSize}. It must be in px, em, or rem.`);
    }

    return props.fontSize;
  });

  function isValidFontSize(value: string): boolean {
    return /^\d+(px|em|rem)$/.test(value);
  }

  async function handleMouseEnter(e: MouseEvent) {
    targetRef.value = e.target as HTMLElement;

    if (hideTimeout.value) {
      clearTimeout(hideTimeout.value);
    }

    isTooltipVisible.value = true;

    await nextTick();

    const elRect = getElRect(targetRef.value);

    setPlacement(elRect);
  }

  function handleMouseLeave() {
    if (props.autoHide) {
      hideTooltip();
    } else {
      hideTimeout.value = window.setTimeout(() => {
        hideTooltip();
      }, props.delay);
    }
  }

  function keepTooltipVisible() {
    isMouseOverTooltip.value = true;
    if (hideTimeout.value) {
      clearTimeout(hideTimeout.value);
    }
  }

  function hideTooltip() {
    isTooltipVisible.value = false;
    hideTimeout.value = null;
    isMouseOverTooltip.value = false;
  }

  useEventListener(window, 'wheel', () => {
    if (isMouseOverTooltip.value) return;
    handleMouseLeave();
  });

  function getElRect(el: HTMLElement) {
    return el.getBoundingClientRect();
  }

  function setPlacement(elRect: DOMRect) {
    switch (props.placement) {
      case TOOLTIP_PLACEMENTS.TOP_START:
        alignTopStart(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottomStart(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTopStart(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.TOP_END:
        alignTopEnd(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottomEnd(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTopEnd(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.BOTTOM:
        alignBottom(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTop(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottom(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.BOTTOM_START:
        alignBottomStart(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTopStart(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottomStart(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.BOTTOM_END:
        alignBottomEnd(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTopEnd(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottomEnd(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.LEFT:
        alignLeft(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignRight(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTop(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottom(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignLeft(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.LEFT_START:
        alignLeftStart(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignRightStart(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTopStart(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottomStart(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignLeftStart(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.LEFT_END:
        alignLeftEnd(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignRightEnd(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTopEnd(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottomEnd(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignLeftEnd(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.RIGHT:
        alignRight(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignLeft(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTop(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottom(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignRight(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.RIGHT_START:
        alignRightStart(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignLeftStart(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTopStart(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottomStart(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignRightStart(elRect);
          }
        }
        break;
      case TOOLTIP_PLACEMENTS.RIGHT_END:
        alignRightEnd(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignLeftEnd(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTopEnd(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottomEnd(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignRightEnd(elRect);
          }
        }
        break;
      default:
        alignTop(elRect);

        if (tooltipContainerRef.value) {
          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignBottom(elRect);
          }

          if (isOutOfBounds(tooltipContainerRef.value)) {
            alignTop(elRect);
          }
        }
    }
  }

  function setTooltipPosition(containerEl: HTMLElement, top: number, left: number) {
    containerEl.style.top = `${top}px`;
    containerEl.style.left = `${left}px`;
  }

  function alignTop(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.top - tooltipContainerRef.value.offsetHeight - 12;
      const left = elRect.left + (elRect.width - tooltipContainerRef.value.offsetWidth) / 2;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowTopPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignTopStart(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.top - tooltipContainerRef.value.offsetHeight - 12;
      const left = elRect.left;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowTopPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignTopEnd(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.top - tooltipContainerRef.value.offsetHeight - 12;
      const left = elRect.right - tooltipContainerRef.value.offsetWidth;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowTopPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignBottom(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.bottom + 12;
      const left = elRect.left + (elRect.width - tooltipContainerRef.value.offsetWidth) / 2;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowBottomPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignBottomStart(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.bottom + 12;
      const left = elRect.left;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowBottomPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignBottomEnd(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.bottom + 12;
      const left = elRect.right - tooltipContainerRef.value.offsetWidth;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowBottomPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignLeft(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.top + (elRect.height - tooltipContainerRef.value.offsetHeight) / 2;
      const left = elRect.left - tooltipContainerRef.value.offsetWidth - 12;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowLeftPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignLeftStart(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.top;
      const left = elRect.left - tooltipContainerRef.value.offsetWidth - 12;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowLeftPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignLeftEnd(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.bottom - tooltipContainerRef.value.offsetHeight;
      const left = elRect.left - tooltipContainerRef.value.offsetWidth - 12;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowLeftPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignRight(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.top + (elRect.height - tooltipContainerRef.value.offsetHeight) / 2;
      const left = elRect.right + 12;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowRightPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignRightStart(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.top;
      const left = elRect.right + 12;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowRightPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function alignRightEnd(elRect: DOMRect) {
    if (tooltipContainerRef.value) {
      const top = elRect.bottom - tooltipContainerRef.value.offsetHeight;
      const left = elRect.right + 12;

      setTooltipPosition(tooltipContainerRef.value, top, left);

      if (tooltipArrowRef.value) {
        setArrowRightPosition(elRect, tooltipArrowRef.value);
      }
    }
  }

  function setArrowTopPosition(elRect: DOMRect, arrowEl: HTMLElement) {
    arrowBorderColor.value = '#1e293b transparent transparent transparent';

    if (props.bgLight) {
      arrowBorderColor.value = '#ffffff transparent transparent transparent';
    }

    let arrowLeft = elRect.left + elRect.width / 2 - arrowEl.offsetWidth / 2;
    const arrowTop = elRect.top - arrowEl.offsetHeight;

    if (props.placement === TOOLTIP_PLACEMENTS.TOP_START) {
      arrowLeft = elRect.left + arrowEl.offsetWidth;
    }

    if (props.placement === TOOLTIP_PLACEMENTS.TOP_END) {
      arrowLeft = elRect.right - arrowEl.offsetWidth * 2;
    }

    setTooltipPosition(arrowEl, arrowTop, arrowLeft);
  }

  function setArrowBottomPosition(elRect: DOMRect, arrowEl: HTMLElement) {
    arrowBorderColor.value = 'transparent transparent #1e293b transparent';

    if (props.bgLight) {
      arrowBorderColor.value = 'transparent transparent white transparent';
    }

    let arrowLeft = elRect.left + elRect.width / 2 - arrowEl.offsetWidth / 2;
    const arrowTop = elRect.bottom;

    if (props.placement === TOOLTIP_PLACEMENTS.BOTTOM_START) {
      arrowLeft = elRect.left + arrowEl.offsetWidth;
    }

    if (props.placement === TOOLTIP_PLACEMENTS.BOTTOM_END) {
      arrowLeft = elRect.right - arrowEl.offsetWidth * 2;
    }

    setTooltipPosition(arrowEl, arrowTop, arrowLeft);
  }

  function setArrowLeftPosition(elRect: DOMRect, arrowEl: HTMLElement) {
    arrowBorderColor.value = 'transparent transparent transparent #1e293b';

    if (props.bgLight) {
      arrowBorderColor.value = 'transparent transparent transparent white';
    }

    let arrowTop = elRect.top + elRect.height / 2 - arrowEl.offsetHeight / 2;
    const arrowLeft = elRect.left - arrowEl.offsetWidth;

    if (props.placement === TOOLTIP_PLACEMENTS.LEFT_START) {
      arrowTop = elRect.top + arrowEl.offsetHeight;
    }

    if (props.placement === TOOLTIP_PLACEMENTS.LEFT_END) {
      arrowTop = elRect.bottom - arrowEl.offsetHeight * 2;
    }

    setTooltipPosition(arrowEl, arrowTop, arrowLeft);
  }

  function setArrowRightPosition(elRect: DOMRect, arrowEl: HTMLElement) {
    arrowBorderColor.value = 'transparent #1e293b transparent transparent';

    if (props.bgLight) {
      arrowBorderColor.value = 'transparent white transparent transparent';
    }

    let arrowTop = elRect.top + elRect.height / 2 - arrowEl.offsetHeight / 2;
    const arrowLeft = elRect.right;

    if (props.placement === TOOLTIP_PLACEMENTS.RIGHT_START) {
      arrowTop = elRect.top + arrowEl.offsetHeight;
    }

    if (props.placement === TOOLTIP_PLACEMENTS.RIGHT_END) {
      arrowTop = elRect.bottom - arrowEl.offsetHeight * 2;
    }

    setTooltipPosition(arrowEl, arrowTop, arrowLeft);
  }

  function isOutOfBounds(containerEl: HTMLElement) {
    const containerRect = containerEl.getBoundingClientRect();

    const width = containerEl.offsetWidth;
    const height = containerEl.offsetHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
      containerRect.left + width > viewportWidth ||
      containerRect.left < 0 ||
      containerRect.top < 0 ||
      containerRect.top + height > viewportHeight
    );
  }
</script>

<style scoped>
  .tooltip_container {
    text-align: start;
    font-size: v-bind(fontSize);
    background: v-bind(bgLight ? '#ffffff': '#1e293b');
    color: v-bind(bgLight ? '#374151': '#ffffff');
    padding: v-bind(padding);
    border-radius: 0.5rem;
    position: absolute;
    z-index: v-bind(zIndex);
    width: max-content;
    max-width: v-bind(`${maxWidth}px`);
    max-height: v-bind(`${maxHeight}px`);
    box-shadow:
      0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);

    overflow-wrap: break-word;
    line-height: 1.5rem;
    overflow-y: auto;
  }

  .tooltip_arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px;
    border-color: v-bind(arrowBorderColor);
    z-index: v-bind(zIndex);
  }
</style>
