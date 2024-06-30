import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Catalog from "./pages/catalog/Catalog";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-primaryCream">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
