import { useEffect, useRef, useState } from "react";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import {
  mangas,
  mangaGenres,
  genres,
  mangaAuthors,
  authors,
  volumes,
} from "../../../mock/prismaMockData";

type MangaComponentprops = {
  mangaId?: string;
  backOnClik?: () => void;
};

export function MangaComponent({ backOnClik, mangaId }: MangaComponentprops) {
  const [showFloatingTitle, setShowFloatingTitle] = useState(false);
  const titleBlockRef = useRef<HTMLDivElement | null>(null);

  const manga = mangas.find((m) => m.id === mangaId);
  const genre = mangaGenres.filter((genres) => genres.mangaId === mangaId);
  const author = mangaAuthors.filter((authors) => authors.mangaId === mangaId);

  useEffect(() => {
    const onScroll = () => {
      if (!titleBlockRef.current) {
        setShowFloatingTitle(false);
        return;
      }

      const rect = titleBlockRef.current.getBoundingClientRect();
      setShowFloatingTitle(rect.bottom <= 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
              backdropFilter: "blur(30px)",
            }}
            aria-label="Go back"
          >
            <ArrowBackIosNewRounded />
          </button>
          <div
            className={[
              "fixed left-34 top-11.5",
              showFloatingTitle && manga?.title
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none",
            ].join(" ")}
            style={{
              backdropFilter: "blur(30px)",
            }}
          >
            <div
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                backgroundColor: "var(--backdrop)",
                border: "1px solid var(--border)",
              }}
            >
              {manga?.title}
            </div>
          </div>
        </div>
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
              <div className="p-3 h-46 w-36  bg-(--border)" />
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
              </div>
            </div>
          </div>

          <div>
            {volumes
              .filter((v) => v.mangaId === mangaId)
              .map((v) => (
                <div
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
