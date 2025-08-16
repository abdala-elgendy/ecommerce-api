import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/products/GetProducts";
import ProductDetail from "./components/products/GetProductDetail";
import AddProduct from "./components/products/AddProduct";
import GetUsers from "./components/users/GetUsers";
import GetUserById from "./components/users/GetUserById";
import DeleteUserById from "./components/users/DeleteUserById";
import GetAllCarts from "./components/carts/GetAllCarts";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2 style={styles.brand}> My Shop</h2>
        <div style={styles.links}>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/add-product" style={styles.link}>Add Product</Link>
          <Link to="/product/:id" style={styles.link} > getProduct </Link>
          <Link to="/users/delete/:id" style={styles.link} > deleteUser</Link>
          <Link to="/users" style={styles.link}>Users</Link>
          <Link to="/carts" style={styles.link}>Carts</Link>

        </div>
      </nav>

      <div style={styles.container}>
        <Routes>

          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />

          <Route path="/users" element={<GetUsers />} />
          <Route path="/users/:id" element={<GetUserById />} />
          <Route path="/users/delete/:id" element={<DeleteUserById />} />
        
          <Route path="/carts" element={<GetAllCarts />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    background: "#282c34",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  brand: { color: "white", margin: 0 },
  links: { display: "flex", gap: "15px" },
  link: { color: "white", textDecoration: "none", fontWeight: "bold" },
  container: { padding: "20px" }
};

export default App;
