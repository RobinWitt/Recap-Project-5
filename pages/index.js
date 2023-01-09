import useSWR from "swr";
import ArtPiecePreview from "../components/ArtPiecePreview";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";

export default function Spotlight() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  // handle error and loading state
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  if (data)
    return (
      <div>
        <h1>Art Gallery</h1>
        <Spotlight data={data} />
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
