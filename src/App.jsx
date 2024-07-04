import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Cart from "./pages/cart/Cart";
import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Review from "./pages/review/Review";
import ScrollTop from "./components/ScrollTop";
import Delivery from "./pages/delivery/Delivery";
import Payment from "./pages/payment /Payment";
import Varanty from "./pages/varanty/Varanty";
import Vacancy from "./pages/vacancy/Vacancy";

function App() {
  return (
    <div className="bg-primaryCream">
      <Router>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/review/:productId" element={<Review />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/varanty" element={<Varanty />} />
          <Route path="/vacancy" element={<Vacancy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
