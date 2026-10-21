import { motion } from "framer-motion";
import "./Memories.css";

function Memories() {
  return (
    <section className="memories">

      <motion.p
        className="memories-small"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        A little memory of us ✨
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Your First Birthday clip ❤️
      </motion.h2>

      <motion.p
        className="memories-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Some moments are too special to put into words.
      </motion.p>

      {/* Video Memory */}
      <motion.div
        className="memory-video-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <video
          controls
          playsInline
          className="memory-video"
        >
          <source
            src="/memories/clip.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <p>
          One of those moments I want to keep forever. ❤️
          This was your first birthday with me , jab hum main gate wali canteen me bethe the or tum apne dost chetan se baat kr rhe the .and your hand was romancing with me or mai video bna rahi tha

        </p>
      </motion.div>

    </section>
  );
}

export default Memories;