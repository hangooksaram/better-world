import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = useScroll();

  return (
    <div ref={ref}>
      <motion.div></motion.div>
    </div>
  );
};

export default AboutSection;
