import { useState } from "react";
import { Settings, Sunny, DarkMode } from "@mui/icons-material";
import { UserModal } from "../modal/userModal";
import { Context } from "../context/Context";
import { useTheme } from "../../theme/ThemeProvider";

export function HomeComponent() {
  const [openUserContext, setOpenUserContext] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | undefined>();
  const { toggleTheme, resolvedTheme } = useTheme();

  return (
    <section>
      <div className="fixed mt-10 w-full show-mobile-only">
        <div className=" flex items-center justify-between pl-10 pr-10 ">
          <div>
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

          <div className="flex items-center gap-3">
            <div onClick={toggleTheme}>
              {resolvedTheme === "light" ? <DarkMode /> : <Sunny />}
            </div>
            <Settings />
          </div>
        </div>
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
