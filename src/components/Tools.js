import { motion } from "framer-motion";
import Thumbnail from "./Thumbnail";
import { tools } from "../data/tools";

function Tools() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2.3,
        staggerChildren: 0.1,
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

  const style = "thumbnail col l2 m4 s6 icontainer";

  return (
    <motion.div
      className="sec"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="divider"></motion.div>
      <br />
      <h5>Tools and Frameworks I've Worked With</h5>
      <motion.div className="section">
        <motion.div className="row">
          {tools.map((tool) => {
            return <Thumbnail style={style} object={tool}></Thumbnail>;
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Tools;
