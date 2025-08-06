import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Signin from "./pages/auth/signup"; // If it's signup, rename component or file properly
import Cart from "./pages/cart/cart";
import Payments from "./pages/payment/payment";
import ProductDetail from "./pages/productDetail/productDetail";
import Result from "./pages/results/results";
import Order from "./pages/order/order"

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/result" element={<Result />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default Routing;
