import { useState, useEffect, useRef } from "react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

type TopMenuComponentProps = {
  mangaTitle?: string;
  backOnClik?: () => void;
};

export function TopMenuComponent({
  mangaTitle,
  backOnClik,
}: TopMenuComponentProps) {
  const [showFloatingTitle, setShowFloatingTitle] = useState(false);
  const titleBlockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!titleBlockRef.current) {
        setShowFloatingTitle(false);
        return;
      }

      const rect = titleBlockRef.current.getBoundingClientRect();
      setShowFloatingTitle(rect.bottom <= 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="flex gap-5">
      <div className="fixed left-10 top-5  z-50">
        <button 
          type="button"
          onClick={() => {
            if (backOnClik) {
              backOnClik();
              return;
            }
            window.history.back();
          }}
          className=" top-0 left-10 mt-10 p-3 rounded-full flex justify-center backdrop-blur-md"
          style={{
            backgroundColor: "var(--backdrop)",
            border: "1px solid var(--border)",
          }}
          aria-label="Go back"
        >
          <ArrowBackIosNewRounded />
        </button>
        <div
          className={[
            "fixed left-34 top-11.5",
            showFloatingTitle && mangaTitle
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none",
          ].join(" ")}
        >
          <div className="flex flex-row items-center gap-2">
            <div
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                backgroundColor: "var(--backdrop)",
                border: "1px solid var(--border)",
              }}
            >
              {mangaTitle}
            </div>
            <div>
              <button className="bg-(--border) p-2 pl-3 pr-3 rounded-full">
                Add to list
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
