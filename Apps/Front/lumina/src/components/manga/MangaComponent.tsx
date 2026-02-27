import { ArrowBackIosNewRounded } from "@mui/icons-material";
import {
  mangas,
  mangaGenres,
  genres,
  mangaAuthors,
  authors,
} from "../../../mock/prismaMockData";

type MangaComponentprops = {
  mangaId?: string;
  backOnClik?: () => void;
};

export function MangaComponent({ backOnClik, mangaId }: MangaComponentprops) {
  const manga = mangas.find((m) => m.id === mangaId);
  const genre = mangaGenres.filter((genres) => genres.mangaId === mangaId);
  const author = mangaAuthors.filter((authors) => authors.mangaId === mangaId);

  return (
    <section>
      <div>
        <div className="fixed left-10">
          <button
            type="button"
            onClick={() => {
              if (backOnClik) {
                backOnClik();
                return;
              }
              window.history.back();
            }}
            className=" top-0 left-10 mt-10 p-3 rounded-full flex justify-center"
            style={{
              backgroundColor: "var(--backdrop)",
              border: "1px solid var(--border)",
            }}
            aria-label="Go back"
          >
            <ArrowBackIosNewRounded />
          </button>
        </div>
        <div className=" relative left-12 top-36 ">
          <div className="flex gap-3 mb-10">
            {genres
              .filter((g) => genre.some((link) => link.genreId === g.id))
              .map((g) => (
                <div className="bg-(--border) p-1.5 pl-3 pr-3 rounded-full text-center">
                  {g.name}
                </div>
              ))}
          </div>
          <div className="flex items-start gap-5">
            <div className="p-3 h-46 w-36  bg-(--border)" />
            <div>
              <div className="font-bold text-xl">{manga?.title}</div>
              <div className="p-5 pl-0">
                {authors
                  .filter((a) => author.map((e) => e.authorId).includes(a.id))
                  .map((a) => (
                    <span className="bg-(--border) p-1.5 pl-3 pr-3 rounded-full mr-2">
                      {a.name}
                    </span> 
                  ))}
              </div>
              <div className="pr-10 max-w-60">{manga?.description}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
