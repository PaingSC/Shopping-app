import type React from "react";
import { useRef, type JSX } from "react";

interface ShoppingListFormProps {
  onAddItem: (product: string) => void;
}

export default function ShppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FocusEvent) {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    onAddItem(newProduct);
    inputRef.current!.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={inputRef} />
      <button type="submit">Add Product</button>
    </form>
  );
}
