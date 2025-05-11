import type React from "react";
import { useRef, type JSX } from "react";

interface ShoppingListFormProps {
  onAddItem: (product: string, quantity: number) => void;
}

export default function ShppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  // Adding Product Name
  const productNameRef = useRef<HTMLInputElement>(null);
  const productQuantityRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FocusEvent) {
    e.preventDefault();
    const newProduct = productNameRef.current!.value;

    // Adding Product Quantity
    const productQuantity = parseInt(productQuantityRef.current!.value);
    onAddItem(newProduct, productQuantity);
    productQuantityRef.current!.value = "1";
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="product">Add Product </label>
        <input
          type="text"
          id="product"
          placeholder="Product Name"
          ref={productNameRef}
          required
        />
      </div>
      <br />
      <div className="">
        <label htmlFor="quantity">Add Quantity </label>
        <input
          type="number"
          min={1}
          id="quantity"
          placeholder="Type quantity"
          ref={productQuantityRef}
        />
      </div>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}
