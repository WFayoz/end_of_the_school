import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Cart from "./pages/cart/Cart";
import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Review from "./pages/review/Review";

function App() {
  return (
    <div className="bg-primaryCream">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/review" element={<Review />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
