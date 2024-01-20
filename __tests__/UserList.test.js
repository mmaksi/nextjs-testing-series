import { render, screen, within } from "@testing-library/react";
import UserList from "../src/components/UserList";

test("Render all the users in an ordered list", () => {
  const usersList = [
    { name: "Mark", email: "mark@mark.com" },
    { name: "jane", email: "jane@jane.com" },
  ];
  // 1. Render the component
  const { container } = render(<UserList users={usersList} />);

  // 2. Find the li elements on the screen
  const items1 = screen.getAllByRole("listitem");
  screen.logTestingPlaygroundURL();
  //   const items2 = within(screen.getByTestId("users")).getAllByRole("listitem");
  const items3 = container.querySelectorAll("ol li");

  // 3. Assertion
  expect(items3).toHaveLength(2);
});
