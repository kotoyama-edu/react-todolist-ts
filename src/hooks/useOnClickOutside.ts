import { useEffect } from "react";

const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLElement>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: Event): void => {
      if (!ref.current || ref.current.contains(event.target as Element)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return (): void => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
};

export default useOnClickOutside;
