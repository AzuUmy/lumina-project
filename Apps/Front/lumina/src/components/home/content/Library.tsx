import { mangas } from "../../../../mock/prismaMockData";

export function Library() {
  return (
    <section>
      <div className="grid overflow-auto h-[50vh] w-full show-mobile-only">
        <div className="grid grid-cols-3 gap-1">
          {mangas.map((manga) => (
            <div>
              <div className="relative w-0 h-0 p-0">
                <div className="absolute top-0 left-2 bg-blue-500 font-bold text-sm p-1 rounded-full">
                  <h4>{manga.chapters}</h4>
                </div>
              </div>
              <div
                key={manga.id}
                className="flex items-center flex-col gap-2 mb-2"
              >
                <div className="h-30 w-20 rounded-md" style={{
                    backgroundColor: "var(--border)"
                }
                    
                } />
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {manga.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
