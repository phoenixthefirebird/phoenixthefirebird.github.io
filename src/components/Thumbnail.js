import React from "react";
import { motion } from "framer-motion";

const Thumbnail = ({ style, object }) => {
  const { imageUrl, imageAlt, overlayColor, overlayDesc } = object;
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={item} className={style}>
      <img src={imageUrl} alt={imageAlt} />
      <motion.div class={overlayColor}>
        <p className="vert left-align">{overlayDesc}</p>
      </motion.div>
    </motion.div>
  );
};

export default Thumbnail;
