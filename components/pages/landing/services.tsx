import { CardOutlineExtend } from "@/components/ui/card-outline-extend";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";
import { PropsWithChildren } from "react";

export default function ServicesSection() {
  return (
    <section className="mt-24">
      <div className="w-screen min-h-screen px-6">
        <Heading />
        <Solutions />
      </div>
    </section>
  );
}

function Heading() {
  return (
    <div className="space-y-12" data-block="contain">
      <h3 className="text-6xl sm:text-7xl w-full sm:w-[70%] text-center sm:text-start font-semibold text-foreground font-geist">
        WHAT WE BUILD.
      </h3>
    </div>
  );
}

interface ISolutionList {
  label: string;
  description: string;
  cta: string;
  href: string;
  metrics: IMetricCard[];
}

const solutionsList: ISolutionList[] = [
  {
    label: "High-Converting Landing Pages.",
    description:
      "Built to turn your ad traffic into revenue. Not designed. Engineered.",
    cta: "See how it works",
    href: "/services/landing-page",
    metrics: [
      {
        label: "Avg. CAC Reduction",
        value: { val: -32, suffix: "%" },
      },
      {
        label: "Avg. Sprint Delivery",
        value: {
          val: 14,
          prefix: "<",
          suffix: "d",
        },
      },
      {
        label: "Demo Request Lift",
        value: {
          val: 3.1,
          suffix: "x",
          decimalPlace: 1,
        },
      },
    ],
  },
  {
    label: "Legacy B2B Revamp.",
    description:
      "Same solution. More optimized, more modern, more customizable",
    cta: "Learn more",
    href: "/services/swd",
    metrics: [
      {
        label: "Avg. Page Load Time",
        value: {
          val: 1.2,
          decimalPlace: 1,
          suffix: "s",
        },
      },
      {
        label: "Core Web Vitals",
        value: {
          val: 95,
          suffix: "+",
        },
      },
      {
        label: "Headless Scalability",
        value: {
          val: 100,
          suffix: "%",
        },
      },
    ],
  },
  {
    label: "Conversion Strategy.",
    description:
      "ICP mapping, funnel audit, messaging hierarchy — on real signal.",
    cta: "Start with a free audit",
    href: "/services/",
    metrics: [
      {
        label: "Audit Turnaround",
        value: {
          val: 48,
          suffix: "hrs",
        },
      },
      {
        label: "Blind Assumptions",
        value: "ZERO",
      },
      {
        label: "Teardown Framework",
        value: "3-Step",
      },
    ],
  },
];

function Solutions() {
  return (
    <div
      className="grid grid-flow-row sm:grid-flow-col items-start gap-8 space-y-6 mt-24"
      data-block="contain"
    >
      {solutionsList?.map((item) => {
        return <SolutionCard key={item.label} {...item} />;
      })}
    </div>
  );
}

function SolutionCard({ ...item }: ISolutionList) {
  return (
    <CardOutlineExtend className="relative border border-foreground z-40 py-4 px-4 h-full">
      <div className="space-y-6 mb-8 text-center md:text-start">
        {/* Vectors */}
        {/* <div className="w-full max-h-64 min-w-64 overflow-hidden border-b">
                <div className="w-fit h-fit rounded-lg mx-auto">
                  <Image
                    src={"/assets/vectors/landing-page-vector@v2.png"}
                    alt="landing page vector"
                    width={600}
                    height={600}
                    className="size-80 object-cover"
                  />
                </div>
              </div> */}
        {/* End Vectors */}
        <h3 className="text-4xl sm:text-4xl font-semibold">{item.label}</h3>
        <p className="text-accent-foreground/60 text-sm sm:text-base mx-auto md:mx-0">
          {item.description}
        </p>
        {/* Metrics */}
        <MetricsRoot>
          {item?.metrics?.map((m, index) => {
            return <MetricCard key={m.label + index} {...m} />;
          })}
        </MetricsRoot>
        {/* end Metrics */}
      </div>
      {/* CTA */}
      <div className="absolute bottom-0 left-0 px-4 py-2 w-full">
        <button className="*:size-4 flex items-center gap-2 w-max mx-auto sm:mx-0 outline outline-foreground rounded-full px-3 py-1 text-sm font-medium">
          {item.cta} <IconArrowRight />
        </button>
      </div>
      {/* End CTA */}
    </CardOutlineExtend>
  );
}

function MetricsRoot({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={cn(
        "flex mx-auto sm:mx-0 flex-col 2xl:flex-row w-max gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface IMetricCard {
  label: string;
  value:
    | {
        val: number;
        prefix?: string;
        suffix?: string;
        decimalPlace?: number;
      }
    | string;
}

function MetricCard({
  label,
  value,
  className,
}: IMetricCard & { className?: string }) {
  return (
    <div className={cn("", className)}>
      {/* Content */}
      <div className="**:text-xl **:font-mono **:font-medium **:text-accent-foreground/90">
        {typeof value === "string" ? <p>{value}</p> : null}
        {typeof value === "object" ? (
          <div className="">
            <span>{value.prefix}</span>
            <NumberTicker
              value={value.val}
              decimalPlaces={value.decimalPlace}
            />

            <span>{value.suffix}</span>
          </div>
        ) : null}
      </div>
      {/* End Content */}
      <p className="text-sm text-accent-foreground/60">{label}</p>
    </div>
  );
}
