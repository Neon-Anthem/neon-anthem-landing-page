"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

function CardOutlineExtend({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWidth(ref?.current?.clientWidth ?? 0);
  }, [ref]);

  return (
    <div className={cn("relative", className)} ref={ref}>
      <div>{children}</div>
      <div
        className=""
        style={
          {
            "--y-line": "20%",
            "--x-line": width > 600 ? "20%" : "20px",
            "--from-color": "var(--foreground)",
            "--to-color": "var(--border)",
          } as React.CSSProperties
        }
      >
        {/*  */}
        <div className="z-10 absolute w-(--x-line) h-px -top-px right-full -bg-linear-90 from-(--from-color) to-(--to-color)"></div>
        <div className="z-10 absolute w-(--x-line) h-px -bottom-px right-full -bg-linear-90 from-(--from-color) to-(--to-color)"></div>
        {/*  */}
        <div className="z-10 absolute w-px h-(--y-line) top-full -right-px bg-linear-180 from-(--from-color) to-(--to-color)"></div>
        <div className="z-10 absolute w-px h-(--y-line) top-full -left-px bg-linear-180 from-(--from-color) to-(--to-color)"></div>
        {/*  */}
        <div className="z-10 absolute w-(--x-line) h-px -top-px left-full bg-linear-90 from-(--from-color) to-(--to-color)"></div>
        <div className="z-10 absolute w-(--x-line) h-px -bottom-px left-full bg-linear-90 from-(--from-color) to-(--to-color)"></div>
        {/*  */}
        <div className="z-10 absolute w-px h-(--y-line) bottom-full -right-px bg-linear-0 from-(--from-color) to-(--to-color)"></div>
        <div className="z-10 absolute w-px h-(--y-line) bottom-full -left-px bg-linear-0 from-(--from-color) to-(--to-color)"></div>
        {/*  */}
      </div>
    </div>
  );
}

export { CardOutlineExtend };
