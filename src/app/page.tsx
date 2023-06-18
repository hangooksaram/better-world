"use client";
import NavigationCard from "@/components/Ui/Card/Navigation";
import { css } from "@emotion/css";
import Link from "next/link";
import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { renderToString } from "react-dom/server";

import usePage from "../hooks/usePage";

import Scrollbar from "smooth-scrollbar";
import { SectionLayout } from "@/components/Ui/Template";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import CustomMotion from "@/components/CustomMotion";

import SectionWrapper from "@/components/Wrapper/SectionWrapper";
import AboutSection from "@/components/Section/About";
import HomeSection from "@/components/Section/Home";

// '/' 경로. root route.
export default function Home() {
  const [scrollbar, setScrollbar] = useState<Scrollbar | null>(null);
  useEffect(() => {
    const sc = Scrollbar.init(document.getElementById("wrapper")!, {});
    setScrollbar(sc);
  }, []);

  const { pageObjArray, pageRefs, handlePointClick } = usePage(scrollbar);
  return (
    // <Scrollbar damping={0.1} alwaysShowTracks={false}>
    <div id="wrapper" style={{ maxHeight: "100vh" }}>
      <header>
        <HomeSection handlePointClick={handlePointClick} />
      </header>
      <main>
        {pageObjArray.map(({ id, name }) => {
          return (
            <SectionWrapper
              key={`page-${id}`}
              id={id}
              name={name}
              pageRefs={pageRefs}
            />
          );
        })}
      </main>
    </div>
    // </Scrollbar>
  );
}

// const PageSection = forwardRef<HTMLElement, ISectionProps>(
//   ({ id, name, pageRefs }, ref) => (
//     <React.Fragment
//       ref={(element) => {
//         pageRefs.current[id] = element!;
//       }}
//     >
//       <SectionLayout id={`page-${id}`} key={`layout-${id}`}></SectionLayout>
//     </React.Fragment>
//   )
// );

// PageSection.displayName = "PageSection";
