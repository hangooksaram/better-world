"use client";
import React from "react";
import { StyledCard } from "../../components/Ui/Card/Card";
import { Flex, Text } from "../../components/Ui/Template";

import { FE_SKILLS, BE_SKILL, DEVOPS_SKILL } from "./skillData";
import Tag from "@/components/Ui/Tag";

const SkillSection = () => {
  return (
    <Flex flexDirection="column" rowGap="8px">
      <StyledCard height="60%">
        <Text size="md">Frontend</Text>
        <Flex flexWrap="wrap">
          {FE_SKILLS.map(({ name, proficiency }) => (
            <Tag key={name} name={name} proficiency={proficiency} />
          ))}
        </Flex>
      </StyledCard>
      <Flex height="40%">
        <StyledCard height="100%">
          <Text size="md">Backend</Text>
          <Flex flexWrap="wrap">
            {BE_SKILL.map(({ name, proficiency }) => (
              <Tag key={name} name={name} proficiency={proficiency} />
            ))}
          </Flex>
        </StyledCard>
        <StyledCard height="100%">
          <Text size="md">Devops</Text>
          <Flex flexWrap="wrap">
            {DEVOPS_SKILL.map(({ name, proficiency }) => (
              <Tag key={name} name={name} proficiency={proficiency} />
            ))}
          </Flex>
        </StyledCard>
      </Flex>
    </Flex>
  );
};

export default SkillSection;
