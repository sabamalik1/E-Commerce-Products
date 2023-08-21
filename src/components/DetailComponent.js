import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailComponent({cart,addToCart}) {
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
            <div className="max-w-[500px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 flex flex-row">
              <div className="border p-2 w-full h-[500px] flex flex-col px-2 py-2 rounded shadow-md mb-4">
                <p className="text-gray-600">{detailProduct.id}</p>
                <h2 className="text-lg font-semibold">{detailProduct.title}</h2>
                <p className="text-gray-600 truncate mt-3">
                  ${detailProduct.price}
                </p>
                <p className="text-gray-600 truncate mt-3">
                  {detailProduct.category}
                </p>
                <p className="text-gray-600 truncate mt-3">
                  {detailProduct.description}
                </p>
                <img
                  className="w-full h-48 object-contain mt-4 "
                  src={detailProduct.image}
                  alt={detailProduct.title}
                />
                <button onClick={()=>addToCart(detailProduct)}
                className=" bg-blue-500 text-white w-[100px] h-10 px-2 py-1 rounded mt-3">Add to Cart</button>
                {/* <Link to={`/detailcomponent/${product.id}`}
        className=" bg-blue-500 text-white w-[100px] h-10 px-2 py-1 rounded mt-3"
        
      >
       Add to Cart
      </Link> */}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DetailComponent;
