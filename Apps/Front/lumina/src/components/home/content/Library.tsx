import { useNavigate } from "@tanstack/react-router";
import { mangas } from "../../../../mock/prismaMockData";

type LibraryProps = {
  query?: string;
};

export function Library({ query = "" }: LibraryProps) {
  const navigate = useNavigate();

  const normalizedQuery = query.trim().toLowerCase();
  const filteredMangas = mangas.filter((manga) => {
    if (!normalizedQuery) return true;
    const haystack = `${manga.title} ${manga.description ?? ""} ${manga.chapters ?? ""}`;
    return haystack.toLowerCase().includes(normalizedQuery);
  });

  return (
    <section>
      <div className="grid w-full show-mobile-only">
        <div className="grid grid-cols-3 gap-1">
          {filteredMangas.map((manga) => (
            <div>
              <div className="relative w-0 h-0 p-0">
                <div className="absolute top-0 left-2 bg-blue-500 font-bold text-sm p-1 rounded-full">
                  <h4 className="text-white">{manga.chapters}</h4>
                </div>
              </div>
              <div
                key={manga.id}
                onClick={() => navigate({to: "/Manga", search: {id: manga.id}})}
                className="flex items-center flex-col gap-2 mb-2"
              >
                <div
                  className="h-30 w-20 rounded-md"
                  style={{
                    backgroundColor: "var(--border)",
                  }}
                />
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
        {filteredMangas.length === 0 && (
          <p
            className="text-sm opacity-70 p-2"
            style={{ color: "var(--text)" }}
          >
            No manga matches your search.
          </p>
        )}
      </div>
    </section>
  );
}
