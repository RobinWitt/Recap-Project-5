import { render, screen } from "@testing-library/react";
import Spotlight from ".";

test("get random number", () => {
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const result = getRandomNumber(0, 10);
  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThanOrEqual(10);
});

test("renders image and name of artist", () => {
  const testImage = [{ artist: "test artist", imageSource: "/image.jpg" }];

  render(<Spotlight data={testImage} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();

  const artist = screen.getByText("test artist");
  expect(artist).toBeInTheDocument();
});
