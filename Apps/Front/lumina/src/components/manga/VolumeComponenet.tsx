import { useCallback, useEffect, useState } from "react";
import { volumes, chapters } from "../../../mock/prismaMockData";
import { useTopMenuTitle } from "../../shared/TopMenuTitleContext";
import { List, ViewModuleRounded } from "@mui/icons-material";

type volumeProps = {
  volumeId?: string;
};

export function VolumeComponent({ volumeId }: volumeProps) {
  const [listIcon, setListIcon] = useState(false);
  const { setTitleElement, setTitleText } = useTopMenuTitle();
  const titleBlockRef = useCallback(
    (node: HTMLDivElement | null) => {
      setTitleElement(node);
    },
    [setTitleElement],
  );
  const volume = volumes.find((v) => v.id === volumeId);
  const chapter = chapters.filter((c) => c.volumeId === volumeId);

  useEffect(() => {
    setTitleText(volume?.title ?? "");
    return () => {
      setTitleText("");
    };
  }, [setTitleText, volume?.title]);

  return (
    <section>
      <div>
        {!volume || volume.id === undefined ? (
          <div>Volume not Founded</div>
        ) : (
          <div className="mt-25 p-9">
            <div className="flex  items-center gap-6 p-3">
              <div className="p-1 h-20 w-15 bg-(--border)" />

              <div className="flex flex-col">
                <h1 ref={titleBlockRef} className="font-bold">
                  {volume.title}
                </h1>
                <h2>
                  {String(volume.chapterCount).concat(" ").concat("Chapters")}
                </h2>
              </div>
            </div>

            <div className="flex justify-end gap-2 mb-10">
              <div className="relative flex items-center gap-1 p-1 bg-(--border) rounded-lg">
                <div
                  className={[
                    "absolute left-1 top-1 h-8 w-8 rounded-md bg-blue-500 transition-transform duration-200",
                    listIcon ? "translate-x-9" : "translate-x-0",
                  ].join(" ")}
                />
                <button
                  type="button"
                  onClick={() => setListIcon(false)}
                  className="relative z-10 h-8 w-8 flex items-center justify-center rounded-md"
                  aria-pressed={!listIcon}
                  aria-label="List view"
                >
                  <List />
                </button>
                <button
                  type="button"
                  onClick={() => setListIcon(true)}
                  className="relative z-10 h-8 w-8 flex items-center justify-center rounded-md"
                  aria-pressed={listIcon}
                  aria-label="Grid view"
                >
                  <ViewModuleRounded />
                </button>
              </div>
            </div>
            <div
              className={[
                "grid place-items-center p-2 gap-2",
                listIcon ? "grid-cols-1" : "grid-cols-4",
              ].join(" ")}
            >
              {!chapter || chapter.length === 0 ? (
                <div>No Chapters Founded</div>
              ) : (
                chapter.map((c) => (
                  <div key={c.id} className="flex flex-col items-center gap-1">
                    {listIcon ? (
                      <div className="flex items-center gap-3 bg-(--border) w-90 p-1 rounded-lg">
                        <div className="bg-(--border) p-3 h-10 w-10  " />
                        <span>{c.title}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-1">
                        <div className="bg-(--border) p-3 h-30 w-20  " />
                        <span>{c.title}</span>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
