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
import Done from "../../assets/icon/Done.svg";

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
    <Flex>
      <Flex flexDirection="column" width="40%">
        <StyledCard backgroundColor="var(--primary-color)" height="60%">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
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

            <Text
              className={css`
                word-break: keep-all;
              `}
              align="center"
              size="md"
            >
              만드는 것을 즐거워 하는 오현재입니다.
            </Text>
            <Text size="xs"></Text>
          </Flex>
        </StyledCard>
        <StyledCard height="50%">
          <Flex flexDirection="column" rowGap="24px" justifyContent="center">
            <div>
              <Text size="xs">깃허브</Text>
              <Link size="xs" href="https://github.com/hangooksaram">
                github.com/hangooksaram
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
      <Flex width="60%" flexDirection="column">
        <StyledCard height="65%">
          <Flex flexDirection="column" justifyContent="space-between">
            <Text size="sm">
              <Done width={32} height={32} /> 단순히 무언가를 만드는 것이 즐거워
              개발자 를 시작하게 되었습니다.
            </Text>
            <Text size="sm">
              <Done width={32} height={32} />
              프로젝트와 커리어를 이어나가며 다른 사람이 좋아할 만 한 것을
              만드는 것이 즐거워져 개발자를 계속하고 있습니다.
            </Text>
            <Text size="sm">
              <Done width={32} height={32} />
              개발 은 현실의 문제를 해결하고, 더 나은 세상을 만드는 데 가장 좋은
              도구라고 생각합니다.
            </Text>
            <Text size="sm">
              <Done width={32} height={32} />
              코드 를 컴포넌트화 하고 재사용 하는 것에 관심이 많습니다.
            </Text>
          </Flex>
        </StyledCard>
        <StyledCard height="35%" backgroundColor="rgb(214, 248, 255)">
          <Flex flexDirection="column" justifyContent="space-between">
            <div>
              <Text size="xs">2014.03 - 2021.09</Text>
              <Flex height="auto" alignItems="center">
                <Text size="xs">가톨릭대학교 컴퓨터정보공학부 졸업</Text>
                <Text size="xs">학점 3.24 / 4.5</Text>
              </Flex>
            </div>
            <div>
              <Text size="xs">2019.08</Text>
              <Text size="xs">정보처리기사 자격증</Text>
            </div>
            <div>
              <Text size="xs">2020.08</Text>
              <Text size="xs">
                교내 캡스톤 창업경진대회 우수상 수상 및 SW 스타트업 챌린지 본선
                진출
              </Text>
            </div>
          </Flex>
        </StyledCard>
      </Flex>
    </Flex>
  );
};

export default AboutSection;
