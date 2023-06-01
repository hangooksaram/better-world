"use client";

import NavigationCard from "@/components/Card/Navigation";
import { SectionLayout } from "@/components/Ui/Template";
import { css } from "@emotion/css";
import React from "react";

const HomePage = ({
  handlePointClick,
}: {
  handlePointClick: (id: number) => void;
}) => {
  const NavigationList = [
    {
      id: 1,
      text: "About me",
      backgroundColor: "blue",
      link: "about",
      onClick: (id: number) => {
        handlePointClick(id);
      },
    },
    {
      id: 2,
      text: "Skills",
      backgroundColor: "blue",
      link: "skill",
      onClick: (id: number) => {
        handlePointClick(id);
      },
    },
    {
      id: 3,
      text: "Project",
      backgroundColor: "blue",
      link: "project",
      onClick: (id: number) => {
        handlePointClick(id);
      },
    },
    {
      id: 4,
      text: "Contact",
      backgroundColor: "blue",
      link: "contact",
      onClick: (id: number) => {
        handlePointClick(id);
      },
    },
  ];
  return (
    <SectionLayout display={"flex"} justifyContent={"space-between"}>
      <nav
        className={css`
          padding: 32px;
          text-align: center;
          font-size: 40px;
          height: 30%;
        `}
      >
        <h1>This is header This is header</h1>
      </nav>
      <div
        className={css`
          display: flex;
          width: 100%;
          height: 70%;
          flex-wrap: wrap;
        `}
      >
        {NavigationList.map(({ id, text, backgroundColor, link, onClick }) => {
          return (
            <NavigationCard
              key={`navigation-${id}`}
              id={id}
              text={text}
              backgroundColor={backgroundColor}
              link={link}
              handlePointClick={() => onClick(id)}
              width={"48%"}
            />
          );
        })}
      </div>
      {/* <NavigationCard
        id={1}
        text={"About me"}
        backgroundColor={"blue"}
        link={"about"}
        handlePointClick={() => handlePointClick(1)}
      />

      <NavigationCard
        id={2}
        text={"Skills"}
        backgroundColor={"blue"}
        link={"skill"}
        handlePointClick={() => handlePointClick(2)}
      />

      <NavigationCard
        id={3}
        text={"Project"}
        backgroundColor={"beige"}
        link={"project"}
        width={"100%"}
        handlePointClick={() => handlePointClick(3)}
      />
      <NavigationCard
        id={4}
        text={"Contact"}
        backgroundColor={"green"}
        link={"contact"}
        width={"100%"}
        handlePointClick={() => handlePointClick(4)}
      /> */}
    </SectionLayout>
  );
};

export default HomePage;
