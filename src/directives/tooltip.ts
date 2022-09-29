import { updateTooltip } from './helper/updateTooltip';
import type { DirectiveBinding } from 'vue';

export enum Tooltip {
  top = '--v-tooltip-top',
  bottom = '--v-tooltip-bottom',
  left = '--v-tooltip-left',
  right = '--v-tooltip-right',
  translate = '--v-tooltip-translate',
  opacity = '--v-tooltip-opacity',
  visibility = '--v-tooltip-visibility',
  backgroundColor = '--v-tooltip-backgroundColor',
  /****  arrow ****/
  arrowDisplay = '--v-tooltip-arrowDisplay',
  arrowTop = '--v-tooltip-arrowTop',
  arrowBottom = '--v-tooltip-arrowBottom',
  arrowLeft = '--v-tooltip-arrowLeft',
  arrowRight = '--v-tooltip-arrowRight',
  arrowTranslate = '--v-tooltip-arrowTranslate',
  arrowBorderColor = '--v-tooltip-arrowBorderColor',
  arrowOpacity = '--v-tooltip-arrowOpacity',
  arrowVisibility = '--v-tooltip-arrowVisibility',
}

export const tooltip = {
  mounted: (el: HTMLElement, { value, modifiers, arg }: DirectiveBinding): void => {
    if (typeof value === 'object' && value.text) {
      el.classList.add('tooltip-parent');
    }

    if (typeof value === 'string' && value) {
      el.classList.add('tooltip-parent');
    }

    updateTooltip(el, value, modifiers, arg);
  },
  beforeUpdate: (el: HTMLElement, { value, modifiers, arg }: DirectiveBinding): void => {
    if (typeof value === 'object' && value.text) {
      el.classList.add('tooltip-parent');
    }

    if (typeof value === 'string' && value) {
      el.classList.add('tooltip-parent');
    }

    updateTooltip(el, value, modifiers, arg);
  },
};
export interface ThemeOptions {
  maxWidth?: string;
  width?: string;
  color?: string;
  fontSize?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  textAlign?: string;
  display?: string;
  translate?: string;
  backgroundColor?: string;
  padding?: string;
  hide?: boolean;
  /****  arrow ****/
  arrowTop?: string;
  arrowBottom?: string;
  arrowLeft?: string;
  arrowRight?: string;
  arrowTranslate?: string;
  arrowBorderColor?: string;

  placement?: Placement;
}

type Placement =
  | 'topCenter'
  | 'topLeft'
  | 'topRight'
  | 'bottomCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftCenter'
  | 'leftTop'
  | 'leftBottom'
  | 'rightCenter'
  | 'rightTop'
  | 'rightBottom'
  | 'serviceDelete';

type TooltipContent = {
  text: string;
  displayArrow: boolean;
  theme: ThemeOptions;
  argText?: string;
};

type Options = {
  text: string;
  themeOptions: ThemeOptions;
  displayArrow?: boolean;
  argText?: string;
};

export const tooltipContent = (options: Options): TooltipContent => {
  const { text, displayArrow = true, themeOptions, argText } = options;
  return {
    text,
    theme: { ...themeOptions },
    displayArrow,
    argText,
  };
};
