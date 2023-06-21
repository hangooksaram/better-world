"use client";
import { useEffect, useState } from "react";
import usePage from "../hooks/usePage";
import Scrollbar from "smooth-scrollbar";
import AboutSection from "@/Section/About/About";
import HomeSection from "@/Section/Home/Home";
import SkillSection from "@/Section/Skill/Skill";
import WorkSection from "@/Section/Work/Work";
import ProjectSection from "@/Section/Project/Project";
import SectionWrapper from "@/components/Wrapper/SectionWrapper";

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
        {/* {pageObjArray.map(({ id, name }) => {
          return (
            <SectionWrapper
              key={`page-${id}`}
              id={id}
              name={name}
              pageRefs={pageRefs}
            />
          );
        })} */}
        <SectionWrapper key="page-1" id={1} name="about" pageRefs={pageRefs}>
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper key="page-2" id={2} name="skill" pageRefs={pageRefs}>
          <SkillSection />
        </SectionWrapper>
        <SectionWrapper key="page-3" id={3} name="work" pageRefs={pageRefs}>
          <WorkSection />
        </SectionWrapper>
        <SectionWrapper key="page-4" id={4} name="project" pageRefs={pageRefs}>
          <ProjectSection />
        </SectionWrapper>
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
//       <SectionWrapper id={`page-${id}`} key={`layout-${id}`}></SectionWrapper>
//     </React.Fragment>
//   )
// );

// PageSection.displayName = "PageSection";
