import Navbar from "./components/Navbar";
import Products from "./components/Products";

import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
