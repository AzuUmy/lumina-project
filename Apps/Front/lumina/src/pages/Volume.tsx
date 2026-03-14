import { VolumeComponent } from "../components/manga/VolumeComponenet";
import { useSearch } from "@tanstack/react-router";
import { volumes } from "../../mock/prismaMockData";

export function Volume() {
  const { id } = useSearch({ from: "/main-layout/Volume" });
  const volume = volumes.find((m) => m.id === id);

  if (!volume || volume.id === undefined) {
    return <div>Volume not Founded</div>;
  }

  return <VolumeComponent volumeId={volume.id} />;
}
