"use client";
import { useEffect, useRef, useState } from "react";
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
  const [currentPageId, setCurrentPageId] = useState<number>(1);
  const totalNum = pageObjArray.length;
  const pageRefs = useRef<HTMLDivElement[]>([]);

  // 버튼 클릭
  const handlePointClick = (id: number) => {
    scrollbar?.scrollTo(0, pageRefs.current[id].offsetTop, 1000);
  };

  return {
    pageObjArray,
    pageRefs,
    handlePointClick,
  };
};
export default usePage;
