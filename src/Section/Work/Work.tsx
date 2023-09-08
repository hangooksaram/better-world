"use client";
import { StyledCard } from "@/components/Ui/Card/Card";
import Tag from "@/components/Ui/Tag";
import { Flex, Text } from "@/components/Ui/Template";
import React from "react";
import WorkDetail from "./WorkDetail";
import Done from "../../assets/icon/Done.svg";
import { css } from "@emotion/css";
import Link from "@/components/Ui/Link";
import { WORK_ARCHIVES, WORK_INTRO, WORK_SKILLS } from "@/contents";

export interface WorkArchiveProps {
  title: string;
  details: WorkDetailsProps[];
}

export interface WorkDetailsProps {
  text: string;
  link?: string;
}

const WorkSection = () => {
  return (
    <Flex flexDirection="column" rowGap="24px">
      <StyledCard backgroundColor="#1B1B1F">
        <Flex flexDirection="column" rowGap="48px">
          <Flex alignItems="flex-end" columnGap="24px">
            <Link color="white" size="lg" href="https://event-us.kr/">
              이벤터스
            </Link>

            <Text color="white" size="xs">
              2020.04 - 2021.12 (약 1년 9개월)
            </Text>
          </Flex>
          <Flex>
            {WORK_SKILLS.map((skill) => (
              <Tag
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </Flex>

          <Flex flexDirection="column" rowGap="24px">
            {WORK_INTRO.map((content) => (
              <Flex alignItems="center" key={content}>
                <Text color="white" size="sm">
                  <Done fill="white" width={40} height={40} />
                  {content}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </StyledCard>
      <Flex
        className={css`
          @media (max-width: 1000px) {
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}
        flexDirection="column"
      >
        {WORK_ARCHIVES.map(({ title, details }, index) => (
          <WorkDetail
            key={`work-archives-${index}`}
            title={title}
            details={details}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default WorkSection;
