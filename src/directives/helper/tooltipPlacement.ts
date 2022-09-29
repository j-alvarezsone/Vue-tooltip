import type { DirectiveBinding } from 'vue';
import { Tooltip } from '../tooltip';
export const tooltipPlacement = (value: DirectiveBinding['value'], el: HTMLElement) => {
  if (value.theme) {
    for (const [key, val] of Object.entries(value.theme) as [string, any][]) {
      if (key === 'placement') {
        switch (val) {
          case 'topCenter':
            el.style.removeProperty(Tooltip.bottom);

            el.style.setProperty(Tooltip.top, '0');
            el.style.setProperty(Tooltip.left, '50%');
            el.style.setProperty(Tooltip.translate, 'translate(-50%, calc(-100% - 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowTop);
              el.style.removeProperty(Tooltip.arrowRight);

              el.style.setProperty(Tooltip.arrowBottom, '0');
              el.style.setProperty(Tooltip.arrowLeft, '50%');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, 100%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'var(--v-tooltip-backgroundColor) transparent transparent transparent',
              );
            }
            break;
          case 'topLeft':
            el.style.removeProperty(Tooltip.bottom);
            el.style.removeProperty(Tooltip.right);

            el.style.setProperty(Tooltip.top, '0');
            el.style.setProperty(Tooltip.left, '0');
            el.style.setProperty(Tooltip.translate, 'translate(-50%, calc(-100% - 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowTop);
              el.style.removeProperty(Tooltip.arrowRight);

              el.style.setProperty(Tooltip.arrowBottom, '0');
              el.style.setProperty(Tooltip.arrowLeft, '50%');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, 100%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'var(--v-tooltip-backgroundColor) transparent transparent transparent',
              );
            }
            break;
          case 'topRight':
            el.style.removeProperty(Tooltip.bottom);
            el.style.removeProperty(Tooltip.left);

            el.style.setProperty(Tooltip.top, '0');
            el.style.setProperty(Tooltip.right, '0');
            el.style.setProperty(Tooltip.translate, 'translate(50%, calc(-100% - 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowTop);
              el.style.removeProperty(Tooltip.arrowLeft);

              el.style.setProperty(Tooltip.arrowBottom, '0');
              el.style.setProperty(Tooltip.arrowRight, '50%');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(50%, 100%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'var(--v-tooltip-backgroundColor) transparent transparent transparent',
              );
            }
            break;
          case 'bottomCenter':
            el.style.removeProperty(Tooltip.top);

            el.style.setProperty(Tooltip.bottom, '0');
            el.style.setProperty(Tooltip.left, '50%');
            el.style.setProperty(Tooltip.translate, 'translate(-50%, calc(100% + 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowBottom);
              el.style.removeProperty(Tooltip.arrowRight);

              el.style.setProperty(Tooltip.arrowTop, '0');
              el.style.setProperty(Tooltip.arrowLeft, '50%');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, -100%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent var(--v-tooltip-backgroundColor) transparent',
              );
            }
            break;
          case 'bottomLeft':
            el.style.removeProperty(Tooltip.top);
            el.style.removeProperty(Tooltip.right);

            el.style.setProperty(Tooltip.bottom, '0');
            el.style.setProperty(Tooltip.left, '0');
            el.style.setProperty(Tooltip.translate, 'translate(-50%, calc(100% + 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowBottom);
              el.style.removeProperty(Tooltip.arrowRight);

              el.style.setProperty(Tooltip.arrowTop, '0');
              el.style.setProperty(Tooltip.arrowLeft, '50%');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, -100%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent var(--v-tooltip-backgroundColor) transparent',
              );
            }
            break;
          case 'bottomRight':
            el.style.removeProperty(Tooltip.top);
            el.style.removeProperty(Tooltip.left);

            el.style.setProperty(Tooltip.bottom, '0');
            el.style.setProperty(Tooltip.right, '0');
            el.style.setProperty(Tooltip.translate, 'translate(50%, calc(100% + 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowBottom);
              el.style.removeProperty(Tooltip.arrowLeft);

              el.style.setProperty(Tooltip.arrowTop, '0');
              el.style.setProperty(Tooltip.arrowRight, '50%');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(50%, -100%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent var(--v-tooltip-backgroundColor) transparent',
              );
            }
            break;
          case 'leftCenter':
            el.style.removeProperty(Tooltip.bottom);
            el.style.removeProperty(Tooltip.right);

            el.style.setProperty(Tooltip.top, '50%');
            el.style.setProperty(Tooltip.left, '0');
            el.style.setProperty(Tooltip.translate, 'translate(calc(-100% - 12px), -50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowBottom);
              el.style.removeProperty(Tooltip.arrowLeft);

              el.style.setProperty(Tooltip.arrowTop, '50%');
              el.style.setProperty(Tooltip.arrowRight, '0');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(100%, -50%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent transparent var(--v-tooltip-backgroundColor)',
              );
            }
            break;
          case 'leftTop':
            el.style.removeProperty(Tooltip.bottom);
            el.style.removeProperty(Tooltip.right);

            el.style.setProperty(Tooltip.top, '0');
            el.style.setProperty(Tooltip.left, '0');
            el.style.setProperty(Tooltip.translate, 'translate(calc(-100% - 12px), -50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowBottom);
              el.style.removeProperty(Tooltip.arrowLeft);

              el.style.setProperty(Tooltip.arrowTop, '50%');
              el.style.setProperty(Tooltip.arrowRight, '0');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(100%, -50%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent transparent var(--v-tooltip-backgroundColor)',
              );
            }
            break;
          case 'leftBottom':
            el.style.removeProperty(Tooltip.top);
            el.style.removeProperty(Tooltip.right);

            el.style.setProperty(Tooltip.bottom, '0');
            el.style.setProperty(Tooltip.left, '0');
            el.style.setProperty(Tooltip.translate, 'translate(calc(-100% - 12px), 50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowTop);
              el.style.removeProperty(Tooltip.arrowLeft);

              el.style.setProperty(Tooltip.arrowBottom, '50%');
              el.style.setProperty(Tooltip.arrowRight, '0');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(100%, 50%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent transparent transparent var(--v-tooltip-backgroundColor)',
              );
            }
            break;
          case 'rightCenter':
            el.style.removeProperty(Tooltip.bottom);
            el.style.removeProperty(Tooltip.left);

            el.style.setProperty(Tooltip.top, '50%');
            el.style.setProperty(Tooltip.right, '0');
            el.style.setProperty(Tooltip.translate, 'translate(calc(100% + 12px), -50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowBottom);
              el.style.removeProperty(Tooltip.arrowRight);

              el.style.setProperty(Tooltip.arrowTop, '50%');
              el.style.setProperty(Tooltip.arrowLeft, '0');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(-100%, -50%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent var(--v-tooltip-backgroundColor) transparent  transparent',
              );
            }
            break;
          case 'rightTop':
            el.style.removeProperty(Tooltip.bottom);
            el.style.removeProperty(Tooltip.left);

            el.style.setProperty(Tooltip.top, '0');
            el.style.setProperty(Tooltip.right, '0');
            el.style.setProperty(Tooltip.translate, 'translate(calc(100% + 12px), -50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowBottom);
              el.style.removeProperty(Tooltip.arrowRight);

              el.style.setProperty(Tooltip.arrowTop, '50%');
              el.style.setProperty(Tooltip.arrowLeft, '0');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(-100%, -50%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent var(--v-tooltip-backgroundColor) transparent  transparent',
              );
            }
            break;
          case 'rightBottom':
            el.style.removeProperty(Tooltip.top);
            el.style.removeProperty(Tooltip.left);

            el.style.setProperty(Tooltip.bottom, '0');
            el.style.setProperty(Tooltip.right, '0');
            el.style.setProperty(Tooltip.translate, 'translate(calc(100% + 12px), 50%)');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowTop);
              el.style.removeProperty(Tooltip.arrowRight);

              el.style.setProperty(Tooltip.arrowBottom, '50%');
              el.style.setProperty(Tooltip.arrowLeft, '0');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(-100%, 50%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent var(--v-tooltip-backgroundColor) transparent  transparent',
              );
            }
            break;
          case 'serviceDelete':
            el.style.removeProperty(Tooltip.bottom);
            el.style.removeProperty(Tooltip.left);

            el.style.setProperty(Tooltip.top, '50%');
            el.style.setProperty(Tooltip.right, '0');
            el.style.setProperty(Tooltip.translate, 'translate(calc(40% + 12px), -50%)');

            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowTop);
              el.style.removeProperty(Tooltip.arrowRight);

              el.style.setProperty(Tooltip.arrowBottom, '50%');
              el.style.setProperty(Tooltip.arrowLeft, '0');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(-100%, 50%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'transparent var(--v-tooltip-backgroundColor) transparent  transparent',
              );
            }
            break;
          case 'grid':
            el.style.removeProperty(Tooltip.bottom);

            el.style.setProperty(Tooltip.top, '0');
            el.style.setProperty(Tooltip.left, '0');
            el.style.setProperty(Tooltip.translate, 'translateY(calc(-80% - 12px))');
            /****  arrow ****/
            if (value.displayArrow) {
              el.style.removeProperty(Tooltip.arrowTop);
              el.style.removeProperty(Tooltip.arrowRight);

              el.style.setProperty(Tooltip.arrowBottom, '0');
              el.style.setProperty(Tooltip.arrowLeft, '50%');
              el.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, 100%)');
              el.style.setProperty(
                Tooltip.arrowBorderColor,
                'var(--v-tooltip-backgroundColor) transparent transparent transparent',
              );
            }
            break;
          default:
            break;
        }
      } else {
        switch (key) {
          case 'maxWidth':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'width':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'color':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'fontSize':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'backgroundColor':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'padding':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          // can be used top, bottom, left, right if placement is not used
          case 'top':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'bottom':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'left':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'right':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'textAlign':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'display':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'translate':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          /****  arrow ****/
          case 'arrowTop':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowBottom':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowLeft':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowRight':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowTranslate':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          case 'arrowBorderColor':
            el.style.setProperty(`--v-tooltip-${key}`, val);
            break;
          default:
            break;
        }
      }
    }
  }
};
