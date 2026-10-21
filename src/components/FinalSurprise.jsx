import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "./FinalSurprise.css";

function FinalSurprise() {
  const [opened, setOpened] = useState(false);

  const handleCakeClick = () => {
    setOpened(true);

    confetti({
      particleCount: 160,
      spread: 100,
      origin: {
        y: 0.6,
      },
    });
  };

  return (
    <section className="final-surprise">
      <AnimatePresence mode="wait">

        {!opened ? (
         <motion.div
  className="cake-only"
  key="cake"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{
    opacity: 0,
    scale: 1.4,
    y: -30,
  }}
  transition={{ duration: 0.6 }}
>
  <motion.h2
    className="make-wish"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    Make a Wish ✨
  </motion.h2>

  <motion.div
    className="big-cake"
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.08,
    }}
    whileTap={{
      scale: 0.9,
    }}
    onClick={handleCakeClick}
  >
    🎂
  </motion.div>

  <motion.p
    className="tap-hint"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    Tap the cake 💗
  </motion.p>
</motion.div>
        ) : (
          <motion.div
            className="birthday-message"
            key="message"
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="celebration">
              ✨ 🎉 ✨
            </div>

            <h2>
              Happy Birthday,
              <br />
              <span>My love of my life❤️</span>
            </h2>

            <div className="message-line" />

            <p>
              You deserve all the happiness in the world.
            </p>

            <p>
              tum jo chahte ho tumhe wo sab mile , tumhe wo har chij mile jo tum manifest karna chahte ho , tum career bhot bhot bhot growth mile , best designation best company best life mile jaisi tum chahte ho... tumhara career bhot successfull hoga tum wo sab kr rhe ho jo tumhe karna chiye ....
            </p>
            <br />

            <p>
              tum healthly ho or hmesha bhagwan tumhe suastha rkhe or physically mentally fit rakhe or tumhe kbhi tumnhare track se na bhatakne de , bhagwan hamesha tumhe sahi raste dekhaye 
            </p>
            <br />
            <p>
                bhagwan hume hmesha  pass rkhe khush rkhe or hmesha pyaar de.....  
                
        
            </p>
            <br />
            <p>
                mai hmesha tumhare sath or or hmesha rahungi tumhari parchai bnakar.....
            </p>

            <p className="special-message">
              And I hope I get to be there for many,
              many more birthdays with you. ❤️
            </p>

            <div className="final-hearts">
              ❤️ 💕 ❤️
            </div>

            <p className="signature">
              With all my love,
              <br />
              Yours  wifey swati ....❤️

            </p>
            <br />
            <p>siya ram</p>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}

export default FinalSurprise;