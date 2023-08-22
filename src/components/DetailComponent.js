import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailComponent({ cart, addToCart }) {
  // const params = useParams()
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setDetailProduct(await response.json());
      setLoading(false);
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
              <div className="left-[100px] h-[600px] mt-[-90px] w-[400px] flex">
                <img
                  className="w-[100%] h-[100%] ml-16 object-contain  "
                  src={detailProduct.image}
                  alt={detailProduct.title}
                />
              </div>
              <div className="p-20 h-[600px] w-[500px] mt-[-140px] ml-[120px] object-contain">
                {/* <p className="text-gray-600">{detailProduct.id}</p> */}
                <h1 className="text-3xl font-semibold mt-28">
                  {detailProduct.title}
                </h1>
                <p className="text-gray-600 text-lg mt-6">
                  ${detailProduct.price}
                </p>
                
                <p className="text-gray-600 mt-4 text-2xl font-bold ">
                  {detailProduct.category}
                </p>
                <p className="text-gray-600 object-contain mt-4 text-sm">
                  {detailProduct.description}
                </p>

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
