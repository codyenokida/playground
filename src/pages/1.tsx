import { motion } from "framer-motion";
import H2 from "../components/TextFields/H2";
import A from "../components/TextFields/A";
import { useState } from "react";
import classNames from "classnames";
import { FaCode } from "react-icons/fa";
import {
  FaDisplay,
  FaRegNoteSticky,
  FaRegHeart,
  FaLink,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

const styleMap: Record<number, any> = {
  [0]: {
    height: "196px",
    y: "8px",
    scaleX: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      duration: 0.1,
    },
  },
  [1]: {
    height: "138px",
    y: "8px",
    scaleX: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      duration: 0.1,
    },
  },
  [2]: {
    height: "166px",
    y: "8px",
    scaleX: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.1,
    },
  },
  [-1]: {},
};

function DynamicActionBar() {
  const [active, setActive] = useState<number>(-1);

  return (
    <div
      className={classNames(
        "container relative inline-flex flex-shrink-0 gap-10 px-2 text-[12px]",
        "lg:text-[14px]",
      )}
      onMouseLeave={() => setActive(-1)}
    >
      <div className="z-20 flex h-[38px] gap-6">
        <button
          className={classNames(
            "flex items-center justify-center rounded-md px-4 py-2 text-midnight hover:bg-midnight hover:text-white",
            {
              "bg-midnight text-white": active === 0,
            },
          )}
          onMouseOver={() => setActive(0)}
        >
          <FaDisplay className="mr-[8px] inline-block" />
          Apps
        </button>
        <button
          className={classNames(
            "flex items-center justify-center rounded-md px-4 py-2 text-midnight hover:bg-midnight hover:text-white",
            {
              "bg-midnight text-white": active === 1,
            },
          )}
          onMouseOver={() => setActive(1)}
        >
          <FaCode className="mr-[8px] inline-block" />
          Components
        </button>
        <button
          className={classNames(
            "flex items-center justify-center rounded-md px-4 py-2 text-midnight hover:bg-midnight hover:text-white",
            {
              "bg-midnight text-white": active === 2,
            },
          )}
          onMouseOver={() => setActive(2)}
        >
          <FaRegNoteSticky className="mr-[8px] inline-block font-light" />
          Notes
        </button>
      </div>

      <motion.div
        className="bg-yellow absolute bottom-0 left-0 z-10 flex h-full w-full scale-100 items-end justify-end rounded-md"
        initial={{ height: "100%", width: "100%", y: 0, x: 0 }}
        animate={styleMap[active]}
        exit={{
          transition: {
            scaleX: {
              delay: 0.25,
            },
          },
        }}
        onMouseLeave={() => setActive(-1)}
      >
        <div className="relative h-full w-full text-black">
          {active === 0 && (
            <motion.div
              className="absolute bottom-0 w-full translate-x-1/2 px-6 opacity-0"
              initial={{ opacity: 0, y: -40 }}
              animate={{
                opacity: 1,
                y: -56,
                transition: {
                  delay: 0.25,
                },
              }}
            >
              <div className="flex flex-col justify-center gap-[8px]">
                <button className="hover:bg-yellow-light group flex flex-row items-center justify-between rounded-md py-1 transition-all duration-150 ease-in-out hover:px-2">
                  <div className="item-center flex flex-row justify-center gap-[2px]">
                    <FaGithub size={48} className="mr-2" />
                    <div className="mx-0 my-auto flex flex-col text-left">
                      <span className="inline-flex items-center">
                        Github <FaRegHeart className="ml-[4px]" />
                      </span>
                      <span className="text-gray">Awesome code</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded-md border border-black opacity-0 group-hover:opacity-100">
                    <span className="px-[4px] py-[2px] text-sm">Web</span>
                  </div>
                </button>
                <button className="hover:bg-yellow-light group flex flex-row items-center justify-between rounded-md py-1 transition-all duration-150 ease-in-out hover:px-2">
                  <div className="item-center flex flex-row justify-center gap-[2px]">
                    <FaInstagram size={48} className="mr-2" />
                    <div className="mx-0 my-auto flex flex-col text-left">
                      <span className="inline-flex items-center">
                        Instagram <FaRegHeart className="ml-[4px]" />
                      </span>
                      <span className="text-gray">Post pictures</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded-md border border-black opacity-0 group-hover:opacity-100">
                    <span className="px-[4px] py-[2px] text-sm">Mobile</span>
                  </div>
                </button>
                <div className="h-[1px] w-full bg-black" />
              </div>
            </motion.div>
          )}
          {active === 1 && (
            <motion.div
              className="absolute bottom-0 w-full translate-x-1/2 px-6 opacity-0"
              initial={{ opacity: 0, y: -40 }}
              animate={{
                opacity: 1,
                y: -56,
                transition: {
                  delay: 0.25,
                },
              }}
            >
              <div className="flex flex-col justify-center gap-[4px]">
                <button className="hover:bg-yellow-light group flex flex-row items-center justify-between rounded-md py-1 transition-all duration-150 ease-in-out hover:px-2">
                  <div className="item-center flex flex-row justify-center gap-[4px]">
                    <div className="flex items-center justify-center">
                      <FaCode className="" />
                    </div>
                    <span className="">Dynamic Action Bar</span>
                  </div>
                  <div className="flex items-center justify-center rounded-md border border-black">
                    <span className="px-[4px] py-[2px] text-sm">Dynamic</span>
                  </div>
                </button>
                <button className="hover:bg-yellow-light group flex flex-row items-center justify-between rounded-md py-1 transition-all duration-150 ease-in-out hover:px-2">
                  <div className="item-center flex flex-row justify-center gap-[4px]">
                    <div className="flex items-center justify-center">
                      <FaCode className="font-medium" />
                    </div>
                    <span className="">Image Expand</span>
                  </div>
                  <div className="flex items-center justify-center rounded-md border border-black">
                    <span className="px-[4px] py-[2px] text-sm">Overlay</span>
                  </div>
                </button>
                <div className="h-[1px] w-full bg-black" />
              </div>
            </motion.div>
          )}
          {active === 2 && (
            <motion.div
              className="absolute bottom-0 w-full translate-x-1/2 px-6 opacity-0"
              initial={{ opacity: 0, y: -40 }}
              animate={{
                opacity: 1,
                y: -56,
                transition: {
                  delay: 0.25,
                },
              }}
            >
              <div className="flex flex-col justify-center gap-[4px]">
                <button className="hover:bg-yellow-light group flex flex-row items-center justify-between rounded-md py-1 transition-all duration-150 ease-in-out hover:px-2">
                  <div className="item-center flex flex-row justify-center gap-[4px]">
                    <div className="flex items-center justify-center">
                      <FaLink className="" />
                    </div>
                    <span className="">Changelog</span>
                  </div>
                  <span className="py-[2px] text-sm">Jun, 2024</span>
                </button>
                <button className="hover:bg-yellow-light group flex flex-row items-center justify-between rounded-md py-1 transition-all duration-150 ease-in-out hover:px-2">
                  <div className="item-center flex flex-row justify-center gap-[4px]">
                    <div className="flex items-center justify-center">
                      <FaLink className="" />
                    </div>
                    <span className="">Groceries</span>
                  </div>
                  <span className="py-[2px] text-sm">Feb, 2024</span>
                </button>
                <button className="hover:bg-yellow-light group flex flex-row items-center justify-between rounded-md py-1 transition-all duration-150 ease-in-out hover:px-2">
                  <div className="item-center flex flex-row justify-center gap-[4px]">
                    <div className="flex items-center justify-center">
                      <FaLink className="font-medium" />
                    </div>
                    <span className="">Anniversary</span>
                  </div>
                  <span className="py-[2px] text-sm">Sep, 2024</span>
                </button>
                <div className="h-[1px] w-full bg-black" />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function One() {
  return (
    <motion.section
      className={classNames(
        "relative flex h-full w-full flex-shrink flex-col px-4 py-6",
        "relative flex h-full w-full flex-col px-4 py-6",
      )}
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.25 },
      }}
      exit={{ opacity: 0 }}
    >
      <H2>dynamic action bar</H2>
      <div className="inline-block">
        <A
          href="https://x.com/henrikruscon/status/1800862855648129449"
          textHref="x.com/henrikruscon/"
        >
          inspo
        </A>
      </div>

      <div className="relative flex flex-1 flex-shrink items-center justify-center p-4">
        <div className="inline-block">
          <DynamicActionBar />
        </div>
      </div>
    </motion.section>
  );
}

export default One;
