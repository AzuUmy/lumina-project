import { ArrowBackIosNewRounded } from "@mui/icons-material";

type MangaComponentprops = {
  mangaId?: string;
  backOnClik?: () => void;
};

export function MangaComponent({ backOnClik }: MangaComponentprops) {
  return (
    <section>
      <div>
        <button
          type="button"
          onClick={() => {
            if (backOnClik) {
              backOnClik();
              return;
            }
            window.history.back();
          }}
          className="fixed top-0 left-10 mt-10 p-3 rounded-full flex justify-center"
          style={{
            backgroundColor: "var(--backdrop)",
            border: "1px solid var(--border)",
          }}
          aria-label="Go back"
        >
          <ArrowBackIosNewRounded />
        </button>
      </div>
    </section>
  );
}
