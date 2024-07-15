import { motion } from "framer-motion";

const Hackathons = (props: {
    refHackathons: any;
    inViewHackathons: any;
    variants: any;
}) => {
  return (
    <motion.section
      ref={props.refHackathons}
      initial="hidden"
      animate={props.inViewHackathons ? "visible" : "hidden"}
      variants={props.variants}
      transition={{ duration: 1 }}
      className="hackathons"
    >
      <div className="hackathons">
        <div className="title">Hackathons</div>
        <p className="projects">
          I enjoy participating in Hackathons, a great way to learn and
          implement new things under a time constraint and of course you get to
          meet like-minded people . I have been participating in hackathons
          since my high school days and have won a few of them.
        </p>
        <p className="projects">
          I Recently participated in{" "}
          <a href="https://unfoldweb3.com">Unfold 2023</a> and was able to win{" "}
          <a href="https://x.com/Avalanche_In/status/1717543567571464642?s=20">
            3rd Position
          </a>{" "}
          in the Avalanche Track along with a prize amount of $1000
        </p>
      </div>
    </motion.section>
  );
};

export default Hackathons;
