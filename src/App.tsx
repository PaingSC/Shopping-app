import { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import type Item from "./models/Item.types";
import ShppingListForm from "./components/ShoppingListForm";

import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string): void => {
    console.log("Added: ", product);
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
