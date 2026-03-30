import { IconArrowRight } from "@tabler/icons-react";

export default function FinalCTA() {
  return (
    <section className="bg-black text-background">
      <div className="py-24 px-4 md:px-0" data-block="contain">
        <Content />
        <CTA />
      </div>
    </section>
  );
}

function Content() {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-7xl font-geist font-semibold capitalize">
        {/* <span className="text-8xl font-bold">3x</span> . */}
        Your page is losing deals right now.
      </h2>
      <p className="text-sm md:text-base mt-4 text-accent/80">
        The audit takes 30 seconds to request. We&apos;ll tell you exactly
        what&apos;s broken - Free, no pitch, no pressure.
      </p>
    </div>
  );
}

function CTA() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 content-center text-center mt-12 md:mt-24 [&>div]:space-y-2 **:[&>p]:text-xs **:[&>p]:w-[80%] **:[&>p]:mx-auto space-y-4 md:space-y-0">
      {/* Primary CTA */}
      <div className="">
        <button className="bg-background text-foreground px-3 py-1 rounded-full text-sm font-semibold capitalize flex items-center gap-2 w-max mx-auto">
          Get our free structural audit
          <IconArrowRight className="size-4" />
        </button>
        <p className="text-accent/80">
          24-hour turnaround. No agency fluff. Just what&apos;s broken and how
          to fix it.
        </p>
      </div>
      <div className="">
        <button className=" text-accent outline outline-accent/60 px-3 py-1 rounded-full text-sm font-semibold capitalize flex items-center gap-2 w-max mx-auto">
          Ready to Build? Book a discovery call
          <IconArrowRight className="size-4" />
        </button>
        <p className="text-accent/80">
          Not a redesign. A high-converting funnel. Convert visitors to paying
          customers.
        </p>
      </div>
      {/* End Primary CTA */}
    </div>
  );
}
