import { useEffect, useState } from "react";

type ContextProps = {
  showContext: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export function Context({ showContext, onClose, children }: ContextProps) {
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (showContext) {
      setMounted(true);
      setAnimateIn(false);
      const px = setTimeout(() => setAnimateIn(true), 20);
      return () => clearTimeout(px);
    }

    setAnimateIn(false);
    const timeout = setTimeout(() => setMounted(false), 500);
    return () => clearTimeout(timeout);
  }, [showContext]);

  if (!mounted) return null;

  return (
    <div className="relative">
      <div
        onClick={onClose}
        className="fixed inset-0 transition-opacity duration-500 z-10"
        style={{
          backgroundColor: "var(--backdrop)",
          opacity: animateIn ? 1 : 0,
        }}
      />

      <div
        className={`fixed bottom-0 left-0 w-full h-auto rounded-t-3xl z-20 transform transition-transform duration-500 ease-in-out ${
          animateIn ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          backgroundColor: "var(--surface)",
          color: "var(--text)",
          borderTop: "1px solid var(--border)",
          boxShadow: "0 -10px 60px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
