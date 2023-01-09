import { getByRole, render, screen } from "@testing-library/react";
import ArtPiecePreview from ".";
import ArtPieces from "../ArtPieces";

test("ArtPiecePreview displays all art pieces in a list", () => {
  const artPieces = [
    {
      imageSource: "/image1.jpg",
      name: "Kunstwerk 1",
      artist: "Künstler A",
    },
  ];

  render(
    <ArtPieces>
      {artPieces.map(({ imageSource, name, artist }) => {
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
  );

  const artPiecePreviews = screen.getByRole("list");
  expect(artPiecePreviews).toBeInTheDocument();

  const artPiecePreview = screen.getByRole("listitem");
  expect(artPiecePreview).toBeInTheDocument();

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});
