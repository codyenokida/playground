import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

type LiProps = {
  href: string;
  id: string;
  active?: boolean;
  children: React.ReactNode;
};

export default function Li({ href, id, active = false, children }: LiProps) {
  return (
    <Link
      to={href}
      className={classNames(
        "hover:border-purple rounded-none border border-transparent bg-transparent p-0 text-[12px] font-medium",
        "lg:text-[14px]",
      )}
    >
      <span className="text-blue">{`<li `}</span>
      <span className="text-green">{`id`}</span>
      <span className="text-white">{`="`}</span>
      <span className="text-orange">{`${id}`}</span>
      <span className="text-white">{`"`}</span>
      <span className="text-blue">{`>`}</span>
      <span className="text-white">{children}</span>
      <span className="text-blue">{`</li>`}</span>
    </Link>
  );
}

<a href="https://www.kotakun.blog"></a>;
