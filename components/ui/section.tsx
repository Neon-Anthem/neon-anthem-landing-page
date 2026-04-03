import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

function Section({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return <section className={cn("", className)}>{children}</section>;
}

export { Section };
