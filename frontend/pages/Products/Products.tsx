import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

type Product = {
    createdAt: string;
    description: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    updatedAt: string;
    __v: number;
    _id: string;
};

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        axios
            .get("/api/v1/products/")
            .then((req) => {
                console.log(req.data.data);
                setProducts(req.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <>
            {products.map((p) => (
                <ProductCard
                  name={p.name}
                  price={p.price}
                  quantity={p.quantity}
                  key={p._id}
                  _id={p._id}
                  image={p.image}
                  description={p.description}
                  createdAt={p.createdAt}
                  updatedAt={p.updatedAt}
                  />
            ))}
        </>
    );
};

export default Products;
