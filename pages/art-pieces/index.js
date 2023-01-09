import ArtPieces from "../../components/ArtPieces";
import ArtPiecePreview from "../../components/ArtPiecePreview";
import { useAtom } from "jotai";
import { imageAtom } from "../_app";
import Link from "next/link";

export default function ArtPiecesPage() {
  const [data] = useAtom(imageAtom);

  return (
    <ArtPieces>
      {data.map(({ imageSource, name, artist, slug }) => {
        return (
          <ArtPiecePreview
            key={slug}
            image={imageSource}
            title={name}
            artist={artist}
            slug={slug}
          />
        );
      })}
    </ArtPieces>
  );
}
