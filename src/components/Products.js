import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function Products({cart,addToCart}) {
  let API = 'https://fakestoreapi.com/products';
  const [data, setData] = useState([]);
  // const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const apiData = await response.json();
      setData(apiData);
      setLoading(false); // Data is loaded, so set loading to false
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData(API);
  }, []);

  // const addToCart = (product) => {
  //   const existingItem = cart.find((item) => item.id === product.id);
  //   if (existingItem) {
  //     setCart((prevcart) =>
  //       prevcart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  //   }
  // };
//   const Loading = () => {
//     return <>Loading...</>;
//   };
//   const showProducts = () => {
//     return (
//       <div className="flex flex-row justify-center">
//         <button className="btn btn-outline-dark">All</button>
//         <button className="btn btn-outline-dark me-2">Man's Cloathing</button>
//         <button className="btn btn-outline-dark me-2">Women's Cloathing</button>
//         <button className="btn btn-outline-dark">Jwelary</button>
//         <button className="btn btn-outline-dark">Electronic</button>
//         <button className="btn btn-outline-dark">hdkuhd</button>
//       </div>
//     );
//   };
  return (
    <>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <div className="flex flex-row justify-center mb-4 pb-4">
        <button className="btn btn-outline-dark background bg-blue-500 border rounded px-3 py-2 ">All</button>
        <button className="btn btn-outline-dark me-2 bg-blue-500 border rounded px-3 py-2 ml-2">Man's Clothing</button>
        <button className="btn btn-outline-dark me-2 bg-blue-500 border rounded px-3 py-2 ml-2">Women's Clothing</button>
        <button className="btn btn-outline-dark bg-blue-500 border rounded px-3 py-2 ml-2">Jewelry</button>
        <button className="btn btn-outline-dark bg-blue-500 border rounded px-3 py-2 ml-2">Electronics</button>
      </div>
        <div className=" justify-content center">
          {/* {loading ? <Loading /> : <showProducts />} */}
        </div>
        <ul className="">
          {data.map((product) => (
            <li>
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
            <Link to={`/products/${product.id}`}>{product.title}</Link>

            </li>
            // <li key={product.id}>
                
            //   {product.title} - ${product.price}
            //   <button
            //     className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
            //     onClick={() => addToCart(product)}
            //   >
            //     Add to Cart
            //   </button>
            // </li>
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