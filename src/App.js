import "./App.css";
import React,{useState} from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import DetailComponent from "./components/DetailComponent";
import Stories from "./components/Stories";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page404 from "./components/Page404";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("From App.js > addToCart:", existingItem)
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      {/* <header>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/products">Products</Link>
      </header> */}
      <Navbar cart={cart} />
      <Routes>
        <Route path="/*" element={<Page404 />} />
        <Route path="/" element={<Home cart={cart} addToCart={addToCart} />} />
        <Route path="/products" element={<Products cart={cart} addToCart={addToCart}/>} />
        <Route path="/detailcomponent/:id" element={<DetailComponent cart={cart} addToCart={addToCart}/>} />
      </Routes>
      {/* <Stories/> */}
    </div>
  );
}

export default App;
