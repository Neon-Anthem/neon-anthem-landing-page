import { INavbarItems } from "@/types/navbar.type";

const NAVMENUS: INavbarItems[] = [
  {
    id: "services",
    position: "a",
    label: "Services",
    child: [
      {
        contentType: "list",
        position: "a",
        span: 1,
        heading: "Services we offer",
        children: [
          {
            label: "High-Converting Landing Page",
            description: "Pages that convert for more demos",
            href: "/services/landing-page",
          },
          {
            label: "B2B Website Revamp",
            href: "/services/website-revamp",
            description:
              "Build or revamp your existing Saas or solution for future market positioning",
          },
          {
            label: "Custom Solutions",
            href: "/services/custom-enterprise-solutions",
            description:
              "Custom software solutions to streamline & optimize your organization",
          },
        ],
        banner: {
          title: "Conversion Strategy",
          subheading: "Target your market with metric & data.",
          cta: { label: "Get a Free Audit", href: "/contact" },
          secondaryCta: {
            label: "Know more",
            href: "/services/conversion-strategy",
          },
        },
      },
      {
        contentType: "list",
        heading: "Go To Market Solutions",
        position: "b",
        span: 1,
        cta: { label: "Vew GTM Solutions", href: "/services/go-to-market" },
        children: [
          {
            label: "Conversion Rate Optimization",
            href: "/services/go-to-market/conversion-rate-optimization",
          },
          {
            label: "Google Business Profile",
            href: "/services/go-to-market/google-business-profile",
          },
          {
            label: "SEO • AEO",
            href: "/services/go-to-market/seo-aeo",
          },
          {
            label: "Social Strategy",
            href: "/services/go-to-market/social-strategy",
          },
          {
            label: "Market Intelligence Report",
            href: "/services/go-to-market/market-intelligence-report",
          },
        ],
      },
      // Image Content For services
      {
        contentType: "image",
        alt: "",
        imageSrc: "/assets/mocks/CMS-editor.webp",
        position: "c",
        span: 1,
      },
    ],
  },
  {
    id: "solutions",
    position: "b",
    label: "Solutions",
    child: [
      {
        contentType: "list",
        position: "ab",
        span: 1,
        heading: "Custom Solutions",
        children: [
          {
            label: "System Design",
            href: "/solutions/system-design",
          },
          {
            label: "Database Architectures",
            href: "/solutions/database-architectures",
          },
          {
            label: "Workflow Automation",
            href: "/solutions/workflow-automation",
          },
        ],
        banner: {
          title: "Enterprise Softwares",
          subheading:
            "We build you custom solutions based on your requirements",
          cta: { label: "Get a Free Quote", href: "/custom-solutions/contact" },
          secondaryCta: { label: "Know more", href: "/custom-solutions" },
        },
      },
      {
        contentType: "list",
        position: "b",
        span: 1,
        heading: "Apps & Products",
        children: [
          {
            label: "Inventory Management",
            href: "/solutions/inventory-mangement",
          },
          {
            label: "CRM",
            href: "/solutions/crm",
          },
          {
            label: "Field Service",
            href: "/solutions/field-service",
          },
          {
            label: "Custom E-Commerce Store",
            href: "/solutions/custom-e-commerce-store",
          },
          {
            label: "Bookings tracking & management",
            href: "/solutions/bookings-tracking-&-management",
          },
        ],
        cta: { label: "Explore Enterprise Solutions" },
      },
      {
        contentType: "image",
        position: "ac",
        span: 1,
        imageSrc: "/assets/mocks/custom-application.webp",
        alt: "",
      },
    ],
  },
  {
    id: "industries",
    position: "c",
    label: "Industries",
    child: [
      {
        contentType: "list",
        position: "a",
        span: 1,
        cta: { label: "Explore Industires", href: "industries" },
        heading: "Landing Page Industries",
        children: [
          {
            label: "SaaS",
            href: "/industries/saas",
            description:
              "We help you with tight deadlines, product market fit, UX Analytics and more...",
          },
          {
            label: "B2B Legacy Enterprise",
            href: "/industries/legacy-b2b",
            description:
              "Integrate AI Agents, Capture new markets, Scalable architecture and more...",
          },
          {
            label: "FinTech",
            description: "Find finance relevant clients",
            href: "industries/fintech",
          },
          {
            label: "Manufacturing",
            description: "Streamline your production with custom solutions",
            href: "/industires/manufacturing",
          },
        ],
      },
      {
        contentType: "list",
        position: "ab",
        span: 1,
        cta: { label: "Explore Industires", href: "industries" },
        heading: "Enterprise Industires",
        children: [
          {
            label: "Manufacturing",
            href: "/industries/manufacturing",
            description:
              "We help you with tight deadlines, product market fit, UX Analytics and more...",
          },
          {
            label: "Assets & Rentals",
            href: "/industries/legacy-b2b",
            description:
              "Integrate AI Agents, Capture new markets, Scalable architecture and more...",
          },
          {
            label: "Service Bookings & Field Operations",
            description: "Find finance relevant clients",
            href: "industries/fintech",
          },
          {
            label: "Manufacturing",
            description: "Streamline your production with custom solutions",
            href: "/industires/manufacturing",
          },
        ],
      },
      {
        contentType: "image",
        imageSrc: "/assets/mocks/custom-application.webp",
        alt: "",
        span: 1,
        position: "b",
      },
    ],
  },
  {
    id: "blogs",
    position: "d",
    label: "Resources",
  },
  {
    id: "work",
    position: "e",
    label: "See our work",
    href: "/work",
  },
];

export default NAVMENUS;
