import type { DirectiveBinding } from 'vue';
import { tooltipModifiers } from './tooltipModifiers';
import { Tooltip } from '../tooltip';
import { tooltipPlacement } from './tooltipPlacement';
import { argTooltipPlacement } from './argTooltipPlacement';
export const updateTooltip = (
  el: HTMLElement,
  value: DirectiveBinding['value'],
  modifiers: DirectiveBinding['modifiers'],
  arg: DirectiveBinding['arg'],
): void => {
  const tooltipDiv: HTMLDivElement = document.createElement('div');
  const hasTooltipClass = el.querySelector('.tooltip') as HTMLDivElement;

  /****  select arg tooltip class ****/
  const argTooltip = document.querySelector(`.${arg}`) as HTMLElement;
  const argTooltipDiv: HTMLDivElement = document.createElement('div');
  const hasArgTooltipClass = argTooltip?.querySelector('.tooltip') as HTMLDivElement;

  if (typeof value === 'string' && value) {
    el.classList.add('tooltip-parent');

    if (!hasTooltipClass) {
      tooltipDiv.classList.add('tooltip');
      tooltipDiv.innerHTML = value;
      el.append(tooltipDiv);
    }

    tooltipModifiers(modifiers, el);
    return;
  }

  if (typeof value === 'string' && !value) {
    el.classList.remove('tooltip-parent');
  }

  /****  object ****/
  if (typeof value === 'object' && value.text) {
    if (!hasTooltipClass) {
      tooltipDiv.classList.add('tooltip');
      tooltipDiv.innerHTML = value.text;
      el.append(tooltipDiv);
    }

    if (value.displayArrow) {
      el.style.setProperty(Tooltip.arrowDisplay, 'inline');
    }

    tooltipPlacement(value, el);
  }

  /****  arg ****/
  if (typeof value === 'object' && value.argText) {
    if (!arg) {
      argTooltip?.classList.remove('tooltip-parent');
    }

    if (arg) {
      argTooltip?.classList.add('tooltip-parent');

      if (!hasArgTooltipClass) {
        argTooltipDiv.classList.add('tooltip');
        argTooltipDiv.innerHTML = value.argText;
        argTooltip?.append(argTooltipDiv);
      }
    }

    if (value.displayArrow) {
      argTooltip?.style.setProperty(Tooltip.arrowDisplay, 'inline');
    }

    argTooltipPlacement(value, argTooltip);
  }

  if (typeof value === 'object' && !value.text) {
    el.classList.remove('tooltip-parent');
  }
};
