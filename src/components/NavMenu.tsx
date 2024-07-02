import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import H1 from "./TextFields/H1";
import Div from "./TextFields/Div";
import A from "./TextFields/A";
import P from "./TextFields/P";
import Ol from "./TextFields/Ol";
import Li from "./TextFields/Li";
import classNames from "classnames";

const projects = {
  "framer-motion": [
    {
      id: "1",
      name: "dynamic action bar",
    },
  ],
};

export default function NavMenu() {
  return (
    <nav
      className={classNames(
        "flex w-full flex-col items-start justify-start p-6 text-left",
        "lg:w-[500px]",
      )}
    >
      <Link to="/">
        <H1
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.25 },
          }}
          exit={{ opacity: 0 }}
        >
          playground.kotakun.blog
        </H1>
      </Link>
      <P
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.25, delay: 0.25 },
        }}
      >
        welcome to my personal lab where I experiment with animations, webgl,
        3d, and everything in-between.
      </P>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.25, delay: 0.45 },
        }}
        className="about"
      >
        <Div id="links">
          <A href="https://www.kotakun.blog" textHref="kotakun.blog">
            personal website
          </A>
          <br />
          <A
            href="https://www.x.com/hammockman3000"
            textHref="x.com/hammockman3000"
          >
            twitter
          </A>
        </Div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.25, delay: 0.65 },
        }}
        className="experiments"
      >
        <Div id="experiments" initialExpand={true}>
          {Object.entries(projects).map(([project_name, experiments]) => {
            return (
              <>
                <Ol id={project_name}>
                  <div className="ml-4">
                    {experiments.map((experiment) => (
                      <Li href={`/${experiment.id}`} id={experiment.id}>
                        {experiment.name}
                      </Li>
                    ))}
                  </div>
                </Ol>
              </>
            );
          })}
        </Div>
      </motion.div>
    </nav>
  );
}
