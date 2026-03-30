"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { RefObject, useRef } from "react";

type Ref = RefObject<HTMLDivElement | null>;

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const input = [0, 0.05];
  const scale = useTransform(scrollYProgress, input, [0.6, 1]);
  //   const rotateX = useTransform(scrollYProgress, input, [-90, 0]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.2, 0.28],
    ["160px", "80", "0px"],
  );

  return (
    <motion.section
      style={{
        // rotateX,
        scale,
      }}
      className="**:data-[block=contain]:container **:data-[block=contain]:mx-auto mt-24"
      ref={sectionRef}
    >
      <motion.div
        className="relative bg-black *:text-white min-h-screen py-24"
        style={{
          borderRadius,
        }}
      >
        <Heading ref={sectionRef} />

        {/* <motion.div style={{}} className="">
          <Problem
            className=""
            text={"You're paying for traffic that doesn't buy."}
            description="You're paying to acquire visitors that bounce. The page isn't built to convert - it's built to look good."
          />
          <Problem
            text={"Your ads are fine. Your page is the problem."}
            description="Your media buyer optimized the ad. Nobody optmized the destination. That's where the money disappers."
          />
          <Problem
            text={"You've redesigned it twice. Still no lift."}
            description="Most teams can't diagnose a landing page. They redesign it. Then redesign it again. Still no lift."
          />
        </motion.div> */}
      </motion.div>
    </motion.section>
  );
}

function Heading({ ref }: { ref: Ref }) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "40% end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  return (
    <motion.div
      className="space-y-6 md:space-y-12 sticky top-24 bg-black px-auto text-center"
      data-block="contain"
      style={{
        opacity,
      }}
    >
      <p className="mb-4">The Problem</p>
      <motion.h3 className="text-2xl sm:text-6xl md:text-7xl w-[70%] mx-auto  font-medium">
        Your landing page is costing you more than you think.
      </motion.h3>
      <p className="flex text-sm sm:text-lg w-[70%] mx-auto">
        You&apos;re running ads. You&apos;re getting traffic. But the page
        isn&apos;t closing. Every day it stays broken, you&apos;re burning
        budget.
      </p>
    </motion.div>
  );
}

function Problem({
  text = "High CAC, Low Conversion",
  description,
  className,
}: {
  text: string;
  description: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
      }}
      transition={{ duration: 0.5 }} // Smooth transition duration
      className={cn("relative w-full h-[150dvh]")}
    >
      {/* Content */}
      <div className="sticky left-0 right-0 top-140 mx-auto text-center w-max flex flex-col gap-y-4">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold w-[70%] mx-auto">
          {text}
        </h2>
        <p className="text-sm w-[70%]">{description}</p>
      </div>
      {/* End Content */}
    </motion.div>
  );
}
