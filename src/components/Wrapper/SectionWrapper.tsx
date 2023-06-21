"use client";
import { SectionLayout } from "@/components/Ui/Template";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import AboutSection from "../../Section/About/About";
import SkillSection from "../../Section/Skill/Skill";
import ProjectSection from "../../Section/Project/Project";
import WorkSection from "../../Section/Work/Work";

interface ISectionProps {
  id: number;
  name: string;
  pageRefs: React.MutableRefObject<HTMLDivElement[]>;
  children?: React.ReactNode;
}

const SectionWrapper = ({ id, name, pageRefs, children }: ISectionProps) => {
  const SECTION_HEIGHT =
    name === "work" || name === "skill" || name === "project"
      ? "auto"
      : undefined;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      ref={(element) => {
        pageRefs.current[id] = element!;
      }}
    >
      {/* <SectionLayout>
      {name === "about" ? (
        <AboutSection />
      ) : name === "skill" ? (
        <SkillSection />
      ) : name === "project" ? (
        <ProjectSection />
      ) : (
        <WorkSection />
      )}
    </SectionLayout> */}

      <SectionLayout height={SECTION_HEIGHT}>{children}</SectionLayout>
    </motion.div>
  );
};

export default SectionWrapper;
