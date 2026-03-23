import { pages } from "../../../mock/prismaMockData";


export type MangaReaderComponentProps = {
  chapterId?: string;
};



export function MangaReaderComponent({ chapterId  }: 
  MangaReaderComponentProps ) {


    const page = pages.filter((p) => p.chapterId === chapterId);


  return (
    <section>
      <div>
        {!page || page.length === 0 ? (
          <div>No Pages Found</div>
        ) : (
          page.map((p) => (
            <div key={p.id}>
              <img src={p.volumeId} alt={"image not founded"} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}