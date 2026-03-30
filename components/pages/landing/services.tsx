import { NumberTicker } from "@/components/ui/number-ticker";
import { IconArrowRight } from "@tabler/icons-react";

export default function ServicesSection() {
  return (
    <section className="**:data-[block=contain]:container **:data-[block=contain]:mx-auto mt-24">
      <div className="relative min-h-screen mx-4">
        <Heading />
        <Solutions />
      </div>
    </section>
  );
}

function Heading() {
  return (
    <div className="space-y-12" data-block="contain">
      <h3 className="text-6xl sm:text-7xl w-[70%] font-semibold text-foreground font-geist">
        WHAT WE BUILD.
      </h3>
    </div>
  );
}

const solutionsList: {
  label: string;
  description: string;
  cta: string;
  href: string;
  metrics: {
    label: string;
    startContent?: number;
    content: number | string;
    prefix?: string;
    suffix?: string;
    decimalPlace?: number;
  }[];
}[] = [
  {
    label: "Landing Pages",
    description:
      "Conversion-engineered pages built to turn your ad traffic into revenue. Not designed. Engineered.",
    cta: "See how it works",
    href: "/services/landing-page",
    metrics: [
      {
        label: "Avg. CAC Reduction",
        content: -32,
        suffix: "%",
      },
      {
        label: "Avg. Sprint Delivery",
        content: 14,
        prefix: "<",
        suffix: "d",
      },
      {
        label: "Demo Request Lift",
        content: 3.1,
        suffix: "x",
        decimalPlace: 1,
      },
    ],
  },
  {
    label: "Legacy B2B Revamp",
    description:
      "Build or revamp your product's acquisition layer. Front-end that converts, not just functions.",
    cta: "Learn more",
    href: "/services/swd",
    metrics: [
      {
        label: "Avg. Page Load Time",
        content: 1.2,
        decimalPlace: 1,
        suffix: "s",
      },
      {
        label: "Core Web Vitals",
        content: 95,
        suffix: "+",
      },
      {
        label: "Headless Scalability",
        content: 100,
        suffix: "%",
      },
    ],
  },
  {
    label: "Conversion Strategy",
    description:
      "Before we build, we diagnose. ICP mapping, funnel audit, messaging hierarchy — so every page we ship is built on real signal.",
    cta: "Start with a free audit",
    href: "/services/",
    metrics: [
      {
        label: "Audit Turnaround",
        content: 48,
        suffix: "hrs",
      },
      {
        label: "Blind Assumptions",
        content: "ZERO",
      },
      {
        label: "Teardown Framework",
        content: "3-Step",
      },
    ],
  },
];

function Solutions() {
  return (
    <div
      className="grid sm:grid-cols-2 grid-flow-row gap-2 py-12 space-y-6 sm:space-y-24 mt-24"
      data-block="contain"
    >
      {solutionsList?.map((item) => {
        return (
          <div
            key={item.label}
            className="outline sm:outline-none rounded-2xl shadow-md sm:shadow-none py-6"
          >
            <div className="space-y-6 mb-8 text-center">
              <h3 className="text-4xl sm:text-6xl font-semibold">
                {item.label}
              </h3>
              <p className="text-accent-foreground/60 text-sm sm:text-base w-[90%] sm:w-[70%] mx-auto">
                {item.description}
              </p>
              {/* Metrics */}
              <div className="flex flex-wrap gap-8 items-center justify-center">
                {item?.metrics?.map((m) => {
                  return (
                    <div key={m.label} className="text-center">
                      <div className="">
                        <span>{m.prefix}</span>
                        {typeof m.content === "number" ? (
                          <NumberTicker
                            value={m.content}
                            decimalPlaces={m.decimalPlace}
                          />
                        ) : (
                          <p>{m.content}</p>
                        )}

                        <span>{m.suffix}</span>
                      </div>
                      <p className="text-sm text-accent-foreground/60">
                        {m.label}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* end Metrics */}
            </div>
            {/* CTA */}
            <button className="*:size-4 flex items-center gap-2 w-max mx-auto sm:mr-auto bg-foreground rounded-full text-background px-3 py-1 text-sm font-medium sm:text-base sm:text-foreground sm:bg-background sm:py-0 sm:px-0">
              {item.cta} <IconArrowRight />
            </button>
            {/* End CTA */}
          </div>
        );
      })}
    </div>
  );
}
