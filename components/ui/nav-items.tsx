import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

function Nav({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return <div className={cn("z-100", className)}>{children}</div>;
}

function NavBar({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={cn(
        "px-8 flex items-center container backdrop-blur-2xl mx-auto justify-between rounded-full bg-navbar fixed top-2 left-0 right-0 h-12",
        className,
      )}
    >
      {children}
    </div>
  );
}

function NavGroup({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-8", className)}>
      {children}
    </div>
  );
}

function NavBrand({ children }: PropsWithChildren) {
  return <div className="*:h-8 bg-white">{children}</div>;
}

function NavContent({ children }: PropsWithChildren) {
  return <ul className="flex items-center justify-center gap-6">{children}</ul>;
}

function NavItem({ children }: PropsWithChildren) {
  return <li className="font-medium text-sm text-navbar-item">{children}</li>;
}

function NavItemSubTrigger({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return <div className={cn("", className)}>{children}</div>;
}

function NavItemSub({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return <div className={cn("", className)}>{children}</div>;
}

function NavCTA({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <button
      className={cn(
        "px-3 py-1.5 rounded-full bg-primary text-navbar text-sm font-medium flex items-center gap-2 [&>svg]:size-4",
        className,
      )}
    >
      {children}
    </button>
  );
}

export { Nav, NavBar, NavBrand, NavContent, NavCTA, NavGroup, NavItem };
