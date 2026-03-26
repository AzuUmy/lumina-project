import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { Context } from "../context/Context";
import { useState } from "react";
import { ChaptersModal } from "../modal/ChaptersModal";

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
  const [openUserContext, setOpenUserContext] = useState(false);

  return (
    <section>
      <div onClick={() => setOpenUserContext(true)}>
        <div className="flex justify-between items-center gap-10">
          <button
            className="top-0 left-10 p-2 rounded-full flex justify-center backdrop-blur-md text-white"
            style={{
              backgroundColor: "var(--backdrop)",
              border: "1px solid var(--border)",
            }}
          >
            {" "}
            <ArrowBackIosNewRounded className="p-1" />
          </button>
          <div className="bg-(--backdrop) p-1 rounded-full pl-3 pr-3 border-(--border) border">
            <span>{currentChapter}</span>
          </div>
          <button
            className="top-0 left-10 p-2 rounded-full flex justify-center backdrop-blur-md text-white"
            style={{
              backgroundColor: "var(--backdrop)",
              border: "1px solid var(--border)",
            }}
          >
            {" "}
            <ArrowBackIosNewRounded className="rotate-180 p-1" />
          </button>
        </div>
      </div>
      <Context
        showContext={openUserContext}
        onClose={() => setOpenUserContext(false)}
        placement="bottom"
        animationPreset="slide"
        spacing={5}
      >
        <ChaptersModal
          volumeId={volumeId}
          currentChapterId={currentChapterId}
        />
      </Context>
    </section>
  );
}
