import { useState } from "react";
import { Settings, Sunny, DarkMode } from "@mui/icons-material";
import { UserModal } from "../modal/UserModal";
import { Context } from "../context/Context";
import { useTheme } from "../../theme/ThemeProvider";
import { SearchComponenet } from "../Search/SearchComponent";
import { GenresCnomponent } from "../genres/GengeresComponent";
import { Library } from "./content/Library";
import { SearchFilter } from "../Search/SearchFilters";

export function HomeComponent() {
  const [openUserContext, setOpenUserContext] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | undefined>();
  const { toggleTheme, resolvedTheme } = useTheme();
  const [openSearchOptions, setOpenSearchOptions] = useState(false);
  const [searchOrigin, setSearchOrigin] = useState<
    { x: number; y: number } | undefined
  >();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section>
      <div>
        <div className="fixed mt-10 w-full z-10 show-mobile-only">
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

        <div>
          <Context
            showContext={openSearchOptions}
            onClose={() => setOpenSearchOptions(false)}
            placement="center"
            animationPreset="grow"
            growFrom={searchOrigin}
            growVerticalOffset={-30}
            maxWidth={365}
          >
            <div className="p-3 flex justify-center flex-col">
              <SearchComponenet
                radius="10px"
                readonly={false}
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
              <div className="mt-3">
                <SearchFilter query={searchQuery} />
              </div>
            </div>
          </Context>
        </div>
      </div>
      <div className="show-mobile-only relative">
        <div className="absolute top-32 left-[50%] translate-x-[-50%]">
          <SearchComponenet
            readonly={true}
            value={searchQuery}
            openSearchOptions={(origin) => {
              setSearchOrigin(origin);
              setOpenSearchOptions(true);
            }}
          />
          <div>
            <GenresCnomponent />
          </div>
          <div className="mt-5">
            <Library query={searchQuery} />
          </div>
        </div>
      </div>
    </section>
  );
}
