import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignInAlt ,faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar({cart}) {
  const cartCount = cart.reduce((total,item)=>total+item.quantity,0)
  return (
    <>
      <nav className="bg-blue-500 p-4 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-lg font-semibold space-x-4">
              Products Collection
            </Link>

            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white hover:text-gray-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 rounded focus:outline-none focus:ring focus:border-blue-300"
              ></input>
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none px-2 ml-11">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </div>
            </div> */}
            <div className="flex space-x-4">
              <button className="text-white hover:text-gray-300 px-2 py-2 border-2 border-spacing-2 ">
                <FontAwesomeIcon icon={faSignInAlt} />
                <span className="ml-2 ms-2 space-x-2">Login</span>
              </button>
              <button className="text-white hover:text-gray-300 border-2 px-2 py-2 border-spacing-2 ">
              <FontAwesomeIcon icon={faUserPlus} />
                <span className="ml-2 ms-2 space-x-2">Register</span>
              </button>
              <button className="text-white hover:text-gray-300 border-2 px-2 py-2 border-spacing-2 ">
              <FontAwesomeIcon icon={faShoppingCart} />
                <span className="ml-2 ms-2 space-x-2">Cart ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
