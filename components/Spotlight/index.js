import Image from "next/image";
import Link from "next/link";

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export default function Spotlight({ data }) {
  const randomImage = data[getRandomNumber(0, data.length - 1)];

  return (
    <>
      <h2>Spotlight:</h2>
      <Link href={`/art-pieces/${randomImage.slug}`}>
        <Image
          src={randomImage.imageSource}
          alt={randomImage.artist}
          width={240}
          height={240}
        />
      </Link>

      <p>{randomImage.artist}</p>
    </>
  );
}
