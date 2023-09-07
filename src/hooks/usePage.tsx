"use client";
import { useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export interface IPageObj {
  id: number;
  name: string;
}

const pageObjArray = [
  { id: 1, name: "about" },
  { id: 2, name: "skill" },
  { id: 3, name: "work" },
  { id: 4, name: "project" },
];
const usePage = (scrollbar: Scrollbar | null) => {
  const pageRefs = useRef<HTMLDivElement[]>([]);

  const scrollToPage = (id: number) => {
    scrollbar?.scrollTo(0, pageRefs.current[id].offsetTop, 1000);
  };

  return {
    pageObjArray,
    pageRefs,
    scrollToPage,
  };
};
export default usePage;
