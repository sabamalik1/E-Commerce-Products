import React from "react";
import Products from "./Products";

function Home({cart,addToCart}) {
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${"./image.jpg"})` }}
      >
        <img src="./image.jpg" alt="shopping" className="hidden"></img>
        <div className="flex flex-col top-[300px] px-3 py-3 left-[100px] absolute">
          <div>
            <h4 className="text-6xl px-2 py-2 text-white mt-6 divide-amber-50  font-extrabold font-serif">
              NEW SEASON ARRIVALS
            </h4>
          </div>
          <br></br>
          <div className="text-2xl  text-white  divide-amber-50  font-bold font-serif">
            <p>CHECK OUT ALL THE TRENDS </p>
          </div>
        </div>
      </div>
      <Products cart={cart} addToCart={addToCart}/>
    </>
  );
}

export default Home;
