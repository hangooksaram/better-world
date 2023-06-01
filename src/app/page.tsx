"use client";
import NavigationCard from "@/components/Card/Navigation";
import { css } from "@emotion/css";
import Link from "next/link";
import { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import PageSection from "./section/page";

import usePage from "../hooks/usePage";
import HomePage from "./home/page";
import Scrollbar from "smooth-scrollbar";
import { SectionLayout } from "@/components/Ui/Template";

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
        <HomePage handlePointClick={handlePointClick} />
      </header>
      <main>
        {pageObjArray.map(({ id, name }) => {
          return (
            <PageSection
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
