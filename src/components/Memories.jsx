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
        Your First birthday Clip..❤️
      </motion.h2>

      <motion.p
        className="memories-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Some moments are too special to put into words.
      </motion.p>

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
          <source src="/memories/clip.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p>
          One of those moments I want to keep forever. 
          <br />
          jab hum main gate wali canteen me bethe or tum apne dost chetan se baat kr rhe the or mere hath se sath tum pyaar kr rhe the .... 
          <br />
          bhot chhoti si yaad hai 
          pr bhot yaad aati hai or phle birthday tumhara uske sath se ye third birthday mai tumhare sath celebrate ni kr payi ....❤️
        </p>
      </motion.div>

    </section>
  );
}

export default Memories;