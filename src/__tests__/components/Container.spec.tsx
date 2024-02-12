import Container from "../../app/components/Container";
import { render, screen } from "@testing-library/react";

describe("Container", () => {
  beforeEach(() => render(<Container />));

  it("should render a Container", () => {
    expect(screen);
  });
});
