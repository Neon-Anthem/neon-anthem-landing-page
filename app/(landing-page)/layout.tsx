import Footer from "@/components/pages/footer";
import { Cursor } from "@/components/ui/cursor";
import NavigationBar from "@/components/ui/nav-bar";
import { NavbarProvider } from "@/components/ui/nav-items";
import LenisProvider from "@/providers/lenis.provider";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <LenisProvider>
      <Cursor />
      <NavbarProvider
        initState={{
          isDark: false,
          isOpen: false,
          items: [],
          activeChild: undefined,
        }}
      >
        <NavigationBar />
        <main className="**:data-[block=contain]:container **:data-[block=contain]:mx-auto">
          {children}
        </main>
        <Footer />
      </NavbarProvider>
    </LenisProvider>
  );
}
