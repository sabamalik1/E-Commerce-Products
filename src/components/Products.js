import React, { useState, useEffect, useReducer } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const initialValue = {
  data: [],
  loading: "",
};
const reducerFetch = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "LODING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

function Products({ cart, addToCart }) {
  let API = "https://fakestoreapi.com/products";

  const [state, dispatch] = useReducer(reducerFetch, initialValue);
  const { data, loading } = state;

  const fetchApiData = async (url) => {
    // console.log(apiData)

    try {
      const response = await fetch(url);
      const apiData = await response.json();
      console.log(apiData)

      dispatch({ type: "FETCH_SUCCESS", payload: apiData });

      dispatch({ type: "LOADING" });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <div className="flex flex-row justify-center mb-4 pb-4">
          <button className="btn btn-outline-dark background bg-blue-500 border rounded px-3 py-2 ">
            All
          </button>
          <button className="btn btn-outline-dark me-2 bg-blue-500 border rounded px-3 py-2 ml-2">
            Man's Clothing
          </button>
          <button className="btn btn-outline-dark me-2 bg-blue-500 border rounded px-3 py-2 ml-2">
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark bg-blue-500 border rounded px-3 py-2 ml-2">
            Jewelry
          </button>
          <button className="btn btn-outline-dark bg-blue-500 border rounded px-3 py-2 ml-2">
            Electronics
          </button>
        </div>
        <div className=" justify-content center">
          {/* {loading ? <Loading /> : <showProducts />} */}
        </div>
        <ul className="flex flex-wrap justify-center">
          {data.map((product) => (
            
            <li key = {product.id}
            className="h-[400px] w-[400px] ml-16 mb-12 flex flex-col px-2 py-2 rounded space-x-8 border-2 shadow-md">
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
              {/* <Link to={`/products/${product.id}`}>{product.title}</Link> */}
              {/* <div className="text-gray-600 truncate mt-3">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </div> */}
            </li>
          ))}
        </ul>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          <ul>
            {cart.map((item) => {
              <li key={item.id}>
                console.log(item)
                {/* {item.title} - ${item.price} x {item.quantity} */}
                <span className="font-semibold">{item.title}</span>
                <span className="text-gray-600 ml-2">
                  ${item.price} x {item.quantity}
                </span>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Products;
