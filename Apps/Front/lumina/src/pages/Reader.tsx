import { MangaReaderComponent } from "../components/manga/MangaReaderComponent";

import { useSearch } from "@tanstack/react-router";
import {  chapters } from "../../mock/prismaMockData";

export function Reader() {

     const { id } = useSearch({ from: "/main-layout/Reader" });
    const Chapters = chapters.find((c) => c.id === id);

  return (
    <section>
      <MangaReaderComponent chapterId={Chapters?.id}  />
    </section>
  );
}