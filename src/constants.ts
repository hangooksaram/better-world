import { DetailInfo } from "./Section/Project/Project";

export const PROJECTS: DetailInfo[] = [
  {
    index: 0,
    title: "Better World",
    skills: [
      { name: "React", proficiency: "veryHigh" },
      { name: "Typescirpt", proficiency: "high" },
      { name: "Next", proficiency: "medium" },
      { name: "Emotion", proficiency: "medium" },
    ],
    summary:
      "저만의 포트폴리오를 가지기 위해 개발 중 인 프로젝트 입니다. 저를 나타내는 포트폴리오 이다 보니, UI 요소 들이 제가 원하는 대로 커스터마이징 되기 원해 직접 UI 컴포넌트를 만들었습니다. 각 UI 컴포넌트의 스타일 관련 props 의 타입들을 Typescript 로 쉽게 관리할 수 있었습니다. Next 13 의 새로운 app directory 구조를 적용해본 첫 번째 프로젝트입니다. ",
    descriptions: [
      "Emotion 의 Styled Component 이용해 UI 컴포넌트 개발",
      "모바일 반응형 디자인 부분 적용",
      "framer 라이브러리를 적용해 animation 이 적용 되는 컴포넌트 개발",
      "Github Issue 로 버그 관리",
      "Vercel 을 이용한 자동 배포",
    ],
    link: "https://github.com/hangooksaram/better-world",
  },
  {
    index: 1,
    title: "Tom RPG",
    skills: [
      { name: "Typescript", proficiency: "high" },
      { name: "redux-toolkit", proficiency: "medium" },
    ],
    summary:
      "브라우저에서 돌아가는 RPG 게임 을 개발 중인 프로젝트 입니다. Vanilla Javascript(Typescript) 로만 구현하는 것이 목표입니다. 현재까지 특별한 기능은 없지만, 객체 (플레이어, 적, 피격 등) 의 책임과 각 객체끼리 가지는 관계에 대해 고민하는 과정을 겪을 수 있었습니다. 한 객체의 상태를 다른 객체들이 공유해야 하는 경우가 있어, 전역 상태 관리 라이브러리인 redux-toolkit 을 사용했습니다. 요소의 조건적 렌더링 을 Vanilla Javascript 로 직접 구현하며, 평소 사용하던 React 의 사용이유와 편리성에 대해 다시 생각하게 되었습니다. Canvas 에 익숙치 않아 사용하지 못하고 있는데, 더 나은 점이 있다면 적용해볼 예정입니다.",
    descriptions: [
      "DOM API, Inline Style 조작 을 통한 요소의 action (이동, 피격, 발사) 구현",
      "Redux-toolkit 을 이용한 각 객체의 상태 관리",
    ],
    link: "https://github.com/hangooksaram/tom-rpg/src",
  },
  {
    index: 2,
    title: "sound-fountain",
    skills: [
      { name: "React", proficiency: "veryHigh" },
      { name: "Node", proficiency: "low" },
      { name: "Express", proficiency: "low" },
      { name: "MySQL", proficiency: "low" },
    ],
    summary:
      "좋아하는 노래를 저장해두고 들을 수 있는 프로젝트입니다. 유튜브 링크를 저장 후 재생하는 것이 주된 기능 입니다. 처음으로 DB 설계, API 와 클라이언트 기능을 혼자 구현했던 프로젝트 입니다. CORS 에러 를 처음 접하고 해결하는 방법을 배울 수 있었습니다.",
    descriptions: [
      "DB 설계 및 연동",
      "CRUD API 및 클라이언트 기능 구현",
      "react-player 라이브러리를 이용해 동영상 재생 기능 구현",
    ],
    link: "https://github.com/hangooksaram/sound-fountain",
  },
  {
    index: 2,
    title: "Wings Wiki",
    skills: [
      { name: "React", proficiency: "veryHigh" },
      { name: "Typescript", proficiency: "high" },
      { name: "Redux-toolkit", proficiency: "low" },
      { name: "Next", proficiency: "low" },
    ],
    summary:
      "학부 시절 해당 강의대한 정보가 부족했던 경험이 많아 제작한 대학교 강의 위키입니다. 미완성인 상태로 종료되어 아쉬운 프로젝트 입니다. 같은 프론트엔드 팀원에게 Next, Redux-toolkit, Typescript 등 새로운 것들에 대해 많이 배워 좋은 기억이 많은 프로젝트입니다. 디렉토리를 도메인별로 분리했습니다. 리덕스 미들웨어인 redux-thunk 를 사용하여 서버로 부터 받은 데이터를 전역 상태로 관리 했습니다. Next 의 주요 기능을 사용했다기 보다는, 관련된 SSR, Vercel 의 자동 배포 기능 에 대해 공부 할 수 있었습니다.",
    descriptions: [
      "목차에 대한 추가 가능 여부를 확인 후 목차 추가 기능 구현",
      "목차를 클릭하면 해당하는 내용으로 스크롤이 이동하는 기능 구현",
      "Wiki 에디터의 전체적인 UI 및 수정 기능 구현",
      "마이 페이지 Modal UI 구현",
    ],
    link: "https://github.com/hangooksaram/wiki-front",
  },
];
