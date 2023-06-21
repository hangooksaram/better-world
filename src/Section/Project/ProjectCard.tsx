import { MotionCard, StyledCard } from "@/components/Ui/Card/Card";
import { Flex, Text } from "@/components/Ui/Template";
import { css } from "@emotion/css";

const ProjectCard = ({
  title,
  index,
  onClick,
}: {
  title: string;
  index: number;
  onClick: () => void;
}) => {
  return (
    <MotionCard
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        type: "spring",
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.2,
          delay: index / 10,
        },
      }}
      exit={{
        scale: 0,
        opacity: 0,
        transition: {
          delay: index / 10,
        },
      }}
      whileHover={{ scale: 0.95 }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
    >
      <nav>
        <Flex flexDirection="column">
          <Flex justifyContent="space-between">
            <div>0{index}.</div>
            <div>project</div>
          </Flex>
          <Flex height="240px" justifyContent="center" alignItems="center">
            <Text size="lg">{title}</Text>
          </Flex>
        </Flex>
      </nav>
    </MotionCard>
  );
};

export default ProjectCard;
