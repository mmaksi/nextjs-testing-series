"use client";

import UserForm from "@/components/UserForm";
import { useState } from "react";
import UserList from "@/components/UserList";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  const onUserAdd = (user: any) => {
    setUsers([...users, user]);
  };

  return (
    <div className="home">
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </div>
  );
}
