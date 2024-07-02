import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";

type H1Props = {
  initial?: any;
  animate?: any;
  exit?: any;
  children: React.ReactNode;
};

export default function H1({ initial, animate, exit, children }: H1Props) {
  return (
    <motion.h1
      className={classNames(
        "text-yellow rounded-none bg-transparent p-0 text-[16px] font-bold",
        "lg:text-[22px]",
      )}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <span className="text-red">{"<h1>"}</span>
      <span className="text-yellow">{children}</span>
      <span className="text-red">{"</h1>"}</span>
    </motion.h1>
  );
}
