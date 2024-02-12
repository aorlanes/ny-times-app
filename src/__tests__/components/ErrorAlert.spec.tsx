import ErrorAlert from "../../app/components/ErrorAlert";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";

describe("ErrorAlert", () => {
  const testMessage = "test";
  beforeEach(() => render(<ErrorAlert open={true} message={testMessage} />));

  it("should render an ErrorAlert", () => {
    expect(screen);
  });

  it("should render open", async () => {
    const component = await waitFor(() => screen.findByTestId("error-alert"));
    expect(component.textContent).toBe(testMessage);
  });

  it("should be closed on close button click", async () => {
    const component = await waitFor(() =>
      screen.findByTestId("error-alert-button")
    );
    fireEvent.click(component);
    expect(component.textContent).toBeFalsy();
  });
});
