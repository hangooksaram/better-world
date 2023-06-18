"use client";
import NavigationCard from "@/components/Ui/Card/Navigation";
import { SectionLayout } from "@/components/Ui/Template";
import { css } from "@emotion/css";
import React from "react";

const HomeSection = ({
  handlePointClick,
}: {
  handlePointClick: (id: number) => void;
}) => {
  const NavigationList = [
    {
      id: 1,
      text: "About me",
      backgroundColor: "rgb(158, 207, 255)",
      link: "about",
      onClick: (id: number) => {
        handlePointClick(id);
      },
      detail: "안녕하세요 ! 개발로 더 나은 세상을 만들고 싶은 오현재 입니다.",
    },
    {
      id: 2,
      text: "Skills",
      backgroundColor: "white",
      link: "skill",
      onClick: (id: number) => {
        handlePointClick(id);
      },
      detail: "제가 사용할 수 있는 기술들을 확인해주세요.",
    },
    {
      id: 3,
      text: "Work",
      backgroundColor: "rgb(201, 201, 201)",
      link: "work",
      onClick: (id: number) => {
        handlePointClick(id);
      },
      detail: "저랑 연락해요~",
    },
    {
      id: 4,
      text: "Project",
      backgroundColor: "rgb(255, 209, 209)",
      link: "project",
      onClick: (id: number) => {
        handlePointClick(id);
      },
      detail: "저의 프로젝트들을 확인해보세요",
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
        <h1>
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
      <div
        className={css`
          display: flex;
          width: 100%;
          height: 70%;
          flex-wrap: wrap;
        `}
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
                handlePointClick={() => onClick(id)}
                width={"48%"}
                detail={detail}
              />
            );
          }
        )}
      </div>
    </SectionLayout>
  );
};

export default HomeSection;
