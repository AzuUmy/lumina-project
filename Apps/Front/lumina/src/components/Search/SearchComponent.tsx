type Point = { x: number; y: number };

type SerchComponenetProps = {
  openSearchOptions?: (origin: Point) => void;
  radius?: string
};

export function SearchComponenet({ openSearchOptions, radius }: SerchComponenetProps) {
  return (
    <section>
      <div>
        <input
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            openSearchOptions?.({
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
            });
          }}
          type="text"
          readOnly
          placeholder="Search..."
          className="w-85 p-3 border outline-none"
          style={{
            backgroundColor: "var(--border)",
            borderColor: "var(--border)",
            color: "var(--text)",
            borderRadius: radius || "100px",
          }}
        />
      </div>
    </section>
  );
}
