import { Flex, Text } from "@/components/Ui/Template";
import { css } from "@emotion/css";
import { motion } from "framer-motion";

import { WorkArchiveProps } from "./Work";
import Link from "@/components/Ui/Link";

const WorkDetail = ({ title, details }: WorkArchiveProps) => {
  return (
    <Flex width="100%" justifyContent="center">
      <motion.div
        className={css`
          padding: 32px;
          border-radius: 54px;
          height: 240px;
          background-color: #a4a1fe;
          width: 50%;
          font-weight: 700;
        `}
        whileInView={{ x: ["50%", "0%"] }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        <Flex justifyContent="center" alignItems="center">
          <Text size="md">{title}</Text>
        </Flex>
      </motion.div>

      <motion.div
        className={css`
          padding: 32px;
          border-radius: 54px;
          height: 240px;
          background-color: #1b1b1f;
          color: #a4a1fe;
          width: 70%;
        `}
        whileInView={{ x: ["-50%", "0%"] }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        <Flex flexDirection="column" rowGap="16px" justifyContent="center">
          {details.map(({ text, link }) => {
            return link ? (
              <Link size="xs" href={link}>
                {text}
              </Link>
            ) : (
              <Text key={`work-detail-${text}`} size="xs">
                {text}
              </Text>
            );
          })}
        </Flex>
      </motion.div>
    </Flex>
  );
};

{
  /* <Flex flexDirection="column" rowGap="16px">
<Expand title="사내 UI 컴포넌트 개발 및 개선">
  <Text size="md">
    Vue 를 이용한 Button, Pagination, Tooltip 등 사내 UI 컴포넌트 개발
  </Text>
  <Text size="md">Storybook 을 이용한 UI 컴포넌트 템플릿 작성</Text>
  <Text size="md">UI 업데이트 로그 작성</Text>
  <Text size="md">Storybook 구조 변경</Text>
</Expand>
<Expand title="문의하기 기능 풀스택 개발">
  <Text size="md">ASP .NET CORE, EF Framework 를 이용한 DB 설계</Text>
  <Text size="md">
    <Link
      size="xs"
      href="https://www.notion.so/DOCS-81874c3efc4d4447a50d7cd4eb60eb70"
    >
      더 많은 정보 확인
    </Link>
  </Text>
</Expand>
<Expand title="실시간 Hub 를 사용한 행사 솔루션 기능 개발">
  <Text size="md">뭐시기</Text>
</Expand>
</Flex> */
}
export default WorkDetail;
