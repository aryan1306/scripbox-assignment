import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import Login from "./Login";

describe("Login Component", () => {
  test("snapshot testing", () => {
    let tree = render(<Login setIsLoggedIn={() => {}} />);
    expect(tree).toMatchSnapshot();
  });

  test("calls setIsLoggedIn with true on correct employee ID", async () => {
    const mockSetIsLoggedIn = vi.fn();
    render(<Login setIsLoggedIn={mockSetIsLoggedIn} />);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "HM91101");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true));
  });

  test("displays error message on incorrect employee ID", async () => {
    const mockSetIsLoggedIn = vi.fn();
    render(<Login setIsLoggedIn={mockSetIsLoggedIn} />);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "incorrect-id");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    const errorMessage = screen.getByText(
      /Incorrect Employee ID entered, try again!/i
    );

    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });
});
