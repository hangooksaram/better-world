import { motion, useScroll, Variants } from "framer-motion";
import React, { useRef } from "react";
import profileImage from "../../../../public/profile.jpeg";
import Image from "next/image";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = useScroll();

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div>
      <motion.div variants={cardVariants}>
        <Image alt={"프로필 이미지"} src={profileImage} />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
