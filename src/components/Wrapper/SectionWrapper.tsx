"use client";
import { SectionLayout } from "@/components/Ui/Template";
import { motion } from "framer-motion";
import React from "react";
import AboutSection from "../Section/About";
import SkillSection from "../Section/Skill";
import ProjectSection from "../Section/Project";
import WorkSection from "../Section/Work";

interface ISectionProps {
  id: number;
  name: string;
  pageRefs: React.MutableRefObject<HTMLDivElement[]>;
}

const SectionWrapper = ({ id, name, pageRefs }: ISectionProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    ref={(element) => {
      pageRefs.current[id] = element!;
    }}
  >
    <SectionLayout>
      {name === "about" ? (
        <AboutSection />
      ) : name === "skill" ? (
        <SkillSection />
      ) : name === "project" ? (
        <ProjectSection />
      ) : (
        <WorkSection />
      )}
    </SectionLayout>
  </motion.div>
);

export default SectionWrapper;
