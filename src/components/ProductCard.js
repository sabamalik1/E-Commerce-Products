import React from "react";
import {Link} from 'react-router-dom'

function ProductCard({ product}) {
  return (
    <div className="max-w-[500px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 flex flex-row">
<div className="border p-2 w-full h-[500px] flex flex-col px-2 py-2 rounded shadow-md mb-4">
      <p className="text-gray-600">{product.id}</p>
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600 truncate mt-3">${product.price}</p>
      <p className="text-gray-600 truncate mt-3">{product.category}</p>
      <p className="text-gray-600 truncate mt-3">{product.description}</p>
      <img className="w-full h-48 object-contain mt-4 " src={product.image} alt={product.title} />

      <Link to={`/detailcomponent/${product.id}`}
        className=" bg-blue-500 text-white w-[100px] h-10 px-2 py-1 rounded mt-3"
        
      >
        Show Detail
      </Link>
      {/* <button className='bg-blue-500 text-white w-[100px] h-10 px-2 py-1 rounded mt-3'>
            Show Detail
          </button> */}
    </div>
    </div>
    
  );
}

export default ProductCard;
