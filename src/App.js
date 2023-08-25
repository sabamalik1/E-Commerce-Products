import "./App.css";
import React,{useReducer, useState} from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import DetailComponent from "./components/DetailComponent";
import Stories from "./components/Stories";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page404 from "./components/Page404";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    default:
      return state;
  }
};


function App() {
  // const [cart, setCart] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, []);
const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div>
      {/* <header>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/products">Products</Link>
      </header> */}
      <cartProvider>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/*" element={<Page404 />} />
        <Route path="/" element={<Home cart={cart} addToCart={addToCart} />} />
        <Route path="/products" element={<Products cart={cart} addToCart={addToCart}/>} />
        <Route path="/detailcomponent/:id" element={<DetailComponent cart={cart} addToCart={addToCart}/>} />
      </Routes>
      </cartProvider>
      
      {/* <Stories/> */}
    </div>
  );
}

export default App;
