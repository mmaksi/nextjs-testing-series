import { render, screen } from "@testing-library/react";

import UserForm from "../src/components/UserForm";
import AsyncUsersList from "../src/components/AsynUsersList";

test("getBy/getAllBy to prove an element exists on the screen", () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameField = screen.getByRole("textbox", {
    name: /email/i,
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
  //   const namess = await screen.queryAllByRole("listitem"); // does not await for the promise to be resolved

  expect(names).toHaveLength(2);
});
