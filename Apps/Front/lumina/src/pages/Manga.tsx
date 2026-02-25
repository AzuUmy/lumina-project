import { useSearch } from "@tanstack/react-router";
import { MangaComponent } from "../components/manga/MangaComponent";
import { mangas } from "../../mock/prismaMockData";

export function Manga() {
  const { id } = useSearch({ from: "/main-layout/Manga" });
  const manga = mangas.find((m) => m.id === id);

  if (!manga || manga.id === undefined) {
    return <div>Manga not Founded</div>;
  }

  return <MangaComponent mangaId={manga?.id || "0"} />;
}
