"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { PropsWithChildren, RefObject, useRef } from "react";

type Ref = RefObject<HTMLDivElement | null>;

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="max-w-screen" ref={sectionRef}>
      <Heading />

      <ProblemCard
        className=""
        text={"You're paying for traffic that doesn't buy."}
        description="You're paying to acquire visitors that bounce. The page isn't built to convert - it's built to look good."
      />
      <ProblemCard
        text={"Your ads are fine. Your page is the problem."}
        description="Your media buyer optimized the ad. Nobody optmized the destination. That's where the money disappers."
      />
      <ProblemCard
        text={"You've redesigned it twice. Still no lift."}
        description="Most teams can't diagnose a landing page. They redesign it. Then redesign it again. Still no lift."
      />
    </section>
  );
}

function Heading() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const input = [0, 0.4];
  const scale = useTransform(scrollYProgress, input, [0.6, 1]);
  //   const rotateX = useTransform(scrollYProgress, input, [-90, 0]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["160px", "0px"],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.7],
    [0, 1, 1, 0],
  );
  const translateY = useTransform(scrollYProgress, [0, 0.3], ["150%", "0%"]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[150vh] w-screen bg-black text-background"
      style={{
        borderRadius,
        scale,
      }}
    >
      <motion.div
        className="sticky left-0 right-0 top-1/2 -translate-y-1/2"
        data-block="contain"
        style={{
          translateY,
          opacity,
        }}
      >
        <div className="relative w-[95%] md:w-[80%] mx-auto">
          <p className="mb-4 mx-auto w-max">The Problem</p>
          <motion.h3 className="text-2xl text-center sm:text-6xl md:text-7xl mx-auto font-medium">
            Your landing page is costing you more than you think.
          </motion.h3>
          <p className="flex text-sm sm:text-lg w-[90%] md:w-[60%] mx-auto text-center mt-8">
            You&apos;re running ads. You&apos;re getting traffic. But the page
            isn&apos;t closing. Every day it stays broken, you&apos;re burning
            budget.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProblemRoot({
  children,
  className,
  ref,
}: PropsWithChildren & { className?: string; ref: Ref }) {
  return (
    <div
      ref={ref}
      className={cn(
        "relative h-[150vh] w-screen bg-black text-background",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ProblemCard({
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

  const opacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);

  return (
    <ProblemRoot ref={ref}>
      <motion.div
        style={{
          opacity,
        }}
        // transition={{ duration: 0.5 }} // Smooth transition duration
        className={cn("sticky top-1/2 -translate-y-1/2 left-0 right-0")}
      >
        {/* Content */}
        <div className=" mx-auto text-center w-[80%] md:w-[50%] space-y-3 md:space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold">
            {text}
          </h2>
          <p className="text-sm w-[80%] text-accent/60 md:w-[60%] mx-auto md:text-base">
            {description}
          </p>
        </div>
        {/* End Content */}
      </motion.div>
    </ProblemRoot>
  );
}
