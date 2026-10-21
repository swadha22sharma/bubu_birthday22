
import { motion } from "framer-motion";
import "./Song.css";
import songFile from "../assets/song/our-song.mp3";

function Song() {
  return (
    <section className="song">

      <motion.p
        className="song-small"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
       Our love voice , Funny but memorable🎵
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Song ❤️
      </motion.h2>

      <motion.div
        className="song-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="music-icon">♫</div>

        <h3>Our Special Song</h3>

        <p>
          We will convert these lyrics into real life.... ❤️
        </p>

    <audio controls preload="metadata">
  <source src={songFile} type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
      </motion.div>

    </section>
  );
}

export default Song;