"use client";
import React from "react";
import { StyledCard } from "../../components/Ui/Card/Card";
import { Flex, Text } from "../../components/Ui/Template";
import { FE_SKILLS, BE_SKILL, DEVOPS_SKILL } from "./skillData";
import Tag from "@/components/Ui/Tag";
import { css } from "@emotion/css";

const SkillSection = () => {
  return (
    <Flex flexDirection="column" rowGap="8px" height="auto">
      <StyledCard>
        <Text size="md" marginBottom="16px">
          Frontend
        </Text>
        <div
          className={css`
            margin-bottom: 16px;
          `}
        >
          <Flex
            className={css`
              @media (max-width: 1000px) {
                flex-direction: row;
                flex-wrap: wrap;
              }
            `}
            alignItems="center"
          >
            <div
              className={css`
                background-color: rgba(158, 207, 255, 1);
                width: 25px;
                height: 25px;
                border-radius: 50%;
              `}
            ></div>
            <Text size="xs2">자주 사용하고 공부한 기술</Text>
            <div
              className={css`
                background-color: rgba(158, 207, 255, 0.5);
                width: 25px;
                height: 25px;
                border-radius: 50%;
              `}
            ></div>
            <Text size="xs2">자주 사용하고 공부하려고 하는 기술</Text>
            <div
              className={css`
                background-color: rgba(255, 242, 128, 1);
                width: 25px;
                height: 25px;
                border-radius: 50%;
              `}
            ></div>
            <Text size="xs2">주요한 기능만 사용해보고 잘 알지 못하는 기술</Text>
            <div
              className={css`
                background-color: rgba(255, 242, 128, 0.5);
                width: 25px;
                height: 25px;
                border-radius: 50%;
              `}
            ></div>
            <Text size="xs2">한 두번 사용하거나 얕게 사용한 기술</Text>
          </Flex>
        </div>
        <Flex
          className={css`
            @media (max-width: 1000px) {
              flex-direction: row;
              flex-wrap: wrap;
            }
          `}
          flexWrap="wrap"
        >
          {FE_SKILLS.map(({ name }) => (
            <Tag key={name} name={name} />
          ))}
        </Flex>
      </StyledCard>
      <Flex height="auto">
        <StyledCard>
          <Text size="md" marginBottom="16px">
            Backend
          </Text>
          <Flex
            className={css`
              @media (max-width: 1000px) {
                flex-direction: row;
                flex-wrap: wrap;
              }
            `}
            flexWrap="wrap"
          >
            {BE_SKILL.map(({ name }) => (
              <Tag key={name} name={name} />
            ))}
          </Flex>
        </StyledCard>
        <StyledCard>
          <Text size="md" marginBottom="16px">
            Devops
          </Text>
          <Flex
            className={css`
              @media (max-width: 1000px) {
                flex-direction: row;
                flex-wrap: wrap;
              }
            `}
            flexWrap="wrap"
          >
            {DEVOPS_SKILL.map(({ name }) => (
              <Tag key={name} name={name} />
            ))}
          </Flex>
        </StyledCard>
      </Flex>
    </Flex>
  );
};

export default SkillSection;
