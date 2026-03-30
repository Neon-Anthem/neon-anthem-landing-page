"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Marquee } from "@/components/ui/marquee";
import { NavCTA } from "@/components/ui/nav-items";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Particles } from "@/components/ui/particles";
import { IconArrowRight } from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden h-[calc(100vh-44px)] w-full">
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <Particles quantity={400} color="#000000" className="h-full w-full" />
      </div>
      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center w-full h-full container mx-auto gap-12">
        {/*  */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-radial from-white size-2/3 rounded-full"></div>
        {/*  */}
        <div className="text-center z-10 space-y-12">
          <div className="-mt-16 w-[80%] mx-auto text-sm sm:w-full sm:text-base">
            <AnimatedShinyText>
              For Series A-B startups and Legacy B2Bs who can&apos;t afford to
              guess.
            </AnimatedShinyText>
          </div>
          {/* Hero text */}
          <div className="text-4xl sm:text-6xl md:text-8xl w-max mx-auto sm:leading-18 md:leading-28">
            We Engineer<br></br>{" "}
            <div className="flex items-center font-semibold justify-center">
              High-Converting
            </div>
            Landing Pages
          </div>
          {/* End Hero Text */}
          {/* para */}
          <div className="">
            <p className="text-sm sm:text-xl text-accent-foreground/60 w-[80%] sm:w-full mx-auto">
              Your{" "}
              <span className="italic font-medium mx-2 text-foreground text-nowrap">
                ad spend{" "}
              </span>
              is working. Your landing page isn&apos;t. We fix that.
            </p>
          </div>
          {/* End Para */}
          {/* CTA */}
          <div className="-mb-12 mx-auto w-max">
            <NavCTA className="capitalize">
              Get our free structural audit
              <IconArrowRight />
            </NavCTA>
          </div>
          {/* End CTA */}
        </div>
        {/* End Hero */}
        {/* Hero Fold */}
        <div className="absolute bottom-0 left-0 right-0">
          <HeroFold />
        </div>
        {/* End Hero Fold */}
      </div>
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
    <div className="flex flex-col sm:flex-row items-center  sm:gap-8">
      {/* Metric */}
      <div className="flex items-center justify-center gap-8">
        {/* Conversion design */}
        <div className="text-center">
          <div className="text-2xl sm:text-4xl md:text-7xl font-semibold text-nowrap">
            <NumberTicker value={100} />
            <span>%</span>
          </div>

          <p className="text-sm sm:text-base text-nowrap">
            Conversion-first design
          </p>
        </div>
        {/* End Conversion Design */}
        {/* Avg */}
        <div className="text-center">
          <div className="text-2xl sm:text-4xl md:text-7xl font-semibold text-nowrap">
            <NumberTicker value={3.1} decimalPlaces={1} />
            <span>x</span>
          </div>

          <p className="text-sm sm:text-base text-nowrap">
            Avg. conversion lift
          </p>
        </div>
        {/* Avg */}
      </div>
      {/* End Metric */}

      {/* Clients */}
      <div>
        <div>
          <p>As seen building for</p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
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
          <div className="from-blue-500 pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </div>
      </div>
      {/* End Clients */}
    </div>
  );
}
