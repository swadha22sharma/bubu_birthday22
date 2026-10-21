import { useState } from "react";
import { motion } from "framer-motion";
import "./Opening.css";

function Opening({ onOpen }) {
  const [showHearts, setShowHearts] = useState(false);

  const handleOpen = () => {
    setShowHearts(true);

    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="opening">

      {/* Floating Heart */}
      <motion.div
        className="hearts"
        animate={{
          y: [-10, -40, -10],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        ❤️
      </motion.div>

      {/* Bubu & Dudu */}
      <motion.div
        className="bubu-dudu"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/animations/5.gif"
          alt="Bubu and Dudu"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        My Birthday Girl... 🥺
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        I made something for you ❤️
        <br />
        we only celebrated your first birthday together and today is your 3rd birthday with me ......
        <br />
  
      </motion.p>

      {/* Surprise Button */}
      <motion.button
        className="surprise-button"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
      >
        Open Your Surprise 💌
      </motion.button>

      {/* Heart Explosion */}
      {showHearts && (
        <div className="heart-explosion">
          {Array.from({ length: 40 }).map((_, index) => {
            const angle = Math.random() * Math.PI * 2;
            const distance = 180 + Math.random() * 300;

            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            return (
              <motion.span
                key={index}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x,
                  y,
                  scale: [0, 1.2, 0.8],
                  opacity: [1, 1, 0],
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 1.1,
                  ease: "easeOut",
                  delay: Math.random() * 0.15,
                }}
              >
                {index % 3 === 0
                  ? "💗"
                  : index % 3 === 1
                  ? "💕"
                  : "❤️"}
              </motion.span>
            );
          })}
        </div>
      )}

    </div>
  );
}

export default Opening;