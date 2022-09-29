import { watch } from 'vue';
import type { DirectiveBinding } from 'vue';
import { Tooltip } from '../tooltip';
export const argTooltipPlacement = (value: DirectiveBinding['value'], argTooltip: HTMLElement) => {
  if (value.theme) {
    for (const [key, val] of Object.entries(value.theme) as [string, any][]) {
      if (key === 'placement') {
        switch (val) {
          case 'topCenter':
            argTooltip?.style.removeProperty(Tooltip.bottom);

            argTooltip?.style.setProperty(Tooltip.top, '0');
            argTooltip?.style.setProperty(Tooltip.left, '50%');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(-50%, calc(-100% - 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowTop);
              argTooltip?.style.removeProperty(Tooltip.arrowRight);

              argTooltip?.style.setProperty(Tooltip.arrowBottom, '0');
              argTooltip?.style.setProperty(Tooltip.arrowLeft, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, 100%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'var(--v-tooltip-backgroundColor) transparent transparent transparent',
              );
            }
            break;
          case 'topLeft':
            argTooltip?.style.removeProperty(Tooltip.bottom);
            argTooltip?.style.removeProperty(Tooltip.right);

            argTooltip?.style.setProperty(Tooltip.top, '0');
            argTooltip?.style.setProperty(Tooltip.left, '0');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(-50%, calc(-100% - 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowTop);
              argTooltip?.style.removeProperty(Tooltip.arrowRight);

              argTooltip?.style.setProperty(Tooltip.arrowBottom, '0');
              argTooltip?.style.setProperty(Tooltip.arrowLeft, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, 100%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'var(--v-tooltip-backgroundColor) transparent transparent transparent',
              );
            }
            break;
          case 'topRight':
            argTooltip?.style.removeProperty(Tooltip.bottom);
            argTooltip?.style.removeProperty(Tooltip.left);

            argTooltip?.style.setProperty(Tooltip.top, '0');
            argTooltip?.style.setProperty(Tooltip.right, '0');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(50%, calc(-100% - 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowTop);
              argTooltip?.style.removeProperty(Tooltip.arrowLeft);

              argTooltip?.style.setProperty(Tooltip.arrowBottom, '0');
              argTooltip?.style.setProperty(Tooltip.arrowRight, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(50%, 100%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'var(--v-tooltip-backgroundColor) transparent transparent transparent',
              );
            }
            break;
          case 'bottomCenter':
            argTooltip?.style.removeProperty(Tooltip.top);

            argTooltip?.style.setProperty(Tooltip.bottom, '0');
            argTooltip?.style.setProperty(Tooltip.left, '50%');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(-50%, calc(100% + 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowBottom);
              argTooltip?.style.removeProperty(Tooltip.arrowRight);

              argTooltip?.style.setProperty(Tooltip.arrowTop, '0');
              argTooltip?.style.setProperty(Tooltip.arrowLeft, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, -100%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent var(--v-tooltip-backgroundColor) transparent',
              );
            }
            break;
          case 'bottomLeft':
            argTooltip?.style.removeProperty(Tooltip.top);
            argTooltip?.style.removeProperty(Tooltip.right);

            argTooltip?.style.setProperty(Tooltip.bottom, '0');
            argTooltip?.style.setProperty(Tooltip.left, '0');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(-50%, calc(100% + 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowBottom);
              argTooltip?.style.removeProperty(Tooltip.arrowRight);

              argTooltip?.style.setProperty(Tooltip.arrowTop, '0');
              argTooltip?.style.setProperty(Tooltip.arrowLeft, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, -100%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent var(--v-tooltip-backgroundColor) transparent',
              );
            }
            break;
          case 'bottomRight':
            argTooltip?.style.removeProperty(Tooltip.top);
            argTooltip?.style.removeProperty(Tooltip.left);

            argTooltip?.style.setProperty(Tooltip.bottom, '0');
            argTooltip?.style.setProperty(Tooltip.right, '0');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(50%, calc(100% + 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowBottom);
              argTooltip?.style.removeProperty(Tooltip.arrowLeft);

              argTooltip?.style.setProperty(Tooltip.arrowTop, '0');
              argTooltip?.style.setProperty(Tooltip.arrowRight, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(50%, -100%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent var(--v-tooltip-backgroundColor) transparent',
              );
            }
            break;
          case 'leftCenter':
            argTooltip?.style.removeProperty(Tooltip.bottom);
            argTooltip?.style.removeProperty(Tooltip.right);

            argTooltip?.style.setProperty(Tooltip.left, '0%');
            argTooltip?.style.setProperty(Tooltip.top, '50%');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(calc(-100% - 12px), -50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowBottom);
              argTooltip?.style.removeProperty(Tooltip.arrowLeft);

              argTooltip?.style.setProperty(Tooltip.arrowTop, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowRight, '0');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(100%, -50%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent transparent var(--v-tooltip-backgroundColor)',
              );
            }
            break;
          case 'leftTop':
            argTooltip?.style.removeProperty(Tooltip.bottom);
            argTooltip?.style.removeProperty(Tooltip.right);

            argTooltip?.style.setProperty(Tooltip.top, '0');
            argTooltip?.style.setProperty(Tooltip.left, '0%');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(calc(-100% - 12px), -50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowBottom);
              argTooltip?.style.removeProperty(Tooltip.arrowLeft);

              argTooltip?.style.setProperty(Tooltip.arrowTop, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowRight, '0');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(100%, -50%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent transparent var(--v-tooltip-backgroundColor)',
              );
            }
            break;
          case 'leftBottom':
            argTooltip?.style.removeProperty(Tooltip.top);
            argTooltip?.style.removeProperty(Tooltip.right);

            argTooltip?.style.setProperty(Tooltip.left, '0%');
            argTooltip?.style.setProperty(Tooltip.bottom, '0');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(calc(-100% - 12px), 50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowTop);
              argTooltip?.style.removeProperty(Tooltip.arrowLeft);

              argTooltip?.style.setProperty(Tooltip.arrowBottom, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowRight, '0');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(100%, 50%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent transparent var(--v-tooltip-backgroundColor)',
              );
            }
            break;
          case 'rightCenter':
            argTooltip?.style.removeProperty(Tooltip.bottom);
            argTooltip?.style.removeProperty(Tooltip.left);

            argTooltip?.style.setProperty(Tooltip.right, '0');
            argTooltip?.style.setProperty(Tooltip.top, '50%');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(calc(100% + 12px), -50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowBottom);
              argTooltip?.style.removeProperty(Tooltip.arrowRight);

              argTooltip?.style.setProperty(Tooltip.arrowTop, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowLeft, '0');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(-100%, -50%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent var(--v-tooltip-backgroundColor) transparent  transparent',
              );
            }
            break;
          case 'rightTop':
            argTooltip?.style.removeProperty(Tooltip.bottom);
            argTooltip?.style.removeProperty(Tooltip.left);

            argTooltip?.style.setProperty(Tooltip.top, '0');
            argTooltip?.style.setProperty(Tooltip.right, '0');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(calc(100% + 12px), -50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowBottom);
              argTooltip?.style.removeProperty(Tooltip.arrowRight);

              argTooltip?.style.setProperty(Tooltip.arrowTop, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowLeft, '0');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(-100%, -50%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent var(--v-tooltip-backgroundColor) transparent  transparent',
              );
            }
            break;
          case 'rightBottom':
            argTooltip?.style.removeProperty(Tooltip.top);
            argTooltip?.style.removeProperty(Tooltip.left);

            argTooltip?.style.setProperty(Tooltip.bottom, '0');
            argTooltip?.style.setProperty(Tooltip.right, '0');
            argTooltip?.style.setProperty(Tooltip.translate, 'translate(calc(100% + 12px), 50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              argTooltip?.style.removeProperty(Tooltip.arrowTop);
              argTooltip?.style.removeProperty(Tooltip.arrowRight);

              argTooltip?.style.setProperty(Tooltip.arrowBottom, '50%');
              argTooltip?.style.setProperty(Tooltip.arrowLeft, '0');
              argTooltip?.style.setProperty(Tooltip.arrowTranslate, 'translate(-100%, 50%)');
              argTooltip?.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent var(--v-tooltip-backgroundColor) transparent  transparent',
              );
            }
            break;
          default:
            break;
        }
      } else {
        switch (key) {
          case 'maxWidth':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'width':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'color':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'fontSize':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'backgroundColor':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'padding':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          // can be used top, bottom, left, right if placement is not used
          case 'top':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'bottom':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'left':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'right':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'textAlign':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'display':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'translate':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          /****  arrow ****/
          case 'arrowTop':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowBottom':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowLeft':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowRight':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowTranslate':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowBorderColor':
            argTooltip?.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'hide':
            watch(
              () => val,
              () => {
                if (val) {
                  argTooltip?.style.setProperty(Tooltip.opacity, '0');
                  argTooltip?.style.setProperty(Tooltip.visibility, 'hidden');
                  /****  arrow ****/
                  argTooltip?.style.setProperty(Tooltip.arrowOpacity, '0');
                  argTooltip?.style.setProperty(Tooltip.arrowVisibility, 'hidden');
                }

                if (!val) {
                  argTooltip?.style.setProperty(Tooltip.opacity, '1');
                  argTooltip?.style.setProperty(Tooltip.visibility, 'visible');
                  /****  arrow ****/
                  argTooltip?.style.setProperty(Tooltip.arrowOpacity, '1');
                  argTooltip?.style.setProperty(Tooltip.arrowVisibility, 'visible');
                }
              },
              { immediate: true },
            );
            break;
          default:
            break;
        }
      }
    }
  }
};
