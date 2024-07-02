import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";

type H2Props = {
  initial?: any;
  animate?: any;
  exit?: any;
  children: React.ReactNode;
};

export default function H2({ initial, animate, exit, children }: H2Props) {
  return (
    <motion.h2
      className={classNames(
        "text-yellow rounded-none bg-transparent p-0 text-[16px] font-bold",
        "lg:text-[22px]",
      )}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <span className="text-orange">{"<h2>"}</span>
      <span className="text-yellow">{children}</span>
      <span className="text-orange">{"</h2>"}</span>
    </motion.h2>
  );
}
