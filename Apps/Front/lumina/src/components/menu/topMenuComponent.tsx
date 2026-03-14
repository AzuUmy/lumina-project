import { useState, useEffect } from "react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { useTopMenuTitle } from "../../shared/TopMenuTitleContext";

type TopMenuComponentProps = {
  mangaTitle?: string;
  backOnClik?: () => void;
};

export function TopMenuComponent({
  mangaTitle,
  backOnClik,
}: TopMenuComponentProps) {
  const [showFloatingTitle, setShowFloatingTitle] = useState(false);
  const { titleElement, titleText } = useTopMenuTitle();
  const effectiveTitle = mangaTitle ?? titleText;

  useEffect(() => {
    const onScroll = () => {
      if (!titleElement) {
        setShowFloatingTitle(false);
        return;
      }

      const rect = titleElement.getBoundingClientRect();
      setShowFloatingTitle(rect.bottom <= 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [titleElement]);

  return (
    <div className="flex">
      <div className="fixed left-0 top-0 z-50 w-screen p-10 ">
        <div className="flex items-center justify-between bg-white/10 p-1 backdrop-blur-md rounded-full">
          <button
            type="button"
            onClick={() => {
              if (backOnClik) {
                backOnClik();
                return;
              }
              window.history.back();
            }}
            className=" top-0 left-10 p-3 rounded-full flex justify-center backdrop-blur-md"
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
              showFloatingTitle && effectiveTitle
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none",
            ].join(" ")}
          >
            <div className="flex flex-row  items-center gap-2 p-1">
              <div
                className="rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  backgroundColor: "var(--backdrop)",
                  border: "1px solid var(--border)",
                }}
              >
                {effectiveTitle
                  .slice(0, 19)
                  .concat(effectiveTitle.length > 20 ? "..." : "")}
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
    </div>
  );
}
