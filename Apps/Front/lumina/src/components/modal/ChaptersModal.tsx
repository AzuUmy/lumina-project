import { chapters } from "../../../mock/prismaMockData";

export type ChaptersModalProps = {
  volumeId?: string;
  currentChapterId?: string;
};

export function ChaptersModal({
  volumeId,
  currentChapterId,
}: ChaptersModalProps) {
  const allChapter = chapters.filter((c) => c.volumeId === volumeId);

  return (
    <div className="p-5 ">
      <div className="flex items-center gap-3"></div>
      <div className="flex flex-col gap-3 p-2">
        {allChapter.map((c) => (
          <div key={c.id} className=" p-1 rounded-lg hover:bg-(--border) cursor-pointer" style={{backgroundColor: c.id === currentChapterId ? "var(--border)" : "transparent"}}>
            <span className={"ml-2" + (currentChapterId === c.id ? "font-bold text-blue-600 ml-2" : "")}>
              {c.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
