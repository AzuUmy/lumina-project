import { authors, genres } from "../../../mock/prismaMockData";

export function SearchFilter() {
  return (
    <section>
      <div className="flex flex-col gap-5 justify-center p-3">
        <div className="flex flex-col gap-3">
          <h2>Genres</h2>

          <div className="grid grid-cols-3 gap-3">
            {genres.map((genre) => (
              <div  className="rounded-full p-1 pl-3" style={{
            backgroundColor: "var(--border)"
          }} key={genre.id}>{genre.name}</div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2>Authors</h2>

          <div className="grid grid-cols-3 gap-3">
            {authors.map((author) => (
              <div className="rounded-full p-1 pl-3" style={{
            backgroundColor: "var(--border)"
          }} key={author.id}>{author.name.substring(0, 7).concat("...")}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
