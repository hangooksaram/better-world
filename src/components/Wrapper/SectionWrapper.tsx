"use client";
import AboutSection from "@/app/section/about/page";
import WorkSection from "@/app/section/work/page";
import ProjectSection from "@/app/section/project/page";
import SkillSection from "@/app/section/skill/page";
import { SectionLayout } from "@/components/Ui/Template";
import { motion } from "framer-motion";
import React from "react";

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
