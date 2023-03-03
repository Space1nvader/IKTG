import { RefObject, useEffect } from 'react';

/**
 * Хук отслеживает клики вне элемента, переданного аргументом
 *
 * @param ref - HTMLElement отслеживаемый элемент, по которому будет считываться клик
 * @param handler - функция, которая будет вызвана при клике вне отслеживаемого элемента
 *
 * @example useClickOutside(ref.current, onClick)
 */
export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: (event?: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: TouchEvent | MouseEvent) => {
      const node = event.target as Node;

      if (!ref.current || ref.current.contains(node)) {
        return;
      }
      setTimeout(() => {
        handler(event);
      });
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};
