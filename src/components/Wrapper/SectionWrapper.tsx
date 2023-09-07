"use client";
import { SectionLayout } from "@/components/Ui/Template";
import { motion } from "framer-motion";
import React from "react";

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
      <SectionLayout height={SECTION_HEIGHT}>{children}</SectionLayout>
    </motion.div>
  );
};

export default SectionWrapper;
