import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailComponent({ cart, addToCart }) {
  // const params = useParams()
  const { id } = useParams();

  const initialState = {
    detailProduct: {
      rating: {
        rate: 0, // Default value for rate
        count: 0, // Default value for count
      },
    },
    loading: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, detailProduct: action.payload, loading: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { detailProduct, loading } = state;

  useEffect(() => {
    const getProducts = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: productData });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getProducts();
  }, [id]);

  return (
    <>
      <div>
        <h1>Product Detail</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className=" w-full flex border p-2 h-[700px]  px-2 py-2 rounded  mt-6 justify-center">
              <div className="left-[100px] h-[600px] mt-[-60px] w-[400px] flex object-fit">
                <img
                  className="w-[100%] h-[100%] ml-16 object-contain  "
                  src={detailProduct.image}
                  alt={detailProduct.title}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="p-20 h-[600px] w-[500px] mt-[-140px] ml-[120px] object-contain">
                {/* <p className="text-gray-600">{detailProduct.id}</p> */}
                <h1 className="text-4xl font-semibold mt-28">
                  {detailProduct.title}
                </h1>
                <h3 className="text-gray-600 text-lg mt-3 font-bold">
                  ${detailProduct.price}
                </h3>
                <h3 className="text-gray-600 mt-3 text-xl">
                  Rating: {detailProduct.rating.rate} (
                  {detailProduct.rating.count} reviews)
                  <br />
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      color={
                        index < Math.floor(detailProduct.rating.rate)
                          ? "gold"
                          : "gray"
                      }
                    />
                  ))}
                </h3>

                <h2 className="text-gray-600 mt-3 text-2xl font-bold ">
                  {detailProduct.category}
                </h2>
                <p className="text-gray-600 object-contain mt-3 text-sm">
                  {detailProduct.description}
                </p>
                {/* <h2 className="text-gray-600 mt-4 font-bold text-2xl">
                  Rating: {detailProduct.rating.rate} (
                  {detailProduct.rating.count} reviews)
                </h2> */}
                

                <button
                  onClick={() => addToCart(detailProduct)}
                  className=" bg-blue-500 text-white w-[100px] h-10 px-2 py-1 rounded mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DetailComponent;
