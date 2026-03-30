"use client";

import logoLight from "@/public/assets/neon-anthem/neon-anthem-logo-light.svg";
import {
  IconArrowDown,
  IconArrowRight,
  IconAspectRatio,
  IconBrowser,
  IconBuilding,
  IconCode,
  IconUser,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { JSX, useState } from "react";
import { Button } from "./button";
import {
  Nav,
  NavBar,
  NavBrand,
  NavContent,
  NavCTA,
  NavGroup,
} from "./nav-items";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

export default function NavigationBar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  return (
    <motion.nav className="flex items-center justify-center shadow mx-auto">
      <Nav>
        <NavBar>
          <NavBrand>
            <Image
              src={logoLight}
              width={100}
              height={100}
              className="size-10"
              alt="Neon anthem logo, bold and wide Capital N with a Polestar on the top right of the capital N"
            />
          </NavBrand>

          <NavGroup className="hidden sm:block">
            <Navigation />
            <NavGroup className="gap-2">
              <Button className={"capitalize"} variant={"ghost"} size={"sm"}>
                See our work
                <IconArrowDown />
              </Button>
              <NavCTA>
                Free 3-min Structural Audit
                <IconArrowRight />
              </NavCTA>
            </NavGroup>
          </NavGroup>
        </NavBar>
      </Nav>
    </motion.nav>
  );
}

interface INavItems {
  label: string;
  href?: string;
  options?: INavItemOptions[];
}

interface INavItemOptions {
  label: string;
  description?: string;
  imageUrl?: string;
  icon?: JSX.Element;
  href: string;
}

const navItems: INavItems[] = [
  {
    label: "Services",
    options: [
      {
        label: "Landing Page",
        description:
          "High Converting Landing pages to turn visitors into customers",
        href: "/services/landing-page",
        icon: <IconBrowser />,
      },
      {
        label: "Custom Solutions",
        description:
          "Build or revamp your existing Saas or solution for future market positioning",
        href: "/services/swd",
        icon: <IconCode />,
      },
      {
        label: "Conversion Strategy",
        description:
          "A Full-Brief on Product market fit, Target audience, Scope of work and more...",
        href: "/services/market-consultation",
        icon: <IconAspectRatio />, // todo: Update the icon
      },
    ],
  },
  {
    label: "Industries",
    options: [
      {
        label: "Startups",
        href: "/industries/startups",
        icon: <IconUser />,
        description:
          "We help you with tight deadlines, product market fit, UX Analytics and more...",
      },
      {
        label: "Legacy B2B",
        description:
          "Integrate AI Agents, Capture new markets, Scalable architecture and more...",
        href: "/industries/legacy-b2b",
        icon: <IconBuilding />,
      },
    ],
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
];

function Navigation() {
  return (
    <NavContent>
      <NavigationMenu>
        <NavigationMenuList>
          {navItems?.map((item) => {
            if (item?.options) {
              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-180 grid grid-cols-2 grid-flow-row">
                      {item?.options?.map((opt) => {
                        return (
                          <NavigationMenuLink
                            key={opt.label}
                            className={"cursor-default"}
                          >
                            <div className="flex gap-4 items-start">
                              {/* Icon */}
                              <div className="*:size-6! *:text-white outline-4 outline-slate-100 bg-conic from-slate-600 via-slate-800 to-slate-600 size-10! min-w-10! rounded-md flex items-center justify-center">
                                {opt.icon}
                              </div>
                              {/* End Icon */}
                              <div className="flex flex-col">
                                <h4 className="text-2xl font-medium">
                                  {opt.label}
                                </h4>
                                <p className="text-xs font-medium text-accent-foreground/70">
                                  {opt.description}
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            }

            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink>{item.label}</NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </NavContent>
  );
}
