import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export const useMoveHorizontalAnimation = (
  el: RefObject<HTMLDivElement>,
  contentPosition: number,
  setContentPosition: Dispatch<SetStateAction<number>>
) => {
  const transformAnimation = () => {
    if (el.current) {
      el.current.style.left = `${parseInt(el.current.style.left) - 2}px`;

      setContentPosition(parseInt(el.current!.style.left));
      if (parseInt(el.current.style.left) < -el.current.clientWidth!) {
        el.current!.style.left = "100px";
      }
      requestAnimationFrame(transformAnimation);
    }
  };

  useEffect(() => {
    el.current!.style.left = contentPosition ? `${contentPosition}px` : "100px";
    const animationInstance = requestAnimationFrame(transformAnimation);

    return () => cancelAnimationFrame(animationInstance);
  }, []);
};
