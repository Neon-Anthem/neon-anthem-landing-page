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
      <h2 className="text-4xl md:text-8xl md:w-[80%] md:mx-auto font-geist font-semibold capitalize">
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
    <div className="space-y-8 text-center mt-12 md:mt-24 [&>div]:space-y-2 **:[&>p]:text-xs **:[&>p]:w-[80%] **:[&>p]:mx-auto md:space-y-0">
      {/* Primary CTA */}
      <button className="bg-background text-foreground px-3 py-1 rounded-full text-sm font-semibold capitalize flex items-center gap-2 w-max mx-auto">
        Get our free structural audit
        <IconArrowRight className="size-4" />
      </button>
      <p className="text-accent/80 mt-3">
        24-hour turnaround. No agency fluff. Just what&apos;s broken and how to
        fix it.
      </p>
      {/* End Primary CTA */}
    </div>
  );
}
