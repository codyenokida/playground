import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";

type PProps = {
  initial?: any;
  animate?: any;
  exit?: any;
  children: React.ReactNode;
};

export default function P({ initial, animate, exit, children }: PProps) {
  return (
    <motion.p
      className={classNames(
        "text-yellow rounded-none bg-transparent p-0 text-[12px]",
        "lg:text-[14px]",
      )}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      <p className="">
        <span className="text-blue">{"<p>"}</span>
        <div className="ml-4 text-white">{children}</div>
        <span className="text-blue">{"</p>"}</span>
      </p>
    </motion.p>
  );
}
