type Point = { x: number; y: number };

type SerchComponenetProps = {
  openSearchOptions?: (origin: Point) => void;
  radius?: string;
  readonly: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
};

export function SearchComponenet({
  openSearchOptions,
  radius,
  readonly,
  value,
  onValueChange,
}: SerchComponenetProps) {
  return (
    <section>
      <div className="flex justify-center">
        <input
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            openSearchOptions?.({
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
            });
          }}
          type="text"
          value={value ?? ""}
          onChange={(event) => onValueChange?.(event.target.value)}
          readOnly={readonly}
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
