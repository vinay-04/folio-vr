import { motion } from "framer-motion";

const Socials = (props: {
    refSocials: any;
    inViewSocials: any;
    variants: any;
}) => {
    return (
        <motion.section
       ref={props.refSocials}
        initial="hidden"
        animate={props.inViewSocials ? "visible" : "hidden"}
        variants={props.variants}
        transition={{ duration: 1 }}
        className="socials"
        id="socials"
      >
        <div className="socials">
      <div className="title">Socials</div>  
        <p className="socials">
          <a  href="https://github.com/vinay-04/">
            <img src="icons/github.png" alt="" width="100" height=" 100" /> 
          </a>
          <a href="mailto:vinayrajan04@gmail.com">
            <img src="icons/mail.png" alt="" width="100" height="100" />
          </a>
          <a href="https://www.linkedin.com/in/vinay-rajan-s-b63248250/">
            <img src="icons/lkdin.png" alt="" width="100" height="100" />
          </a>
        </p>
      </div>
      </motion.section>
    )
}

export default Socials;