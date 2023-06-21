"use client";
import { StyledCard } from "@/components/Ui/Card/Card";
import Tag from "@/components/Ui/Tag";
import { Flex, Text } from "@/components/Ui/Template";
import React from "react";
import { Skill } from "../Skill/skillData";
import WorkDetail from "./WorkDetail";

// #E3DEF7
// #5C3FBF

const WORK_SKILLS: Skill[] = [
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
    name: "Vue 3",
    proficiency: "high",
  },
  {
    name: "ASP .NET",
    proficiency: "low",
  },
];

export interface WorkArchiveProps {
  title: string;
  details: WorkDetailsProps[];
}

export interface WorkDetailsProps {
  text: string;
  link?: string;
}

const WORK_ARCHIVES = [
  {
    title: "UI 컴포넌트 개발 및 개선",
    details: [
      { text: "Vue, tailwind 를 이용한 사내 전용 UI 컴포넌트 개발" },
      {
        text: "Storybook 의 스토리 및 Notion 업데이트 로그 작성을 통한 UI 문서화 작업",
      },
      { text: "기존 Storybook 구조 변경 을 통한 컴포넌트 재분류" },
    ],
  },
  {
    title: "문의하기 기능 개발",
    details: [
      { text: "DB 설계, 구현" },
      { text: "ASP .NET MVC 패턴에서 Controller-based API 구현" },
      { text: "Notion 을 이용해 API 명세서 문서화" },
      { text: "CRUD 기능, 문의 및 답변시 이메일 전송 기능 구현" },
      {
        text: "상세 정보 화인",
        link: "https://www.notion.so/DOCS-81874c3efc4d4447a50d7cd4eb60eb70",
      },
    ],
  },
  {
    title: "행사 솔루션 기능 개발",
    details: [
      {
        text: "모의투자, 투표 등 실시간으로 행사 주최자와 참가자가 소통 해야 하는 기능 개발 (SignalR Hub 이용)",
      },
      {
        text: "기능 관련 데이터를 실시간으로 그래프 및 차트 로 Visualizing",
      },
    ],
  },
];

const WorkSection = () => {
  return (
    <Flex flexDirection="column" rowGap="24px">
      <StyledCard backgroundColor="#1B1B1F">
        <Flex flexDirection="column" rowGap="48px">
          <Flex alignItems="flex-end" columnGap="24px">
            <Text color="white" underline size="lg">
              <a href="https://event-us.kr/">이벤터스</a>
            </Text>

            <Text color="white" size="xs">
              2020.04 - 2021.12 (약 1년 9개월)
            </Text>
          </Flex>
          <Flex>
            {WORK_SKILLS.map((skill) => (
              <Tag
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </Flex>

          <Flex flexDirection="column" rowGap="24px">
            <Text color="white" size="sm">
              행사 온/오프라인 솔루션 및 플랫폼 스타트업의 프론트엔드 개발자 로
              참여했습니다.
            </Text>
            <Text color="white" size="sm">
              하나의 Product 에 대해 기획, 개발, QA, 배포 까지 모든 생명 주기에
              참여하는 경험을 했습니다.
            </Text>
            <Text color="white" size="sm">
              특히 QA 과정에서 직접 유저 시나리오를 작성해 테스트 해보며, 많은
              버그를 마주하게 된 순간들은, 사용자 의 측면에서 생각하는 사고
              구조를 가지게 해주었습니다. 테스트 코드 작성 에 대한 필요성이
              느껴졌지만, 적용해보지 못한 점이 아쉬움이 남습니다.
            </Text>
            <Text color="white" size="sm">
              UI 컴포넌트 작업을 통해 CSS 속성을 디자이너와 세세하게 소통하는
              경험했습니다. 또한 각 컴포넌트가 묶이는 기준, 하나의 컴포넌트가
              가질수 있는 책임의 범위 에 대해 깊이 고민하는 경험을 해 볼 수
              있었습니다.
            </Text>
            <Text color="white" size="sm">
              데이터에 접근하는 백엔드 로직을 직접 수정하는 상황거나 테이블을
              수정하는 경우가 잦았기 때문에, CASCADE 옵션과 같은 데이터 간의
              종속성 을 검토해보는 습관이 생겼습니다.
            </Text>
            <Text color="white" size="sm"></Text>
          </Flex>
        </Flex>
      </StyledCard>
      <Flex flexDirection="column">
        {WORK_ARCHIVES.map(({ title, details }) => (
          <WorkDetail
            key={`work-archives-${title}`}
            title={title}
            details={details}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default WorkSection;
