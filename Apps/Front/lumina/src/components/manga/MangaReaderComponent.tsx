import { useCallback, useEffect, useMemo, useState } from "react";
import { pages } from "../../../mock/prismaMockData";
import { MangaReaderNavComponent } from "../Navigation/MangaReaderNavComponent";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { useTopMenuTitle } from "../../shared/TopMenuTitleContext";
import { NavBetwemChapters } from "../Navigation/NavBetwemChapters";

export type MangaReaderComponentProps = {
  chapterId?: string;
};

export function MangaReaderComponent({ chapterId }: MangaReaderComponentProps) {
  const { setTitleElement, setTitleText, setCustomComp, setAlwaysShowTopMenu, setShowDefaultButton } = useTopMenuTitle();

  const titleBlockRef = useCallback(
    (node: HTMLDivElement | null) => {
      setTitleElement(node);
    },
    [setTitleElement],
  );

  const chapterPages = useMemo(
    () => pages.filter((p) => p.chapterId === chapterId),
    [chapterId],
  );
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
  }, [chapterId]);

  useEffect(() => {
    setAlwaysShowTopMenu(true);
    setShowDefaultButton(false);
    setTitleText("");
    setCustomComp(<NavBetwemChapters />);
    return () => {
      setAlwaysShowTopMenu(false);
      setShowDefaultButton(true);
      setTitleText("");
      setCustomComp(null);
    };
  }, [setAlwaysShowTopMenu, setShowDefaultButton, setTitleText, setCustomComp]);

  if (!chapterPages || chapterPages.length === 0) {
    return (
      <section>
        <div>No Pages Found</div>
      </section>
    );
  }

  const clampedIndex = Math.min(
    pageIndex,
    Math.max(chapterPages.length - 1, 0),
  );
  const visiblePages = chapterPages.slice(clampedIndex, clampedIndex + 5);

  const maxStack = 5;
  const visibleCount = Math.min(maxStack, chapterPages.length - clampedIndex);
  const stackOffset = (visibleCount - 1) * 12;

  return (
    <section className="flex flex-col items-center gap-4 mt-35 overflow-x-hidden">
      <div ref={titleBlockRef} className="font-bold" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-100 p-4.5 ml-2">
        <MangaReaderNavComponent pagesInfo={chapterPages} />
      </div>
      <div className="relative h-150 w-105 ml-4 bg-white">
        {visiblePages.map((p, index) => {
          const offset = index * 12;
          const zIndex = visiblePages.length - index;

          return (
            <img
              key={p.id}
              className="absolute top-0 left-0 h-full w-full rounded shadow-lg  object-cover transition-transform"
              style={{
                transform: `translateX(${offset}px)`,
                zIndex,
              }}
              src={p.imageUrl}
            />
          );
        })}

        <div
          className="bg-black relative top-2.5 p-1 w-8 h-8 text-center rounded-full font-bold text-white"
          style={{ left: `${stackOffset + 7}px` }}
        >
          <p>{chapterPages[clampedIndex]?.pageNumber ?? 1}</p>
        </div>
      </div>
      <div className="absolute left-1/2 top-[45.5%] -translate-x-1/2 translate-y-3/5 flex items-center justify-between w-full p-3 pl-20 pr-12 gap-3 z-50">
        <button
          className="top-0 left-10 p-3 rounded-full flex justify-center backdrop-blur-md text-black"
          style={{
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
            marginLeft: `${stackOffset - 8}px`,
          }}
          onClick={() =>
            setPageIndex((i) => Math.min(i + 1, chapterPages.length - 1))
          }
          disabled={clampedIndex >= chapterPages.length - 1}
        >
          <ArrowBackIosNewRounded />
        </button>
        <button
          className=" top-0 left-10 p-3 rounded-full flex justify-center backdrop-blur-md text-black"
          style={{
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
          }}
          onClick={() => setPageIndex((i) => Math.max(i - 1, 0))}
          disabled={clampedIndex === 0}
        >
          <ArrowBackIosNewRounded className="rotate-180" />
        </button>
      </div>
    </section>
  );
}
