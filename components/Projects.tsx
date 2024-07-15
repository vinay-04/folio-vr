import { motion } from "framer-motion";

const Projects = (props: {refProjects: any, inViewProjects: any, variants: any}) => {
    return (
        <motion.section
       ref={props.refProjects}
        initial="hidden"
        animate={props.inViewProjects ? "visible" : "hidden"}
        variants={props.variants}
        transition={{ duration: 1 }}
        className="projects"
        id="projects"
      >
        <div className="title" id="Projects">Projects</div>
      <p className="projects">
        <a href="https://github.com/stuff-makers/Polinyx">Polinyx</a>
        <br/>
        A video chatting application with sign language interpretation and Speech-to-text features. Developed to aid hearing and speech impaired people.
        <br/>
        <br/>
        <a href="https://github.com/vinay-04/unfold-precompile-evm">ZkSnark Precompile</a>
        <br/>
        A ZkSnark based precompile for the Avalanche network.
      </p>
      </motion.section>
    )
}

export default Projects;