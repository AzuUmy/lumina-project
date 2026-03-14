import { volumes, chapters } from "../../../mock/prismaMockData";

type volumeProps = {
  volumeId?: string;
};

export function VolumeComponent({ volumeId }: volumeProps) {
  const volume = volumes.find((v) => v.id === volumeId);
  const chapter = chapters.filter((c) => c.volumeId === volumeId);

  return (
    <section>
      <div>
        {!volume || volume.id === undefined ? (
          <div>Volume not Founded</div>
        ) : (
          <div>
            <div>
              <h1>{volume.title}</h1>
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
