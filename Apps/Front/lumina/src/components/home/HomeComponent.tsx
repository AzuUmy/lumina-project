import { useState } from "react";
import { UserModal } from "../modal/userModal";
import { Context } from "../context/Context";

export function HomeComponent() {
  const [openUserContext, setOpenUserContext] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | undefined>();

  return (
    <section>
      <div className="fixed ml-10 mt-10">
        <button
          type="button"
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setOrigin({
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
            });
            setOpenUserContext(true);
          }}
          className="w-10 h-10 p-3 rounded-full border"
          style={{
            backgroundColor: "var(--accent)",
            borderColor: "var(--border)",
          }}
          aria-label="Open user context"
        />
      </div>

      <div>
        <Context
          showContext={openUserContext}
          onClose={() => setOpenUserContext(false)}
          placement="center"
          animationPreset="grow"
          growFrom={origin}
          growVerticalOffset={-45}
          maxWidth={420}
          spacing={20}
        >
          <UserModal />
        </Context>
      </div>
    </section>
  );
}
