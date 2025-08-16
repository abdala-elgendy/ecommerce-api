import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/products/Products";
import ProductDetail from "./components/products/ProductDetail";
import AddProduct from "./components/products/AddProduct";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/products">Products</Link> |{" "}
        <Link to="/add-product">Add Product</Link>\ {"..."}
        <Link to="products/:id" > get product</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}




export default App;
