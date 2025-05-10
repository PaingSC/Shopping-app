import React, { type JSX } from "react";
import Item from "../models/Item";

interface ShoppingListProps {
  items: Item[];
}

export default function ShoppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
