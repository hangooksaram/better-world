import styled from "@emotion/styled";
import React, { Children, useState } from "react";
import Image from "next/image";
import { Flex } from "./Template";
import Done from "../../assets/icon/Done.svg";
import { motion } from "framer-motion";
import { css } from "@emotion/css";
import { AnimatePresence } from "framer-motion";
const ExpandConatiner = styled.div``;

const ExpandTitle = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={css`
        width: fit-content;
        background-color: rgb(240, 240, 240);
        border-radius: 10px;
        padding: 16px;
        font-size: 24px;
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          width: 25px;
          height: 25px;
          margin-right: 16px;
        }
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
};

const ExpandContent = ({
  isOpened,
  children,
}: {
  isOpened: boolean;
  children: React.ReactNode;
}) => {
  const length = Children.count(children);
  return (
    <motion.div
      className={css`
        width: 100%;
        background-color: rgb(240, 240, 240);
        font-size: 24px;
        border-radius: 10px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        img {
          width: 25px;
          height: 25px;
          margin-right: 8px;
        }
      `}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const ExpandItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex alignItems="center">
      <Image src={Done} alt="done" />
      {children}
    </Flex>
  );
};

const Expand = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpened, setIsOpenend] = useState(false);

  return (
    <Flex flexDirection="column">
      <Flex alignItems="center">
        <ExpandTitle onClick={() => setIsOpenend((prevState) => !prevState)}>
          <span>{title}</span>
        </ExpandTitle>
      </Flex>
      <AnimatePresence>
        {isOpened && (
          <ExpandContent isOpened={isOpened}>{children}</ExpandContent>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default Expand;

export { ExpandItem };
