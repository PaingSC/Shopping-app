import React, { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/Item";

import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <>
      <div>
        <ShoppingList items={items} />
      </div>
    </>
  );
}

export default App;
