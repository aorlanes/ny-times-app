import Carousel from "../../app/components/Carousel";
import { render, screen } from "@testing-library/react";

describe("Carousel", () => {
  const item = <div />;
  const carouselItems = [item, item, item];

  beforeEach(() =>
    render(<Carousel items={carouselItems} displayCount={3} slideByCount={1} />)
  );

  it("should render a Carousel", () => {
    expect(screen);
  });
});
