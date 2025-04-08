import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Product from "../../types/Product";
import { toast } from "react-toastify";
import { Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LinkOutlined } from "@mui/icons-material";

const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		axios
			.get("/api/v1/products/")
			.then((req) => {
				setProducts(req.data.data);
				toast.success(
					`Successfully fetched ${req.data.data.length} Products`
				);
			})
			.catch((err) => {
				console.error(err);
				toast.error("Error occured!");
			});
	}, []);
	return (
		<Stack divider={<Divider flexItem />} spacing={4}>
			{products.map((p) => (
				<ProductCard
					name={p.name}
					price={p.price}
					quantity={p.quantity}
					key={p._id}
					_id={p._id}
					description={p.description}
					createdAt={p.createdAt}
					updatedAt={p.updatedAt}
				/>
			))}
			<Link to={"/create"}>
				<Typography variant="h4">
					<LinkOutlined /> Create Product
				</Typography>
			</Link>
		</Stack>
	);
};

export default Products;
