import ArtPieceDetails from "../../../components/ArtPiecesDetails/ArtPieceDetails";
import { useAtom } from "jotai";
import { imageAtom } from "../../_app";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [data] = useAtom(imageAtom);
  const filteredImage = data.find((image) => image.slug === slug);

  return (
    <ArtPieceDetails
      image={filteredImage.imageSource}
      title={filteredImage.name}
      artist={filteredImage.artist}
      year={filteredImage.year}
      genre={filteredImage.genre}
    />
  );
}
