import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import UserForm from "../src/components/UserForm";

test("it renders 2 input fields on the screen", () => {
  // 1. Render the component
  render(<UserForm />);

  // Manipulate the HTML document
  const inputFields = screen.getAllByRole("textbox");
  // Assertions
  expect(inputFields).toHaveLength(2);
});

test("it calls the onUserAdd function with proper arguments upon form submission", async () => {
  const mockSubmitter = jest.fn();
  // 1. render the userform component
  render(<UserForm onUserAdd={mockSubmitter} />);

  // 2. Manipulate the document
  const nameField = screen.getByRole("textbox", {
    name: /name/i,
  });
  await user.click(nameField);
  await user.keyboard("jane");

  const emailField = screen.getByRole("textbox", {
    name: /email/i,
  });
  await user.click(emailField);
  await user.keyboard("jane@test.com");

  const button = screen.getByRole("button");
  await user.click(button);

  // 3. Assertion
  expect(mockSubmitter).toHaveBeenCalled();
  expect(mockSubmitter).toHaveBeenCalledWith({
    name: "jane",
    email: "jane@test.com",
  });
});
