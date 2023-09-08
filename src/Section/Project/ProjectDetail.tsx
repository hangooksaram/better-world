import { StyledCard } from "@/components/Ui/Card/Card";
import { Flex, Text } from "@/components/Ui/Template";
import { motion } from "framer-motion";
import Close from "../../assets/icon/close.svg";
import Done from "../../assets/icon/Done.svg";
import { DetailInfo } from "./Project";
import Tag from "@/components/Ui/Tag";
import Link from "@/components/Ui/Link";
import React from "react";
import { css } from "@emotion/css";
const ProjectDetail = ({
  setIsOpened,
  info,
}: {
  setIsOpened: (flag: boolean) => void;
  info: DetailInfo | null;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <StyledCard backgroundColor="white">
        <Flex flexDirection="column" rowGap="24px">
          <Flex
            justifyContent="space-between"
            alignItems="flex-end"
            columnGap="24px"
          >
            {info?.link ? (
              <Link size="md" href={info!.link}>
                {info?.title}
              </Link>
            ) : (
              <Text size="md">{info?.title}</Text>
            )}

            <Close
              onClick={() => setIsOpened(false)}
              alt="close-icon"
              src={Close}
            />
          </Flex>
          <div>
            <Text color="gray" size="xs2" marginBottom="8px">
              소개
            </Text>
            <Text size="xs">{info?.summary}</Text>
          </div>

          <Flex
            className={css`
              @media (max-width: 1000px) {
                flex-direction: row;
                flex-wrap: wrap;
              }
            `}
          >
            {info?.skills.map((skill) => (
              <Tag key={skill.name} name={skill.name} />
            ))}
          </Flex>
          <div>
            <Text color="gray" marginBottom="8px" size="xs2">
              상세
            </Text>
            <Flex flexDirection="column" rowGap="24px">
              {info?.descriptions.map((desc) => (
                <Flex
                  className={css`
                    @media (max-width: 1000px) {
                      flex-direction: row;
                    }
                  `}
                  alignItems="center"
                  key={desc}
                >
                  <Done width={30} height={30} alt="done-icon" src={Done} />
                  <Text size="xs">{desc}</Text>
                </Flex>
              ))}
            </Flex>
          </div>
        </Flex>
      </StyledCard>
    </motion.div>
  );
};

export default ProjectDetail;
