import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";

type AProps = {
  initial?: any;
  animate?: any;
  exit?: any;
  href: string;
  textHref: string;
  children: React.ReactNode;
};

export default function A({
  initial,
  animate,
  exit,
  href,
  textHref,
  children,
}: AProps) {
  return (
    <motion.a
      className={classNames(
        "hover:border-purple rounded-none border border-transparent bg-transparent p-0 text-[12px] font-medium",
        "lg:text-[14px]",
      )}
      initial={initial}
      animate={animate}
      exit={exit}
      href={href}
    >
      <span className="text-blue">{`<a `}</span>
      <span className="text-green">{`href`}</span>
      <span className="white">{`="`}</span>
      <span className="text-orange">{textHref}</span>
      <span className="white">{`"`}</span>
      <span className="text-blue">{`>`}</span>
      <span className="text-white">{children}</span>
      <span className="text-blue">{"</a>"}</span>
    </motion.a>
  );
}

<a href="https://www.kotakun.blog"></a>;
