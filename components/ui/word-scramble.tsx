// "use client";

// import { AnimatePresence, motion } from "motion/react";
// import { useState } from "react";

// interface IWordScrambleProps {
//   text: string;
// }

// const scrambleList = ["&", "$", "@", "#", "/", "~", "^", "%"];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1,
//     },
//   },
// };
// const wordVariant = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//   },
// };

// function WordScramble({ text }: IWordScrambleProps) {
//   const wordList = text?.split("");

//   return (
//     <motion.span
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="text-4xl"
//     >
//       {wordList?.map((word, index) => {
//         return <Word word={word} index={index} key={word + index} />;
//       })}
//     </motion.span>
//   );
// }

// function Word({ word, index }: { word: string; index: number }) {
//   const ran = getRandom(scrambleList.length);
//   const [val, setVal] = useState<string>(
//     word === " " ? word : scrambleList?.[ran],
//   );

//   return (
//     <AnimatePresence mode="wait">
//       <motion.span key={val} variants={wordVariant}>
//         {val}
//       </motion.span>
//     </AnimatePresence>
//   );
// }

// function getRandom(max: number) {
//   return Math.floor(Math.random() * max);
// }

// export { WordScramble };
"use client";

import { motion } from "motion/react"; // Using your import path
import { useEffect, useState } from "react";

interface IWordScrambleProps {
  text: string;
}

const scrambleList = ["&", "$", "@", "#", "/", "~", "^", "%"];

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1, // Speed of the wave across the word
    },
  },
};

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function WordScramble({ text }: IWordScrambleProps) {
  const chars = text.split("");

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl font-mono" // Mono font prevents jittering
    >
      {chars.map((char, index) => (
        <Character key={index} targetChar={char} />
      ))}
    </motion.span>
  );
}

function Character({ targetChar }: { targetChar: string }) {
  const [displayChar, setDisplayChar] = useState(
    scrambleList[Math.floor(Math.random() * scrambleList.length)],
  );

  useEffect(() => {
    if (targetChar === " ") {
      setDisplayChar(" ");
      return;
    }

    let iteration = 0;
    const maxIterations = 10; // Number of scrambles before landing

    const interval = setInterval(() => {
      // Pick a random symbol
      setDisplayChar(
        scrambleList[Math.floor(Math.random() * scrambleList.length)],
      );

      iteration++;

      if (iteration >= maxIterations) {
        setDisplayChar(targetChar);
        clearInterval(interval);
      }
    }, 100); // Speed of each individual scramble flip

    return () => clearInterval(interval);
  }, [targetChar]);

  return <motion.span variants={charVariants}>{displayChar}</motion.span>;
}

export { WordScramble };
