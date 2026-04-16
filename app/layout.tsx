import { Toaster } from "@/components/ui/sonner";
import { geistMono, geistSans, inter, syneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neon Anthem | Home Page",
  description:
    "Your partner for strategic ad-spend funnel, turn website visitors to paying customers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        syneFont.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="select-none">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
