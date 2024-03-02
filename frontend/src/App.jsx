import "./App.css";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./components/Blogs/BlogDetails";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import UserPage from "./pages/admin/UserPage";
import CategoryPage from "./pages/admin/categories/categoryPage";
import UpdateCategoryPage from "./pages/admin/categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/admin/categories/CreateCategoryPage";
import CreateProductPage from "./pages/admin/products/CreateProductPage";
import ProductPage from "./pages/admin/products/ProductPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
