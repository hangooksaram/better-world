export interface Skill {
  name: string;
}

const FE_SKILLS: Skill[] = [
  {
    name: "HTML5",
  },
  {
    name: "CSS",
  },
  {
    name: "Javascript",
  },
  {
    name: "Typescript",
  },
  {
    name: "React",
  },
  {
    name: "Vue",
  },
  {
    name: "Next",
  },
  {
    name: "Redux-toolkit",
  },
];

const BE_SKILL: Skill[] = [
  {
    name: "Node",
  },
  {
    name: "ASP .NET",
  },
];

const DEVOPS_SKILL: Skill[] = [
  {
    name: "MySQL",
  },
  {
    name: "AWS S3",
  },
];

export { FE_SKILLS, BE_SKILL, DEVOPS_SKILL };
