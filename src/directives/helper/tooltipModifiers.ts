import type { DirectiveBinding } from 'vue';
import { Tooltip } from '../tooltip';

export const tooltipModifiers = (modifiers: DirectiveBinding['modifiers'], el: HTMLElement) => {
  if (modifiers.arrow) {
    el.style.setProperty(Tooltip.arrowDisplay, 'inline');
  }
  /************
   ********* Default Tooltip topCenter ********
   ************/
  el.style.removeProperty(Tooltip.bottom);

  el.style.setProperty(Tooltip.top, '0');
  el.style.setProperty(Tooltip.left, '50%');
  el.style.setProperty(Tooltip.translate, 'translate(-50%, calc(-100% - 12px))');

  /****  arrow ****/
  if (modifiers.arrow) {
    el.style.removeProperty(Tooltip.arrowTop);
    el.style.removeProperty(Tooltip.arrowRight);

    el.style.setProperty(Tooltip.arrowBottom, '0');
    el.style.setProperty(Tooltip.arrowLeft, '50%');
    el.style.setProperty(Tooltip.arrowTranslate, 'translate(-50%, 100%)');
    el.style.setProperty(
      Tooltip.arrowBorderColor,
      'var(--v-tooltip-backgroundColor) transparent transparent transparent',
    );
  } else {
    el.style.setProperty(Tooltip.arrowDisplay, 'none');
  }
  /************
   ********* top ********
   ************/
  if (modifiers.topLeft) {
    el.style.removeProperty(Tooltip.bottom);
    el.style.removeProperty(Tooltip.right);

    el.style.setProperty(Tooltip.top, '0');
    el.style.setProperty(Tooltip.left, '0');
    el.style.setProperty(Tooltip.translate, 'translate(-50%, calc(-100% - 12px))');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  if (modifiers.topRight) {
    el.style.removeProperty(Tooltip.bottom);
    el.style.removeProperty(Tooltip.left);

    el.style.setProperty(Tooltip.top, '0');
    el.style.setProperty(Tooltip.right, '0');
    el.style.setProperty(Tooltip.translate, 'translate(50%, calc(-100% - 12px))');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  /************
   ********* bottom ********
   ************/
  if (modifiers.bottomCenter) {
    el.style.removeProperty(Tooltip.top);

    el.style.setProperty(Tooltip.bottom, '0');
    el.style.setProperty(Tooltip.left, '50%');
    el.style.setProperty(Tooltip.translate, 'translate(-50%, calc(100% + 12px))');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  if (modifiers.bottomLeft) {
    el.style.removeProperty(Tooltip.top);
    el.style.removeProperty(Tooltip.right);

    el.style.setProperty(Tooltip.bottom, '0');
    el.style.setProperty(Tooltip.left, '0');
    el.style.setProperty(Tooltip.translate, 'translate(-50%, calc(100% + 12px))');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  if (modifiers.bottomRight) {
    el.style.removeProperty(Tooltip.top);
    el.style.removeProperty(Tooltip.left);

    el.style.setProperty(Tooltip.bottom, '0');
    el.style.setProperty(Tooltip.right, '0');
    el.style.setProperty(Tooltip.translate, 'translate(50%, calc(100% + 12px))');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  /************
   ********* left ********
   ************/
  if (modifiers.leftCenter) {
    el.style.removeProperty(Tooltip.bottom);
    el.style.removeProperty(Tooltip.right);

    el.style.setProperty(Tooltip.top, '50%');
    el.style.setProperty(Tooltip.left, '0');
    el.style.setProperty(Tooltip.translate, 'translate(calc(-100% - 12px), -50%)');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  if (modifiers.leftTop) {
    el.style.removeProperty(Tooltip.bottom);
    el.style.removeProperty(Tooltip.right);

    el.style.setProperty(Tooltip.top, '0');
    el.style.setProperty(Tooltip.left, '0');
    el.style.setProperty(Tooltip.translate, 'translate(calc(-100% - 12px), -50%)');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  if (modifiers.leftBottom) {
    el.style.removeProperty(Tooltip.top);
    el.style.removeProperty(Tooltip.right);

    el.style.setProperty(Tooltip.bottom, '0');
    el.style.setProperty(Tooltip.left, '0');
    el.style.setProperty(Tooltip.translate, 'translate(calc(-100% - 12px), 50%)');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  /************
   ********* right ********
   ************/
  if (modifiers.rightCenter) {
    el.style.removeProperty(Tooltip.bottom);
    el.style.removeProperty(Tooltip.left);

    el.style.setProperty(Tooltip.top, '50%');
    el.style.setProperty(Tooltip.right, '0');
    el.style.setProperty(Tooltip.translate, 'translate(calc(100% + 12px), -50%)');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  if (modifiers.rightTop) {
    el.style.removeProperty(Tooltip.bottom);
    el.style.removeProperty(Tooltip.left);

    el.style.setProperty(Tooltip.top, '0');
    el.style.setProperty(Tooltip.right, '0');
    el.style.setProperty(Tooltip.translate, 'translate(calc(100% + 12px), -50%)');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }

  if (modifiers.rightBottom) {
    el.style.removeProperty(Tooltip.top);
    el.style.removeProperty(Tooltip.left);

    el.style.setProperty(Tooltip.bottom, '0');
    el.style.setProperty(Tooltip.right, '0');
    el.style.setProperty(Tooltip.translate, 'translate(calc(100% + 12px), 50%)');

    /****  arrow ****/
    if (modifiers.arrow) {
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
  }
};
