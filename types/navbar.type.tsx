export interface INavbarItems {
  id: string;
  // For position on Navigation Bar
  position: string;
  // Visible only on specified paths
  visibilityPaths?: string[];

  label: string;
  href?: string;
  child?: INavbarContent[];
}

interface INavbarContentBase {
  position: string;
  span: 1 | 2 | 3;
}

export type INavbarContent =
  | (INavbarContentBase & INavbarContentList)
  | (INavbarContentBase & INavbarContentImage);

export interface INavbarContentList {
  contentType: "list";
  heading: string;
  children: {
    label: string;
    href: string;
    description?: string;
    triggerImage?: Omit<INavbarContentImage, "contentType">;
  }[];
  banner?: {
    title: string;
    subheading: string;
    cta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  cta?: { label: string; href?: string };
}

export interface INavbarContentImage {
  contentType: "image";
  imageSrc: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: 75 | 100;
  className?: string;
}
