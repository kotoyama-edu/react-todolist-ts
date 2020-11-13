import { RefObject, useEffect } from "react";

export type OutsideClickHandler = MouseEvent | TouchEvent;

function useOnClickOutside<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T>,
  handler: (event: OutsideClickHandler) => void
) {
  useEffect(() => {
    const listener = (event: OutsideClickHandler): void => {
      const element = ref.current;
      if (!element || element.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}

export default useOnClickOutside;
