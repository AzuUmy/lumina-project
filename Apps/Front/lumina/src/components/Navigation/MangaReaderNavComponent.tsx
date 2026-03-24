import type { MockPage } from "../../../mock/prismaMockData";

export type MangaReaderNavComponentProps = {
  pagesInfo: MockPage[];
};

export function MangaReaderNavComponent({
  pagesInfo,
}: MangaReaderNavComponentProps) {
  return (
    <div className="flex flex-nowrap p-5 gap-2.5 bg-(--border) rounded-full backdrop-blur-lg overflow-x-auto w-full max-w-full min-w-0">
      {pagesInfo.map((p) => (
        <div key={p.id} className="shrink-0">
          <img
            className="h-13 w-10 rounded object-cover bg-white"
            src={p.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}
