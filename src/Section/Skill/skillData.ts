export interface Skill {
  name: string;
  proficiency: "low" | "medium" | "high" | "veryHigh";
}

const FE_SKILLS: Skill[] = [
  {
    name: "HTML5",
    proficiency: "veryHigh",
  },
  {
    name: "CSS",
    proficiency: "veryHigh",
  },
  {
    name: "Javascript",
    proficiency: "veryHigh",
  },
  {
    name: "Typescript",
    proficiency: "high",
  },
  {
    name: "React",
    proficiency: "high",
  },
  {
    name: "Vue",
    proficiency: "high",
  },
  {
    name: "Next",
    proficiency: "medium",
  },
  {
    name: "Redux-toolkit",
    proficiency: "medium",
  },
];

const BE_SKILL: Skill[] = [
  {
    name: "Node",
    proficiency: "low",
  },
  {
    name: "ASP .NET",
    proficiency: "low",
  },
];

const DEVOPS_SKILL: Skill[] = [
  {
    name: "MySQL",
    proficiency: "low",
  },
  {
    name: "AWS S3",
    proficiency: "low",
  },
];

export { FE_SKILLS, BE_SKILL, DEVOPS_SKILL };
