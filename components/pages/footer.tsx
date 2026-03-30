import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { JSX } from "react";

const socials: {
  label: string;
  icon: JSX.Element;
  href: string;
}[] = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/company/neon-anthem/",
    icon: <IconBrandLinkedin />,
  },
  {
    label: "Instagram",
    href: "",
    icon: <IconBrandInstagram />,
  },
  {
    label: "X",
    href: "https://x.com/neonanthem_?s=21",
    icon: <IconBrandX />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-background border-t border-accent-foreground/10 px-4 sm:px-0">
      {/* <LogoText /> */}
      <div className="py-4 flex items-center justify-between container mx-auto border-t border-border/40">
        <div className="container ">
          <p className="text-xs sm:text-sm">
            © Neon Anthem {new Date().getFullYear()}.
          </p>
        </div>
        <div className="flex items-center gap-3 *:[&>svg]:size-5">
          {socials?.map((social) => {
            return (
              <Link key={social.label} href={social.href} target="_blank">
                {social.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

function LogoText() {
  return (
    <div className="w-full border-t">
      <h2 className="text-3xl sm:text-6xl md:text-9xl font-semibold leading-tight text-center">
        NEON ANTHEM
      </h2>
    </div>
  );
}
