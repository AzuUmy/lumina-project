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
          <div>
            <div>
              <h1 ref={titleBlockRef}>{volume.title}</h1>
            </div>
            <div className="grid grid-cols-4   gap-2 place-items-center p-5">
              {!chapter || chapter.length === 0 ? (
                <div>No Chapters Founded</div>
              ) : (
                chapter.map((c) => (
                  <div key={c.id}>
                    <div className="bg-(--border) p-3 h-36 w-24 " />
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
