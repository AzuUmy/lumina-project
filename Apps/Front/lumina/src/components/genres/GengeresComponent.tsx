import { useState } from "react";
import { genres } from "../../../mock/prismaMockData";

export function GenresCnomponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="mt-4 w-[min(92vw,22rem)]">
      <div className="rounded-2xl  p-3">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex w-full items-center justify-between text-left"
          aria-expanded={isExpanded}
          aria-controls="genres-list"
        >
          <h2
            className="text-sm font-semibold"
            style={{ color: "var(--text)" }}
          >
            Genres
          </h2>
          <span className="text-xs" style={{ color: "var(--text)" }}>
            {isExpanded ? "Hide" : "Show"}
          </span>
        </button>

        <ul
          id="genres-list"
          className="flex flex-wrap gap-2 overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isExpanded ? "16rem" : "0",
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? "0.75rem" : "0",
          }}
        >
          {genres.map((genre) => (
            <li
              key={genre.id}
              className="rounded-full border px-3 py-1 text-xs"
              style={{
                borderColor: "var(--border)",
                color: "var(--text)",
                backgroundColor:
                  "color-mix(in srgb, var(--border) 28%, transparent)",
              }}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
