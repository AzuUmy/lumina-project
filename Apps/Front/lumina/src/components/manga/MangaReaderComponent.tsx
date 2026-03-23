import { useEffect, useMemo, useState } from "react";
import { pages } from "../../../mock/prismaMockData";

export type MangaReaderComponentProps = {
  chapterId?: string;
};

export function MangaReaderComponent({ chapterId }: MangaReaderComponentProps) {
  const chapterPages = useMemo(
    () => pages.filter((p) => p.chapterId === chapterId),
    [chapterId],
  );
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(0);
  }, [chapterId]);

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
  const visiblePages = chapterPages.slice(clampedIndex, clampedIndex + 4);

  return (
    <section className="flex flex-col items-center gap-4 mt-30">
      <div className="relative h-150 w-105">
        {visiblePages.map((p, index) => {
          const offset = index * 12;
          const zIndex = visiblePages.length - index;

          return (
            <img
              key={p.id}
              className="absolute top-0 left-0 h-full w-full rounded shadow-lg object-cover transition-transform"
              style={{
                transform: `translateX(${offset}px)`,
                zIndex,
              }}
              src={p.imageUrl}
              alt={`Page ${p.pageNumber}`}
            />
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <button
          className="rounded border px-3 py-1"
          onClick={() => setPageIndex((i) => Math.max(i - 1, 0))}
          disabled={clampedIndex === 0}
        >
          Prev
        </button>
        <div>
          {chapterPages[clampedIndex]?.pageNumber ?? 1} /{
            chapterPages.length
          }
        </div>
        <button
          className="rounded border px-3 py-1"
          onClick={() =>
            setPageIndex((i) => Math.min(i + 1, chapterPages.length - 1))
          }
          disabled={clampedIndex >= chapterPages.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}
