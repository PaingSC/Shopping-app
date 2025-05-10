import { type JSX } from "react";
import type Item from "../models/Item.types";

interface ShoppingListProps {
  items: Item[];
}

export default function ShoppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return (
    <>
      <h1>Shopping List!</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
