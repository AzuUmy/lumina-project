import type { MockPage } from "../../../mock/prismaMockData";


export type MangaReaderNavComponentProps = {
    pagesInfo:  MockPage[];
};

export function MangaReaderNavComponent({pagesInfo}: MangaReaderNavComponentProps) {
  return (
    <div>
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
}
