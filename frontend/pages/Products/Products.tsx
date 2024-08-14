import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  createdAt: string,
  name: string,
  price: number,
  quantity: number,
  updatedAt: string,
  __v: number,
  _id: string
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
      axios
        .get('http://localhost:3000/api/products/')
        .then((req) => {
          console.log(req.data.data);
          setProducts(req.data.data);
        })
        .catch((err) => {
          console.error(err);
        })
  }, []);
  return (
    <>
      {products.map(p => <li key={p._id}>{p.name}</li>)}
    </>
  )
}

export default Products;