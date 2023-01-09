import Spotlight from "../components/Spotlight";
import { useAtom } from "jotai";
import { imageAtom } from "./_app";

export default function SpotlightPage() {
  const [data] = useAtom(imageAtom);

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight data={data} />
    </div>
  );
}
