import Footer from "../../app/components/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  beforeEach(() => render(<Footer />));

  it("should render a Footer", () => {
    expect(screen);
  });
});
