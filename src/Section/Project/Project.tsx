"use client";
import { Flex } from "@/components/Ui/Template";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
import { Skill } from "../Skill/skillData";
/**
 * 0. 개발 포트폴리오
 * 1. Tom-RPG
 * 2. sound-fountain
 */

const PROJECTS: DetailInfo[] = [
  {
    index: 0,
    title: "Better World",
    skills: [{ name: "React", proficiency: "veryHigh" }],
    descriptions: ["저만의 포트폴리오를 만들고 있습니다.", ""],
  },
  {
    index: 1,
    title: "Tom RPG",
    skills: [{ name: "React", proficiency: "veryHigh" }],
    descriptions: [],
  },
  {
    index: 2,
    title: "sound-fountain",
    skills: [{ name: "React", proficiency: "veryHigh" }],
    descriptions: [],
  },
];

export interface DetailInfo {
  index: number;
  title: string;
  skills: Skill[];
  descriptions: string[];
}

const ProjectSection = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentProject, setCurrentProject] = useState<DetailInfo | null>(null);
  const toggleOpenState = () => {
    setIsOpened((prev) => !prev);
  };
  const openDetail = (index: number) => {
    toggleOpenState();
    setCurrentProject(PROJECTS[index]);
  };

  return (
    <React.Fragment>
      <AnimatePresence>
        {!isOpened && (
          <Flex flexDirection="column">
            <ProjectCard
              onClick={() => openDetail(0)}
              title="Better World"
              index={0}
            />
            <Flex height="auto">
              <ProjectCard
                onClick={() => openDetail(1)}
                title="Tom RPG"
                index={1}
              />
              <ProjectCard
                onClick={() => openDetail(2)}
                title="sound-fountain"
                index={2}
              />
            </Flex>
          </Flex>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpened && (
          <ProjectDetail setIsOpened={setIsOpened} info={currentProject} />
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default ProjectSection;
