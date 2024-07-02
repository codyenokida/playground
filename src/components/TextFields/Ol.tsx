import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useState } from "react";

type H2Props = {
  id: string;
  initialExpand?: boolean;
  children: React.ReactNode;
};

export default function Div({ id, initialExpand = false, children }: H2Props) {
  const [expanded, setExpanded] = useState(initialExpand);

  return (
    <>
      <button
        className={classNames(
          "hover:border-purple rounded-none border border-transparent bg-transparent p-0 text-[12px]",
          "lg:text-[14px]",
        )}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-red">{`<ol `}</span>
        <span className="text-orange">{`id`}</span>
        <span className="text-white">{`="`}</span>
        <span className="text-green">{`${id}`}</span>
        <span className="text-white">{`"`}</span>
        <span className="text-red">{`>`}</span>
        <span className="text-gray">{`${expanded ? "" : "..."}`}</span>
        <span className="text-red">{`${expanded ? "" : "</ol>"}`}</span>
      </button>
      <motion.div
        animate={{
          x: expanded ? 0 : -20,
          opacity: expanded ? 1 : 0,
        }}
        exit={{
          x: expanded ? 0 : -20,
          opacity: expanded ? 1 : 0,
        }}
        className={`${expanded ? "visible" : "hidden"} ml-4`}
      >
        {children}
      </motion.div>
      <span className="text-red">{`${expanded ? "</ol>" : ""}`}</span>
    </>
  );
}
