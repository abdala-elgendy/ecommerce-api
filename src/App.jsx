import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/products/GetProducts";
import ProductDetail from "./components/products/GetProductDetail";
import AddProduct from "./components/products/AddProduct";
import GetUsers from "./components/users/GetUsers";
import GetUserById from "./components/users/GetUserById";
import DeleteUserById from "./components/users/DeleteUserById";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/products">Products</Link> |{"... "}
        <Link to="/add-product">Add Product</Link> | {"..."}
        <Link to="products/:id" > get product</Link> |{"..."}
        <Link to="/get-users">get users</Link> |{"..."}
        <Link to="/users/:id" > get user</Link> |{"..."}
        <Link to="/users/delete/:id" > delete user</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/get-users" element={<GetUsers />} />
        <Route path="/users/:id" element={<GetUserById />} />
        <Route path="/users/delete/:id" element={<DeleteUserById />} />
      </Routes>
    </Router>
  );
}




export default App;
