import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <li key={title}>
        <Image src={image} alt={title} width={200} height={200} />
        <p>{title}</p>
        <p>{artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
      </li>

      <Link href="/art-pieces">Back to all pieces</Link>
    </>
  );
}
