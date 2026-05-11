"use client";

import { INavbarItems } from "@/types/navbar.type";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { create, useStore } from "zustand";

export interface INavbarState {
  isDark: boolean;
  isOpen: boolean;
  activeChild: string | undefined;
  items: INavbarItems[];
}

interface INavbarActions {
  setIsDark: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
  setActiveChild: (value: string | undefined) => void;
}

type NavbarState = INavbarState & INavbarActions;

type NavbarStore = ReturnType<typeof createNavbarStore>;

const createNavbarStore = (init: INavbarState) =>
  create<NavbarState>()((set) => ({
    ...init,
    setIsDark: (value) => set({ isDark: value }),
    setIsOpen: (value) => set({ isOpen: value }),
    setActiveChild: (value) => set({ activeChild: value }),
  }));

const NavbarContext = createContext<NavbarStore | undefined>(undefined);

export function NavbarStoreProvider({
  init,
  children,
}: { init: INavbarState } & PropsWithChildren) {
  const [store] = useState(() => createNavbarStore(init));

  return (
    <NavbarContext.Provider value={store}>{children}</NavbarContext.Provider>
  );
}

export const useNavbarStore = <T,>(selector: (state: NavbarState) => T): T => {
  const store = useContext(NavbarContext);

  if (!store) {
    throw new Error("useNavbarStore must be used within a NavbarStoreProvider");
  }

  return useStore(store, selector);
};
