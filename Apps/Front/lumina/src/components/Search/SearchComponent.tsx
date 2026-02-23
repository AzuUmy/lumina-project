export function SearchComponenet() {
  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-85 p-3 rounded-full border outline-none"
          style={{
            backgroundColor: "var(--border)",
            borderColor: "var(--border)",
            color: "var(--text)",
          }}
        />
      </div>
    </section>
  );
}
