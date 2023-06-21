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
          width: 30%;
          font-weight: 700;
          @media (max-width: 1000px) {
            width: 100%;
            height: 180px;
          }
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
          @media (max-width: 1000px) {
            width: 100%;
            height: auto;
          }
        `}
        whileInView={{ x: ["-50%", "0%"] }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        <Flex flexDirection="column" rowGap="16px" justifyContent="center">
          {details.map(({ text, link }, index) => {
            return link ? (
              <Link size="xs" href={link}>
                {text}
              </Link>
            ) : (
              <Text key={`work-detail-${index}`} size="xs">
                {index}
                {text}
              </Text>
            );
          })}
        </Flex>
      </motion.div>
    </Flex>
  );
};
export default WorkDetail;
