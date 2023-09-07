"use client";
import NavigationCard from "@/Section/Home/Navigation";
import { Grid, SectionLayout, Text } from "@/components/Ui/Template";
import { css } from "@emotion/css";
import React from "react";

const HomeSection = ({
  scrollToPage,
}: {
  scrollToPage: (id: number) => void;
}) => {
  const NavigationList = [
    {
      id: 1,
      text: "About me",
      backgroundColor: "var(--primary-color)",
      link: "about",
      onClick: (id: number) => {
        scrollToPage(id);
      },
      detail: "안녕하세요 ! 만드는 것이 즐거운 오현재 입니다.",
    },
    {
      id: 2,
      text: "Skills",
      backgroundColor: "white",
      link: "skill",
      onClick: (id: number) => {
        scrollToPage(id);
      },
      detail: "제가 사용할 수 있는 기술들을 간략히 확인해보세요 !",
    },
    {
      id: 3,
      text: "Work",
      backgroundColor: "rgb(201, 201, 201)",
      link: "work",
      onClick: (id: number) => {
        scrollToPage(id);
      },
      detail: "제가 어떻게 일했는 지 확인해보세요 !",
    },
    {
      id: 4,
      text: "Project",
      backgroundColor: "rgb(255, 209, 209)",
      link: "project",
      onClick: (id: number) => {
        scrollToPage(id);
      },
      detail: "제가 진행했던 프로젝트들을 화인해보세요!",
    },
  ];
  return (
    <SectionLayout display={"flex"} justifyContent={"space-between"}>
      <nav
        className={css`
          padding: 32px;
          text-align: center;
          height: 30%;
          font-size: 40px;
          color: white;
        `}
      >
        <Text
          className={css`
            display: none;
            @media (max-width: 1000px) {
              display: block;
            }
          `}
          size="xs2"
        >
          현재 반응형 적용이 진행중인 웹 사이트 입니다. 조금만 기다려주세요!
        </Text>
        <h1
          className={css`
            word-break: keep-all;
          `}
        >
          <span
            className={css`
              background-color: white;
              padding: 0px 16px;
              color: black;
            `}
          >
            개발자 오현재
          </span>
          의 포트폴리오
        </h1>
      </nav>
      <div></div>

      <Grid
        width="100"
        height="70%"
        gridTemplateRows="1fr 1fr"
        gridTemplateColumns="1fr 1fr"
        rowGap="8px"
        columnGap="8px"
      >
        {NavigationList.map(
          ({ id, text, backgroundColor, link, detail, onClick }) => {
            return (
              <NavigationCard
                key={`navigation-${id}`}
                id={id}
                text={text}
                backgroundColor={backgroundColor}
                link={link}
                scrollToPage={() => onClick(id)}
                detail={detail}
              />
            );
          }
        )}
      </Grid>
    </SectionLayout>
  );
};

export default HomeSection;
