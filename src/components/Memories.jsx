import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Memories.css";

function Memories() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

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
        Our Little Memories ❤️
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
          ref={videoRef}
          controls={!isPlaying}
          playsInline
          className="memory-video"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={handleVideoClick}
        >
          <source src="/memories/clip.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p>
          One of those moments I want to keep forever. ❤️
        </p>
      </motion.div>

    </section>
  );
}

export default Memories;