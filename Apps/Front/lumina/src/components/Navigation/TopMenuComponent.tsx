import { useState, useEffect, type ReactNode } from "react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { useTopMenuTitle } from "../../shared/TopMenuTitleContext";
import { Add } from "@mui/icons-material";

type TopMenuComponentProps = {
  mangaTitle?: string;
  cutomComp?: ReactNode;
  backOnClik?: () => void;
  alwaysShowCustomComp?: boolean;
  showTitle?: boolean;
  showDefaultButton?: boolean;
};

export function TopMenuComponent({
  mangaTitle,
  cutomComp,
  backOnClik,
  alwaysShowCustomComp,
  showTitle = true,
  showDefaultButton = true,
}: TopMenuComponentProps) {
  const [showFloatingTitle, setShowFloatingTitle] = useState(false);
  const { titleElement, titleText, customComp: contextCustomComp, alwaysShowTopMenu, showDefaultButton: contextShowDefaultButton } = useTopMenuTitle();
  const effectiveTitle = mangaTitle ?? titleText;
  const resolvedCustomComp = cutomComp ?? contextCustomComp;
  const shouldAlwaysShow = alwaysShowCustomComp || alwaysShowTopMenu;
  const resolvedShowDefaultButton = contextShowDefaultButton && showDefaultButton;
  const shouldShowBar = shouldAlwaysShow || (showFloatingTitle && (effectiveTitle || resolvedCustomComp || resolvedShowDefaultButton));

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
      <div
        className={[
          "fixed left-0 top-0 z-50 p-10",
          shouldAlwaysShow
            ? "w-screen"
            : showFloatingTitle && effectiveTitle
              ? "w-screen"
              : "w-auto",
        ].join(" ")}  
      >
        <div className="flex items-center justify-between  bg-(--border) p-1 backdrop-blur-md rounded-full" style={{ borderColor: "var(--border)", borderWidth: "1px" }}>
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
              shouldShowBar ? "flex" : "hidden",
            ].join(" ")}
          >
            <div className="flex flex-row  items-center gap-2 p-1">
              {showTitle && effectiveTitle ? (
                <div
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: "var(--backdrop)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {effectiveTitle
                    .slice(0, 14)
                    .concat(effectiveTitle.length > 15 ? "..." : "")}
                </div>
              ) : null}
              {resolvedCustomComp ? (
                <div
                  className={[
                    shouldAlwaysShow ? "flex" : showFloatingTitle ? "flex" : "hidden",
                  ].join(" ")}
                >
                  {resolvedCustomComp}
                </div>
              ) : null}
              {resolvedShowDefaultButton ? (
                <div>
                  <button className="bg-(--border) p-2 pl-3 pr-3 rounded-full">
                    <div className="flex items-center gap-2.5">
                      <Add className="rounded-full border-2 border-(--border) bg-(--border)" />
                      <p>Add to list</p>
                    </div>
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
