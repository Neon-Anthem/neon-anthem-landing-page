"use client";

import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";

export default function HowItWorks() {
  return (
    <section className="border-t mx-4">
      <div className="py-24" data-block="contain">
        <Heading />

        <Process />
        {/* CTA */}
        <CTA className="sm:hidden flex" />
        {/* End CTA */}
      </div>
    </section>
  );
}

function CTA({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-2 items-center justify-center md:justify-start",
        className,
      )}
    >
      <button
        type="button"
        className={cn(
          "bg-foreground px-3 py-1.5 font-medium rounded-full text-white flex items-center gap-2 [&>svg]:size-4 text-sm",
        )}
      >
        Start with Step 1 - it&apos;s free
        <IconArrowRight />
      </button>
      {/*  */}
      <p className="text-foreground text-sm">
        30 seconds to request. 24 hours to deliver
      </p>
      {/*  */}
    </div>
  );
}

function Heading() {
  return (
    <div className="space-y-12" data-block="contain">
      <h3 className="text-6xl sm:text-7xl w-[70%] font-semibold font-geist uppercase">
        The Process.
      </h3>
    </div>
  );
}

function Process() {
  return (
    <div className="py-12 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-x-32 grid-flow-row">
      <ProcessCard
        step={1}
        title="Structural Audit (Free)"
        description="5 Conversion dimensions. Clear breakdown. 24 hours."
        hero={{
          label: "Identify friction",
          stepLabel: "Evaluation",
          tag: "analyse",
        }}
      />
      <ProcessCard
        step={2}
        title="Strategy & messaging"
        description="No Guessing. A full-ICP map. Defined Value proposition."
        hero={{
          label: "Strategic Positioning",
          stepLabel: "Ideation",
          tag: "Research",
        }}
      />
      <ProcessCard
        step={3}
        title="Build"
        description="Engineered for CTA's"
        hero={{
          label: "Design & Development",
          stepLabel: "In-action",
          tag: "Development",
        }}
      />
      <ProcessCard
        step={4}
        title="Launch & Iterate"
        description="Ship. Performance Review. Re-iterate."
        hero={{
          label: "Launch & Post-launch",
          stepLabel: "Optimization",
          tag: "Deploy",
        }}
      />
    </div>
  );
}

interface IProcessCardProps {
  title: string;
  description: string;
  step: 1 | 2 | 3 | 4;
  hero: IProcessCalendar;
}

function ProcessCard({ title, description, step, hero }: IProcessCardProps) {
  return (
    <div className="relative isolate">
      {/* Step count */}
      <div className="">
        <h5 className="bg-clip-text text-transparent bg-linear-0 w-max from-accent-foreground/80 to-foreground text-6xl sm:text-7xl leading-none font-bold font-geist">
          {step}
        </h5>
      </div>
      {/* End Step count */}
      {/* Content */}
      <div className="z-10">
        <h3 className="capitalize text-3xl sm:text-5xl font-semibold">
          {title}
        </h3>
        <p className="text-sm sm:text-lg text-accent-foreground/60">
          {description}
        </p>
      </div>
      {/* End Content */}
      {/* Calendar */}
      {/* Mobile Only */}
      <ProcessCalendar {...hero} />
      {/* End Calendar */}
      {/* CTA */}
      {step === 1 ? <CTA className="sm:flex hidden mt-3" /> : null}
      {/* End CTA */}
    </div>
  );
}

interface IProcessCalendar {
  tag: string;
  label: string;
  stepLabel: string;
}

function ProcessCalendar({ tag, label, stepLabel }: IProcessCalendar) {
  return (
    <div className="flex items-center my-4 mt-6 h-27.5">
      {/* Tag */}
      <div className="w-10 h-full flex items-center justify-center">
        {/* Tag Text */}
        <div className="-rotate-90 space-y-0.5 flex flex-col items-center justify-start w-27.5">
          <div className="bg-foreground outline rounded-xs py-0.5 px-2 text-center w-[inherit]">
            <p className="text-sm text-background font-semibold tracking-wide font-mono uppercase">
              {tag}
            </p>
          </div>
          {/* End Tag Text */}
          <div className="h-[2.5px] w-full">
            <div className="h-[inherit] w-[inherit] bg-foreground"></div>
          </div>
        </div>
      </div>
      {/* End Tag */}

      {/* Content */}
      <div className="w-full h-full bg-linear-90 from-accent to-background rounded-l-sm p-2">
        <div className="w-full h-full flex items-center justify-start">
          <div className="flex flex-col">
            <p className="text-xs md:text-base tracking-wide font-medium font-mono capitalize text-accent-foreground/60">
              {stepLabel}
            </p>
            <h4 className="text-lg md:text-xl font-semibold uppercase">
              {label}
            </h4>
          </div>
        </div>
      </div>
      {/* End Content */}
    </div>
  );
}
