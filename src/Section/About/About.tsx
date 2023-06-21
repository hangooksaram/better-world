"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import profileImage from "../../../public/profile.jpeg";
import Image from "next/image";
import { StyledCard } from "@/components/Ui/Card/Card";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Flex, FlexColumn, Text } from "../../components/Ui/Template";
import Link from "@/components/Ui/Link";

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
    <Flex justifyContent="space-between">
      <Flex flexDirection="column" width="50%">
        <StyledCard color="black" height="50%">
          <div
            className={css`
              text-align: center;
            `}
          >
            <Image
              className={css`
                border-radius: 50%;
                width: 200px;
                height: 200px;
              `}
              alt={"프로필 이미지"}
              src={profileImage}
            />

            <Text size="md">만드는 것을 즐기는 오현재입니다.</Text>
          </div>
        </StyledCard>
        <StyledCard height="40%">
          <Flex flexDirection="column" justifyContent="space-between">
            <div>
              <Text size="xs">깃허브</Text>
              <Link size="xs" href="https://hangooksaram.github.com">
                hangooksaram.github.com
              </Link>
            </div>
            <div>
              <Text size="xs">블로그</Text>
              <Link size="xs" href="https://pimpdevelop.tistory.com">
                pimpdevelop.tistory.com
              </Link>
            </div>
            <div>
              <Text size="xs">이메일</Text>
              <Text size="xs">hyunjae1995@gmail.com</Text>
            </div>
          </Flex>
        </StyledCard>
      </Flex>
      <StyledCard width="50%">
        <Flex flexDirection="column" rowGap="50px">
          <Text size="sm">
            제가 좋아하는 무언가를 만드는 것이 즐거워 개발자 를 시작하게
            되었습니다.
          </Text>
          <Text size="sm">
            시간이 흘러가며 다른 사람이 좋아할 만 한것, 다른사람의 입장에서
            서비스를 생각해보는 것이 즐거워져 개발자를 계속하고 있습니다.
          </Text>
          <Text size="sm">Clean Code 와 코드의 재사용에 관심이 많습니다.</Text>
        </Flex>
      </StyledCard>
    </Flex>
  );
};

export default AboutSection;
