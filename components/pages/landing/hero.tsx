"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Marquee } from "@/components/ui/marquee";
import { NavCTA } from "@/components/ui/nav-items";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Section } from "@/components/ui/section";
import { IconArrowRight } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <Section className="h-screen relative">
      {/* Hero Section */}
      <div
        className="pt-24 sm:pt-48 text-center sm:text-start"
        data-block="contain"
      >
        {/* Tag Line */}
        <div className="w-[80%] mx-auto sm:w-full sm:mx-0">
          <AnimatedShinyText>
            For Series A-B startups and Legacy B2Bs who can&apos;t afford to
            guess.
          </AnimatedShinyText>
        </div>
        {/* End Tag LIne */}
        {/* Heading */}
        <div className="text-4xl mx-auto sm:mx-0 text-center sm:text-start w-max sm:text-8xl my-8">
          We Engineer<br></br>{" "}
          <div className="font-semibold justify-center">High-Converting</div>
          Landing Pages
        </div>
        {/* End Heading */}

        {/* Sub heading */}
        <div className="">
          <p className="text-sm sm:text-xl text-accent-foreground/60 w-[80%] sm:w-full mx-auto">
            Your{" "}
            <span className="italic font-medium mx-2 text-foreground text-nowrap">
              ad spend{" "}
            </span>
            is working. Your landing page isn&apos;t. We fix that.
          </p>
        </div>
        {/* End Sub heading */}

        {/* CTA */}
        <div className="w-max mx-auto sm:mx-0 mt-10">
          <NavCTA className="capitalize text-sm sm:text-base">
            Get our free structural audit
            <IconArrowRight />
          </NavCTA>
        </div>
        {/* End CTA */}
      </div>

      <HeroMetrics />

      {/* Hero Fold */}
      <div className="absolute bottom-0 left-0 right-0">
        <HeroFold />
      </div>
      {/* End Hero Fold */}
      {/* End Hero Section */}
    </Section>
  );
}

const metricList: {
  label: string;
  value:
    | { val: number; suffix?: string; prefix?: string; decimalPlace?: number }
    | string;
}[] = [
  {
    label: "Avg. Demo request",
    value: {
      val: 3.1,
      suffix: "x",
      decimalPlace: 1,
    },
  },
  {
    label: "Avg. Delivery Time",
    value: {
      val: 14,
      prefix: "<",
      suffix: "d",
    },
  },
  {
    label: "Conversion-first design",
    value: {
      val: 100,
      suffix: "%",
    },
  },
];

function HeroMetrics() {
  return (
    <div className="" data-block="contain">
      {/* Mobile Design */}
      <div className="mt-10 grid grid-flow-row sm:hidden divide-y">
        {metricList?.map((m, index) => {
          return (
            <div key={m.label + index} className="w-full">
              <div className="grid grid-cols-2 items-center w-[80%] mx-auto">
                <div className="text-2xl place-self-end pr-4">
                  {typeof m.value === "object" ? (
                    <span className="flex items-center gap-0.5">
                      {m.value.prefix && <p>{m.value.prefix}</p>}
                      <NumberTicker
                        value={m.value.val}
                        decimalPlaces={m.value.decimalPlace}
                      />
                      {m.value.suffix && <p>{m.value.suffix}</p>}
                    </span>
                  ) : (
                    <h6>{m.value}</h6>
                  )}
                </div>
                {/* Label */}
                <span className="text-xs font-medium">{m.label}</span>
                {/* Label */}
              </div>
            </div>
          );
        })}
      </div>
      {/* End Mobile Design */}

      {/* Desktop */}
      <div className="hidden sm:flex items-center gap-12 mt-10">
        {/* Conversion design */}

        {metricList?.map((m, index) => {
          return (
            <div key={m.label + index} className="text-start">
              <div className="text-6xl font-semibold text-nowrap text-accent-foreground">
                {typeof m.value === "object" ? (
                  <span className="flex items-center gap-0.5 ">
                    {m.value.prefix && <p>{m.value.prefix}</p>}
                    <NumberTicker
                      className="text-inherit"
                      value={m.value.val}
                      decimalPlaces={m.value.decimalPlace}
                    />
                    {m.value.suffix && <p>{m.value.suffix}</p>}
                  </span>
                ) : (
                  <h6>{m.value}</h6>
                )}
              </div>

              <p className="text-sm sm:text-base text-nowrap">{m.label}</p>
            </div>
          );
        })}
      </div>
      {/* End Desktop */}
    </div>
  );
}

const clientList: { name: string; image?: string }[] = [
  {
    name: "The Mark Media",
    image: "",
  },
  {
    name: "Gudsman",
    image: "",
  },
  {
    name: "CoastlineERP",
    image: "",
  },
  {
    name: "Propertyscape.in",
    image: "",
  },
  {
    name: "Typeframe",
    image: "",
  },
];

function HeroFold() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:gap-8">
      {/* Metric */}

      {/* End Metric */}

      {/* Clients */}
      <div>
        <div className="ml-4 w-max sm:ml-0" data-block="contain">
          <p className="text-accent-foreground/60 font-medium font-mono uppercase">
            As seen building for
          </p>
        </div>
        <div className="relative w-screen flex flex-col items-center justify-center overflow-hidden">
          <Marquee reverse>
            {clientList?.map((client) => {
              return (
                <div key={client.name}>
                  <div className="w-44 flex items-center justify-center text-accent-foreground/60 text-lg text-nowrap">
                    {client.name}
                  </div>
                </div>
              );
            })}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </div>
      </div>
      {/* End Clients */}
    </div>
  );
}
