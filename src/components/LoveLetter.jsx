import { motion } from "framer-motion";
import "./LoveLetter.css";

function LoveLetter() {
  return (
    <section className="love-letter">

      <motion.div
        className="letter-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="letter-heart">♡</div>

        <p className="letter-small">
          A little something from my heart...
        </p>

        <h2>
          To My Favorite Person ❤️
        </h2>

        <div className="letter-content">
          <p>
            I don't know if words will ever be enough to
            explain how much you mean to me.
          </p>

          <p>
            You have become such a beautiful part of my life.
            From the smallest conversations to the happiest
            moments, having you beside me makes everything
            feel a little more special.
          </p>

          <p>
            On your birthday, I just want you to know that
            I am grateful for every memory, every smile,
            every laugh, and every moment we've shared.
          </p>

          <p>
            I hope this new year of your life brings you
            everything your heart wishes for.
          </p>

          <p className="letter-ending">
            And no matter how many birthdays come and go,
            I hope I get to celebrate many more of them
            with you. ❤️
          </p>
        </div>

        <p className="letter-signature">
          With all my love,
          <br />
          Yours ❤️
        </p>

      </motion.div>

    </section>
  );
}

export default LoveLetter;