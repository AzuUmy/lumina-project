import { useCallback, useEffect } from "react";
import { volumes, chapters } from "../../../mock/prismaMockData";
import { useTopMenuTitle } from "../../shared/TopMenuTitleContext";

type volumeProps = {
  volumeId?: string;
};

export function VolumeComponent({ volumeId }: volumeProps) {
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
            <div className="grid grid-cols-4 place-items-center p-2 gap-2">
              {!chapter || chapter.length === 0 ? (
                <div>No Chapters Founded</div>
              ) : (
                chapter.map((c) => (
                  <div key={c.id} className="flex flex-col items-center gap-1">
                    <div className="bg-(--border) p-3 h-30 w-20  " />
                    <span>{c.title}</span>
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
