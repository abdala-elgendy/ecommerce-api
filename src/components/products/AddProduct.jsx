import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://fakestorapi.com/products", {
      id:1235,
      title,
      price,
      description: "product",
      image: "https://wwwww",
      category: "electronics"
    }).then(res => {
      console.log("Product added:", res.data);
      alert("Product added!", res.data);
    }).catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input type="text" placeholder="Title"
        value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Price"
        value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddProduct;
