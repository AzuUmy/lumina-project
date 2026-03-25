import { ArrowBackIosNewRounded } from "@mui/icons-material";

export type NavBetwemChaptersProps = {
  currentChapter?: string;
  volumeId?: string;
  currentChapterId?: string;
};

export function NavBetwemChapters({
  currentChapter,
  volumeId,
  currentChapterId,
}: NavBetwemChaptersProps) {
  return (
    <section>
      <div className="flex justify-between items-center gap-6">
        <button
          className="top-0 left-10 p-2 rounded-full flex justify-center backdrop-blur-md text-white"
          style={{
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {" "}
          <ArrowBackIosNewRounded className="p-1" />
        </button>
        <div>
          <span>chapter 1</span>
        </div>

        <button
          className="top-0 left-10 p-2 rounded-full flex justify-center backdrop-blur-md text-white"
          style={{
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {" "}
          <ArrowBackIosNewRounded className="rotate-180 p-1" />
        </button>
      </div>
    </section>
  );
}
