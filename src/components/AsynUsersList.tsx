"use client";

import { useEffect, useState } from "react";

interface AsyncUser {
  id: string;
  name: string;
  email: string;
}

const fetchUsers = () => {
  return Promise.resolve([
    { id: "1", name: "john", email: "john@john.com" },
    { id: "2", name: "johnny", email: "johnny@johnny.com" },
  ]);
};

const AsyncUsersList = () => {
  const [users, setUsers] = useState<AsyncUser[]>([]);

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <h2 style={{ color: "red" }}>All Users:</h2>
      <ol data-testid="users">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default AsyncUsersList;
