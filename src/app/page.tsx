"use client";

import { useState } from "react";

import { Item } from "@/types/Item";

import ShoppingCart from "@/components/Cart";
import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  const onUserAdd = (user: any) => {
    setUsers([...users, user]);
  };

  const items: Item[] = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <div className="home">
      {/* <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} /> */}
      <ShoppingCart items={items} />
    </div>
  );
}
