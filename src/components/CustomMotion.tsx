import { motion } from "framer-motion";
import React, { forwardRef } from "react";

interface Props {
  children?: React.ReactNode;
}
type Ref = HTMLDivElement;

const CustomMotion = forwardRef<Ref, Props>((props, ref) => (
  <div ref={ref}>{props.children}</div>
));
CustomMotion.displayName = "CustomMotion";

export default CustomMotion;
