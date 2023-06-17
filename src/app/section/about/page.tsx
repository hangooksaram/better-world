"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import profileImage from "../../../../public/profile.jpeg";
import Image from "next/image";
import { CardComponent } from "@/components/Ui/Card";
import { css } from "@emotion/css";

const AboutSection = () => {
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
    <CardComponent color="black">
      <Image
        className={css`
          border-radius: 50%;
          width: 200px;
          height: 200px;
        `}
        alt={"프로필 이미지"}
        src={profileImage}
      />
      <div
        className={css`
          font-size: 24px;
        `}
      >
        만드는 것을 좋아하는 개발자 오현재입니다.
      </div>
    </CardComponent>
  );
};

export default AboutSection;
