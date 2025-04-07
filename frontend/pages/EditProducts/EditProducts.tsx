// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// const EditProducts = () => {
//     const [product, setProduct] = useState<Product>({
//         name: "",
//         createdAt: "",
//         updatedAt: "",
//         description: "",
//         image: "",
//         price: 0,
//         quantity: 0,
//         __v: 0,
//         _id: "",
//     });
//     const params = useParams();
//     const id = params.id;
//     useEffect(() => {
//         axios
//             .get("/api/v1/products/" + id)
//             .then((req) => {
//                 toast.success(req.data.message);
//                 setProduct(req.data.data);
//             })
//             .catch((err) => {
//                 toast.error(err.message);
//                 console.error(err);
//             });
//     }, [id]);
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const name = (
//             e.currentTarget.elements.namedItem("name") as HTMLInputElement
//         ).value;
//         const price = (
//             e.currentTarget.elements.namedItem("price") as HTMLInputElement
//         ).value;
//         const quantity = (
//             e.currentTarget.elements.namedItem("quantity") as HTMLInputElement
//         ).value;
//         const description = (
//             e.currentTarget.elements.namedItem(
//                 "description"
//             ) as HTMLInputElement
//         ).value;
//         const image = (
//             e.currentTarget.elements.namedItem("image") as HTMLInputElement
//         ).value;

//         axios
//             .put("/api/v1/products/" + id, {
//                 name,
//                 price,
//                 quantity,
//                 description,
//                 image,
//             })
//             .then((req) => toast.success(req.data.message))
//             .catch((err) => {
//                 toast.error("Something went wrong");
//                 console.error(err);
//             });
//     };
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name: </label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={product.name}
// 						onInput={
// 							(e) => setProduct({...product, name: (e.target as HTMLInputElement).value})
// 						}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="price">Price: </label>
//                     <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value={product.price}
// 						onInput={
// 							(e) => setProduct({...product, price: parseInt((e.target as HTMLInputElement).value)})
// 						}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="quantity">Quantity: </label>
//                     <input
//                         type="number"
//                         id="quantity"
//                         name="quantity"
//                         value={product.quantity}
// 						onInput={
// 							(e) => setProduct({...product, quantity: parseInt((e.target as HTMLInputElement).value)})
// 						}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="description">Description: </label>
//                     <input
//                         type="text"
//                         id="description"
//                         name="description"
//                         value={product.description}
// 						onInput={
// 							(e) => setProduct({...product, description: (e.target as HTMLInputElement).value})
// 						}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="image">Image: </label>
//                     <input
//                         type="text"
//                         id="image"
//                         name="image"
//                         value={product.image}
// 						onInput={
// 							(e) => setProduct({...product, image: (e.target as HTMLInputElement).value})
// 						}
//                     />
//                 </div>
//                 <button type="submit">Edit Product</button>
//             </form>
//             <Link to="/">Back to Products</Link>
//         </div>
//     );
// };

// type Product = {
//     createdAt: string;
//     description: string;
//     image: string;
//     name: string;
//     price: number;
//     quantity: number;
//     updatedAt: string;
//     __v: number;
//     _id: string;
// };

// export default EditProducts;

import React from 'react';

const EditProducts = () => {
  return (
      <></>
  )
}

export default EditProducts;