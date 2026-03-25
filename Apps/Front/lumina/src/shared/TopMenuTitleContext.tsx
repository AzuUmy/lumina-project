import { createContext, useContext } from "react";
import type { ReactNode } from "react";

type TopMenuTitleContextValue = {
  titleElement: HTMLDivElement | null;
  setTitleElement: (element: HTMLDivElement | null) => void;
  titleText: string;
  setTitleText: (title: string) => void;
  customComp: ReactNode | null;
  setCustomComp: (comp: ReactNode | null) => void;
  alwaysShowTopMenu: boolean;
  setAlwaysShowTopMenu: (value: boolean) => void;
  showDefaultButton: boolean;
  setShowDefaultButton: (value: boolean) => void;
};

const TopMenuTitleContext = createContext<TopMenuTitleContextValue | null>(null);

export function useTopMenuTitle() {
  const ctx = useContext(TopMenuTitleContext);
  if (!ctx) {
    throw new Error("useTopMenuTitle must be used within TopMenuTitleProvider");
  }
  return ctx;
}

export function TopMenuTitleProvider({
  titleElement,
  setTitleElement,
  titleText,
  setTitleText,
  customComp,
  setCustomComp,
  alwaysShowTopMenu,
  setAlwaysShowTopMenu,
  showDefaultButton,
  setShowDefaultButton,
  children,
}: {
  titleElement: HTMLDivElement | null;
  setTitleElement: (element: HTMLDivElement | null) => void;
  titleText: string;
  setTitleText: (title: string) => void;
  customComp: ReactNode | null;
  setCustomComp: (comp: ReactNode | null) => void;
  alwaysShowTopMenu: boolean;
  setAlwaysShowTopMenu: (value: boolean) => void;
  showDefaultButton: boolean;
  setShowDefaultButton: (value: boolean) => void;
  children: ReactNode;
}) {
  return (
    <TopMenuTitleContext.Provider
      value={{ titleElement, setTitleElement, titleText, setTitleText, customComp, setCustomComp, alwaysShowTopMenu, setAlwaysShowTopMenu, showDefaultButton, setShowDefaultButton }}
    >
      {children}
    </TopMenuTitleContext.Provider>
  );
}
