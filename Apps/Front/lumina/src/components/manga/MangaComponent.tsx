import { useCallback, useEffect } from "react";
import {
  mangas,
  mangaGenres,
  genres,
  mangaAuthors,
  authors,
  volumes,
} from "../../../mock/prismaMockData";
import { useNavigate } from "@tanstack/react-router";
import { useTopMenuTitle } from "../../shared/TopMenuTitleContext";


type MangaComponentprops = {
  mangaId?: string;
};

export function MangaComponent({ mangaId }: MangaComponentprops) {
  const { setTitleElement, setTitleText } = useTopMenuTitle();
  const titleBlockRef = useCallback(
    (node: HTMLDivElement | null) => {
      setTitleElement(node);
    },
    [setTitleElement],
  );

  const manga = mangas.find((m) => m.id === mangaId);
  const genre = mangaGenres.filter((genres) => genres.mangaId === mangaId);
  const author = mangaAuthors.filter((authors) => authors.mangaId === mangaId);
  const navigate = useNavigate();

  useEffect(() => {
    setTitleText(manga?.title ?? "");
    return () => {
      setTitleText("");
    };
  }, [manga?.title, setTitleText]);

  return (
    <section>
      <div>
        <div className=" relative left-12 top-36">
          <div className="mb-10">
            <div className="flex flex-col items-start gap-3">
              <span>Genres</span>
              <div className="flex gap-3 mb-10">
                {genres
                  .filter((g) => genre.some((link) => link.genreId === g.id))
                  .map((g) => (
                    <div
                      key={g.id}
                      className="bg-(--border) p-1.5 pl-3 pr-3 rounded-full text-center"
                    >
                      {g.name}
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="p-3 h-52 w-36  bg-(--border)" />
              <div>
                <div className="font-bold text-xl">{manga?.title}</div>
                <div ref={titleBlockRef} className="p-5 pl-0">
                  {authors
                    .filter((a) => author.map((e) => e.authorId).includes(a.id))
                    .map((a) => (
                      <span
                        key={a.id}
                        className="bg-(--border) p-1.5 pl-3 pr-3 rounded-full mr-2"
                      >
                        {a.name}
                      </span>
                    ))}
                </div>
                <div className="pr-10 max-w-60">{manga?.description}</div>
                <div className="flex flex-row gap-2 text-sm mt-3 ">
                  <button className="bg-(--border) p-2 rounded-full pl-3 pr-3">
                    Start Reading
                  </button>
                  <button className="bg-(--border) p-2 pl-3 pr-3 rounded-full">
                    Add to list
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            {volumes
              .filter((v) => v.mangaId === mangaId)
              .map((v) => (
                <div
                  onClick={() =>
                    navigate({ to: "/Volume", search: { id: v.id } })
                  }
                  key={v.id}
                  className="p-3 pl-0 flex flex-row items-center gap-5"
                >
                  <div className="h-32 w-24 bg-(--border) p-1" />
                  <div>{"Volume".concat(" ").concat(v.number.toString())}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
