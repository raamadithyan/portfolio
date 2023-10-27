// Card.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Card({ title, content, index, color, path }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    immediate: { opacity: 0 },
  };

  return (
    // <AnimatePresence initial={false}>
    <Link
      href={{
        pathname: `/portfolio/${path}`,
        // the data
      }}
    >
      <motion.div
        variants={variant}
        whileHover={{ y: -8 }}
        initial="hidden"
        whileInView="visible"
        exit="immediate"
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.1 * index,
        }}
        style={{
          backgroundColor: color,
        }}
        className={`card `}
      >
        <span className="text-3xl">X</span>

        <h2 className="cursor-pointer ">{title}</h2>
        <p>{content}</p>
      </motion.div>
    </Link>

    // </AnimatePresence>
  );
}

export default Card;
