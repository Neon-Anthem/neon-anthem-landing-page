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
    <div>
      <button
        type="button"
        className={cn(
          "bg-black px-3 py-1.5 font-medium rounded-full text-white flex items-center gap-2 [&>svg]:size-4 text-sm mx-auto sm:mr-auto w-max",
          className,
        )}
      >
        Start with Step 1 - it&apos;s free
        <IconArrowRight />
      </button>
    </div>
  );
}

function Heading() {
  return (
    <div className="space-y-12" data-block="contain">
      <h3 className="text-6xl sm:text-7xl w-[70%] font-semibold font-geist uppercase">
        Our Strategy.
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
        description="We analyze your current page or brief across 5 conversion dimensions. You get a clear breakdown of what's broken and why. Takes 30 seconds to request, 24 hours to deliver."
        hero={{
          label: "Identify friction",
          stepLabel: "first step",
          tag: "analyse",
        }}
      />
      <ProcessCard
        step={2}
        title="Strategy & messaging"
        description="We map your ICP, sharpen the value prop, and define the page architecture before a single line of code is written. No guessing. All signal."
        hero={{
          label: "Strategic Positioning",
          stepLabel: "Ideation Step",
          tag: "Research",
        }}
      />
      <ProcessCard
        step={3}
        title="Build"
        description="Design and development in parallel. Conversion-first layout, copy hierarchy, CTA placement — engineered for the one action you want visitors to take."
        hero={{
          label: "Design & Development",
          stepLabel: "Analysis to action",
          tag: "Development",
        }}
      />
      <ProcessCard
        step={4}
        title="Launch & Iterate"
        description="We ship. Then we watch. Post-launch, we review performance data and run the first iteration within 7 days if needed."
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
        <h5 className="bg-clip-text text-transparent bg-linear-0 w-max from-accent-foreground/40 to-background text-6xl sm:text-7xl leading-none font-bold font-geist">
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
    <div className="flex items-center my-4 mt-6 h-26.5">
      {/* Tag */}
      <div className="w-10 h-full flex items-center justify-center">
        {/* Tag Text */}
        <div className="-rotate-90 space-y-0.5 flex flex-col items-center justify-start w-26.5">
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
            <p className="text-xs tracking-wide font-medium font-mono capitalize text-accent-foreground/60">
              {stepLabel}
            </p>
            <h4 className="text-lg font-semibold uppercase">{label}</h4>
          </div>
        </div>
      </div>
      {/* End Content */}
    </div>
  );
}
