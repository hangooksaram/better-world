import { css } from "@emotion/css";
import { motion, useAnimate } from "framer-motion";
import { useRef } from "react";

const NavigationDetail = ({ width }: { width: string }) => {
  const test = 1000;
  return (
    <motion.div
      className={css`
        white-space: nowrap;
        /* position: absolute; */
      `}
      animate={{ x: [parseInt(width) + 500, -1000] }}
      transition={{ repeat: Infinity, repeatDelay: 0.5, duration: 10 }}
    >
      this is detail. this is detail. this is detail. this is detail. this is
      detail.
    </motion.div>
  );
};

export default NavigationDetail;
