import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <li key={title}>
        <Image src={image} alt={title} width={200} height={200} />
        <p>{title}</p>
        <p>{artist}</p>
      </li>

      <nav>
        <Link href="/">Spotlight</Link>
        <Link href="/">Pieces</Link>
      </nav>
    </>
  );
}
