"use client";
import { IconArrowRight } from "@tabler/icons-react";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { Particles } from "../ui/particles";

export default function ComingSoon() {
  return (
    <div className="relative overflow-hidden h-[calc(100vh-44px)] w-full">
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <Particles quantity={400} color="#000000" refresh />
      </div>
      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center w-full h-full container mx-auto gap-12">
        {/*  */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-radial from-white size-2/3 rounded-full"></div>
        {/*  */}
        <div className="text-center z-10">
          {/* Hero text */}
          <div className="text-8xl w-max mx-auto leading-28">
            We Engineer<br></br>{" "}
            <div className="flex items-center font-semibold justify-center">
              High-Converting
            </div>
            Landing Pages
          </div>
          {/* End Hero Text */}
        </div>
        {/* End Hero */}
        <AnimatedShinyText className="text-6xl text-nowrap mx-auto">
          <span>Coming Soon</span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}

function Graph() {
  return (
    <div className="h-24 w-64 rounded-full border-2 border-black mx-4 p-1 flex items-center">
      <div className="bg-black w-[50%] h-full rounded-full flex items-center justify-center">
        <IconArrowRight className="text-slate-200 size-20" strokeWidth={1} />
      </div>

      {/* <svg height="210" width="400" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 10 65 Q 140 75 170 55 T 220 10"
          className="stroke-black"
          style={{
            fill: "none",
            strokeWidth: 3,
          }}
        />
        <g strokeWidth="3" className="relative flex size-3">
          {/* <circle
            id="pointA"
            cx="220"
            cy="10"
            r="2"
            className="absolute inline-flex h-max w-max animate-ping rounded-full opacity-75 stroke-lime-400"
          /> 
          <circle
            id="pointB"
            cx="220"
            cy="10"
            r="2"
            className="relative inline-flex size-3 rounded-full stroke-lime-400"
          />
        </g>
      </svg> */}
    </div>
  );
}
