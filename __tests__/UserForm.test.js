import { toContainOnlyLetters } from "../src/utils/customMatchers";

import { fireEvent, render, screen } from "@testing-library/react";
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

test("input fields have correct string format", async () => {
  // Render the component
  render(<UserForm onUserAdd={() => {}} />);
  // Fire change event on the name input field
  const nameField = screen.getByRole("textbox", {
    name: /name/i,
  });
  // Typing a valid string
  fireEvent.change(nameField, { target: { value: "John Doe" } });
  const validInput = nameField.value;
  // Clearing the input field
  fireEvent.change(nameField, { target: { value: "" } });
  // Typing an invalid string
  fireEvent.change(nameField, { target: { value: "J0hn Doe@" } });
  const invalidInput = nameField.value;

  // Check if the input field has weird characters
  expect(validInput).toContainOnlyLetters();
  expect(invalidInput).not.toContainOnlyLetters();
});
