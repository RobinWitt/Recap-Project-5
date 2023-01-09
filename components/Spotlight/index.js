import Image from "next/image";
import getRandomNumber from "./GetRandomNumber";

export default function Spotlight({ data }) {
  const randomImage = data[getRandomNumber(0, data.length - 1)];

  return (
    <>
      <h2>Spotlight:</h2>
      <Image
        src={randomImage.imageSource}
        alt={randomImage.artist}
        width={240}
        height={240}
      />
      <p>{randomImage.artist}</p>
    </>
  );
}
