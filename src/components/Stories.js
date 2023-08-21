// import React, { useEffect, useState } from "react";

// function Stories() {
//   let API = "https://hn.algolia.com/api/v1/search?query=html";
//   const [storiesApi, setStories] = useState([]);

//   const fetchApiData = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//     } catch (errors) {
//       console.log(errors);
//     }
//   };

//   useEffect(() => {
//     fetchApiData(API);
//   }, []);

//   return (
//     <>
//       <h1 className="w-[500px] h-[400px] top-6 absolute text-cyan-900 justify-items-center font-bold font-serif ml-10-f">
//         i use Stories api first time
//       </h1>
//       <ul>
//         {storiesApi.map((story) => {
//           <li key={story.objId}>
//             <a href={story.url} target="blank " rel="noopener noreferrer" >
//               {/* Displaying the story's title as the link text */}
//               {story.title}
//             </a>
//           </li>;
//         })}
//       </ul>
//     </>
//   );
// }

// export default Stories;

import React, { useEffect, useState } from "react";

function Stories() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    console.log(fetch)
    fetch('https://fakestoreapi.com/products/1')
      .then((res) => res.json())
      .then((data) => setProduct(data))
      
      .catch((error) => console.log(error));
  }, []);

  return (

    <div className="p-4">
      {/* this is for single product thehrefore no use here map function that deals with array */}
      <h1 className="text-2xl font-semibold mb-4">Product Information</h1>
      {product ? (
        <div className="bg-white rounded p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-blue-600 font-semibold">Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

    // <div>
    //   <h1>Stories</h1>
    //   <ul>
    //     {storiesApi.map((story, index) => (
    //       <li key={index}>
    //         <a href={story.url} target="_blank" rel="noopener noreferrer">
    //           {story.title}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default Stories;

