import { authors, genres } from "../../../mock/prismaMockData";

type SearchFilterProps = {
  query?: string;
};

export function SearchFilter({ query = "" }: SearchFilterProps) {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredGenres = genres.filter((genre) =>
    genre.name.toLowerCase().includes(normalizedQuery),
  );
  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(normalizedQuery),
  );

  return (
    <section>
      <div className="flex flex-col gap-5 justify-center p-3">
        <div className="flex flex-col gap-3">
          <h2>Genres</h2>

          <div className="grid grid-cols-3 gap-3">
            {filteredGenres.map((genre) => (
              <div
                className="rounded-full p-1 pl-3"
                style={{
                  backgroundColor: "var(--border)",
                }}
                key={genre.id}
              >
                {genre.name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2>Authors</h2>

          <div className="grid grid-cols-3 gap-3">
            {filteredAuthors.map((author) => (
              <div
                className="rounded-full p-1 pl-3"
                style={{
                  backgroundColor: "var(--border)",
                }}
                key={author.id}
              >
                {author.name.substring(0, 7).concat("...")}
              </div>
            ))}
          </div>
        </div>
        {filteredGenres.length === 0 && filteredAuthors.length === 0 && (
          <p className="text-sm opacity-70" style={{ color: "var(--text)" }}>
            No matching filters found.
          </p>
        )}
      </div>
    </section>
  );
}
