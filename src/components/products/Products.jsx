import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>
            <h3>{p.title}</h3>
          </Link>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
