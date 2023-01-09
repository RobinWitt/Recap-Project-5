import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li key={title}>
      <Image src={image} alt={title} width={200} height={200} />
      <p>{title}</p>
      <p>{artist}</p>
    </li>
  );
}
