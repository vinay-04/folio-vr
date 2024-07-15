import Link from "next/link";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import Socials from "@/components/Socials";

const HomePage = () => {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 }
  };

  const { ref: refSkills, inView: inViewSkills } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: refProjects, inView: inViewProjects } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: refHackathons, inView: inViewHackathons } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: refSocials, inView: inViewSocials } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <Header />
      <div className="lg">
        <h1 className="vr">Vinay Rajan</h1>
        <img className="bg" src="images/bg-main.png" alt="Vinay Rajan" />
      </div>
      <br />
      <About />
      <Skills refSkills={refSkills} variants={variants} inViewSkills={inViewSkills} />
      <Projects refProjects={refProjects} inViewProjects={inViewProjects} variants={variants} />
      <Hackathons refHackathons={refHackathons} inViewHackathons={inViewHackathons} variants={variants} />
      <Socials refSocials={refSocials} inViewSocials={inViewSocials} variants={variants} />
    </>
  );
};

export default HomePage;