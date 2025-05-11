import { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import type Item from "./models/Item.types";
import ShppingListForm from "./components/ShoppingListForm";
import uuid from "uuid-random";

import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number): void => {
    console.log("Added: ", product);
    setItems([...items, { id: uuid(), product, quantity: quantity }]);
    console.log(items);
  };

  return (
    <>
      <div>
        <ShoppingList items={items} />
        <ShppingListForm onAddItem={addItem} />
      </div>
    </>
  );
}

export default App;
