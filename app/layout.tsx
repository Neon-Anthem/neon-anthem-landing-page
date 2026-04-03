import Footer from "@/components/pages/footer";
import NavigationBar from "@/components/ui/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import LenisProvider from "@/providers/lenis.provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syneFont = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

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
        <NavigationBar />
        <LenisProvider>
          <main className="**:data-[block=contain]:container **:data-[block=contain]:mx-auto">
            {children}
            <Footer />
          </main>
        </LenisProvider>
        <Toaster />
      </body>
    </html>
  );
}
