import { motion } from "framer-motion";
import Thumbnail from "./Thumbnail";
import { languages } from "../data/languages";

function Languages() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const style = "thumbnail col l3 m6 s12 icontainer";

  return (
    <motion.div
      className="sec"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="divider"></motion.div>
      <br />
      <h5>My Stories with Programming Languages</h5>
      <motion.div className="section">
        <motion.div className="row">
          {languages.map((language) => {
            return <Thumbnail style={style} object={language}></Thumbnail>;
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Languages;
