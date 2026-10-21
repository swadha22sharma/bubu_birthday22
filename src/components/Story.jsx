import { motion } from "framer-motion";
import "./Story.css";

function Story() {
  const moments = [
    {
      title: "The Beginning",
      text: "When a Linkedin boy became my Life partner and things start working from day one when i was clueless and just asking you about the colloge. ✨",
    },
    {
      title: "The Little Moments",
      text: "i asked you for your mobile number and we start meeting everyday. ❤️",
    },
    {
      title: "Growing Together",
      text: "One day on Sep 7th 2024 on that night while we were chatting you asked me for a hug then i said yes to hug and next day we hugged each other and that day i asked you - DO YOU LOVE ME.",
    },
    {
      title: "So Many Memories",
      text: "We spent time from AUG 22 2024 TO FEB 8 2025 and you got placement.......",
    },
    {
      title: "Today",
      text: "Today you are successfully working in your life as NETWORK ENGINEER and i am studying in 3rd year of BCA and you left me when i was in 1st year , today we both celebrating your 3rd birthday together and only wish is that we will celebrate our all the birthdays , aniversaries, parties, and all the success together in life . 🎂",
    },
  ];

  return (
    <section className="story">

      <motion.p
        className="story-small"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Every story has its beautiful moments ✨
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Story ❤️
      </motion.h2>

      <div className="timeline">

        {moments.map((moment, index) => (
          <motion.div
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >

            <div className="timeline-dot">
              ❤️
            </div>

            <div className="timeline-card">
              <h3>{moment.title}</h3>
              <p>{moment.text}</p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Story;