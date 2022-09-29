import { isRef, onMounted, unref, watch, onBeforeUnmount } from 'vue';
import type { Ref } from 'vue';

/**
 * Window Event based useEventListener interface
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends keyof WindowEventMap>(
  target: Window,
  event: E,
  listener: (this: Window, ev: WindowEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): void;

/**
 * Document Event based useEventListener interface
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends keyof DocumentEventMap>(
  target: Document,
  event: E,
  listener: (this: Document, ev: DocumentEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): void;

/**
 * Element Event based useEventListener interface
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export function useEventListener<E extends keyof HTMLElementEventMap>(
  target: Ref<EventTarget | null> | EventTarget,
  event: E,
  listener: (ev: HTMLElementEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): void;

export function useEventListener(
  // the target could be reactive ref which adds flexibility
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  listener: (ev: Event) => any,
  options?: boolean | AddEventListenerOptions,
) {
  // if its a reactive ref, use a watcher
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, listener, options);
      value?.addEventListener(event, listener, options);
    });
  } else {
    // otherwise use the mounted hook
    onMounted(() => {
      target?.addEventListener(event, listener, options);
    });
  }
  // clean it up
  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, listener, options);
  });
}
