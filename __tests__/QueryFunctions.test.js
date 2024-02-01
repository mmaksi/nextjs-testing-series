import { render, screen } from "@testing-library/react";

import UserForm from "../src/components/UserForm";
import UserList from "../src/components/UserList";
import AsyncUsersList from "../src/components/AsynUsersList";

test("getBy/getAllBy to prove an element exists on the screen", () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameField = screen.queryByRole("textbox", {
    name: /name/i,
  });

  expect(nameField).toBeInTheDocument();
});

test("queryBy/queryAllBy to prove an element does not exist on the screen", () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameField = screen.queryByRole("listitem", {
    name: /name/i,
  });

  expect(nameField).not.toBeInTheDocument();
});

test("findBy/findAllBy are used during data fetching", async () => {
  render(<AsyncUsersList />);

  const names = await screen.findAllByRole("listitem");

  expect(names).toHaveLength(2);
});
