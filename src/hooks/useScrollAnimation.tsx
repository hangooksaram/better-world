import { useScroll } from "framer-motion";
import { RefObject } from "react";
import React from "react";

const useScrollAnimation = (target: RefObject<HTMLDivElement>) => {
  const scroll = useScroll({
    target: target,
  });
  console.log(scroll);
};

export default useScrollAnimation;
