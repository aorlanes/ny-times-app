import Header from "../../app/components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  beforeEach(() => render(<Header />));

  it("should render a Header", () => {
    expect(screen);
  });
});
