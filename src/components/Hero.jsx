import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Floating heart - top right */}
      <motion.div
        className="hero-heart hero-heart-one"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        ♡
      </motion.div>

      {/* Floating heart - bottom left */}
      <motion.div
        className="hero-heart hero-heart-two"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        ♡
      </motion.div>

      {/* Small introduction */}
      <motion.p
        className="hero-small"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        mera susu mumu ka janamdin hai... ✨
      </motion.p>

      {/* His photo */}
      <motion.div
        className="boyfriend-photo"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
      >
        <img
          src="/images/bubu.jpg"
          alt="My Love"
        />
      </motion.div>

      {/* Birthday heading */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 1,
        }}
      >
        Happy Birthday,
        <br />
        <span>Mere laddu ❤️</span>
      </motion.h1>

      {/* Main message */}
      <motion.p
        className="hero-message"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        To the person who makes my world a little brighter,
        <br />
        my days a little happier, and my heart very full. 🥹
        <br />
        my life's bestest achievement......
      </motion.p>

      {/* Decorative line */}
      <motion.div
        className="hero-line"
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{
          delay: 1.4,
          duration: 0.8,
        }}
      />

      {/* Bottom message */}
      <motion.p
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.7,
          duration: 1,
        }}
      >
        This little corner of the internet is just for you. 💌
      </motion.p>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
        }}
      >
        <span>Scroll down</span>
        <span className="arrow">↓</span>
      </motion.div>

    </section>
  );
}

export default Hero;