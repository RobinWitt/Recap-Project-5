import Image from "next/image";
import useSWR from "swr";
import ArtPiecePreview from "../components/ArtPiecePreview";
import ArtPieces from "../components/ArtPieces";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  if (data)
    return (
      <div>
        <h1>Hello from Next.js</h1>
        <ArtPieces>
          {data.map(({ imageSource, name, artist }) => {
            return (
              <ArtPiecePreview
                key={name}
                image={imageSource}
                title={name}
                artist={artist}
              />
            );
          })}
        </ArtPieces>
      </div>
    );
}
