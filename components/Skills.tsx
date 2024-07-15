import { motion } from "framer-motion";

const Skills = (props: {refSkills: any, variants: any, inViewSkills: any}) => {
  return (
    <>
      <div className="title" id="skills">
        Skills
      </div>
      <motion.section
        ref={props.refSkills}
        initial="hidden"
        variants={props.variants}
        transition={{ duration: 1 }}
        animate={props.inViewSkills ? "visible" : "hidden"}
        className="skills"
      >
        <img src="icons/linux.png" alt="" />
        <img src="icons/flutter.svg" alt="" />
        <img src="icons/go.svg" alt="" />
        <img src="icons/python.svg" alt="" />
        <img src="icons/sql.svg" alt="" />
        <img src="icons/cpp.svg" alt="" />
        <img src="icons/firebase.svg" alt="" />
        <img src="icons/git.svg" alt="" />
      </motion.section>
    </>
  );
};

export default Skills;
