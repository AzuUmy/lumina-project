import { useState } from "react";
import { UserModal } from "../modal/userModal";
import { Context } from "../context/Context";

export function HomeComponent() {
  const [openUserContext, setOpenUserContext] = useState(false);

  return (
    <section>
      <div className="fixed ml-10 mt-10">
        <button
          type="button"
          onClick={() => setOpenUserContext(true)}
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
        >
          <UserModal />
        </Context>
      </div>
    </section>
  );
}
