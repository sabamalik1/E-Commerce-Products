import React from "react";
import {Link} from 'react-router-dom'

function ProductCard({ product}) {
  return (
    <div >
<div>
<img className="w-full h-48 object-contain mt-4 " src={product.image} alt={product.title} />
      {/* <p className="text-gray-600">{product.id}</p> */}
      <h2 className="text-lg font-semibold">{product.title}</h2>
      {/* <p className="text-gray-600 truncate mt-3">${product.price}</p> */}
      <p className="text-gray-600 truncate mt-3">{product.category}</p>
      {/* <p className="text-gray-600 truncate mt-3">{product.description}</p> */}
      

      <Link to={`/detailcomponent/${product.id}`}
        className=" bg-blue-500 text-white w-[100px] h-10 px-2 py-1 rounded mt-16"
        
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
