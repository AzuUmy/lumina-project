import { createContext, useContext } from "react";
import type { ReactNode } from "react";

type TopMenuTitleContextValue = {
  titleElement: HTMLDivElement | null;
  setTitleElement: (element: HTMLDivElement | null) => void;
  titleText: string;
  setTitleText: (title: string) => void;
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
  children,
}: {
  titleElement: HTMLDivElement | null;
  setTitleElement: (element: HTMLDivElement | null) => void;
  titleText: string;
  setTitleText: (title: string) => void;
  children: ReactNode;
}) {
  return (
    <TopMenuTitleContext.Provider
      value={{ titleElement, setTitleElement, titleText, setTitleText }}
    >
      {children}
    </TopMenuTitleContext.Provider>
  );
}
