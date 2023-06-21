import { StyledCard } from "@/components/Ui/Card/Card";
import { Flex, Text } from "@/components/Ui/Template";
import { motion } from "framer-motion";
import Close from "../../assets/icon/close.svg";
import { createPortal } from "react-dom";
import { DetailInfo } from "./Project";
import Tag from "@/components/Ui/Tag";
import Image from "next/image";
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
        <Flex flexDirection="column" rowGap="48px">
          <Flex
            justifyContent="space-between"
            alignItems="flex-end"
            columnGap="24px"
          >
            <Text underline size="lg">
              <a href="https://event-us.kr/">{info?.title}</a>
            </Text>

            <Image
              onClick={() => setIsOpened(false)}
              alt="close-icon"
              src={Close}
            />
          </Flex>
          <Flex>
            {info?.skills.map((skill) => (
              <Tag
                key={skill.name}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            ))}
          </Flex>

          <Flex flexDirection="column" rowGap="24px">
            {info?.descriptions.map((desc) => (
              <Text size="xs" key={desc}>
                {desc}
              </Text>
            ))}
          </Flex>
        </Flex>
      </StyledCard>
    </motion.div>
  );
};

export default ProjectDetail;
