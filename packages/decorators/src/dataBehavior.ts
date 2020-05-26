import { LitElement } from "lit-element";

/**
 * A method decorator that only invokes the handler if a descendant
 * has data-* declared (you specify '*').
 *
 * @param eventName the event name to listen for
 * @param behavior the data-* attribute whose presence invokes this handler
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 *
 * @example
 * ```ts
 * class MyElement {
 *   @dataBehavior('click', 'accordion-close')
 *   handleClose(e, el) {
 *     const index = parseInt(el.dataset("index"));
 *     this.accordions[index].close();
 *   }
 * ```
 * @category Decorator
 */
export const dataBehavior = (eventName: string, behavior: string) => {
  return (
    target: LitElement,
    _key: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;
    const handler = (event: any) => {
      const path = event.composedPath();
      for (let i = 0, l = path.indexOf(this); i < l; i++) {
        const el: HTMLElement = path[i];
        if (el.dataset && el.dataset.hasOwnProperty(behavior)) {
          if (!el.hasAttribute("aria-role")) {
            console.warn(`
            Data behavior ${behavior} was declared on ${el}, but no aria-role is present.\n
            Please add a relevant aria-role.\n
            https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
            `);
          }
          originalMethod.apply(this, event, el);
          break;
        }
      }
    };
    target.addEventListener(eventName, handler);
  };
};
