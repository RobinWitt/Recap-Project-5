import { render, screen } from "@testing-library/react";
import Spotlight from ".";

test("picks a random number, inside the length of array", () => {
  render(<Spotlight />);
});
