"use client";
import { Flex } from "@/components/Ui/Template";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { AnimatePresence } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
import { Skill } from "../Skill/skillData";
import { PROJECTS } from "@/contents";

export interface DetailInfo {
  index: number;
  title: string;
  skills: Skill[];
  summary: string;
  descriptions: string[];
  link: string;
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
            <ProjectCard
              onClick={() => openDetail(3)}
              title="wings wiki"
              index={3}
            />
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
