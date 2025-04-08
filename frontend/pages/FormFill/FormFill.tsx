import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Product from "../../types/Product";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Edit } from "@mui/icons-material";

const FormFill = ({ isNew = false }: { isNew: boolean }) => {
	const params = useParams();
	const _id: string | undefined = params.id;
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [description, setDescription] = useState("");
	useEffect(() => {
		if (!isNew) {
			axios
				.get(`/api/v1/products/${_id}`)
				.then((req) => {
					const prod: Product = req.data.data;
					setName(prod.name);
					setPrice(prod.price);
					setQuantity(prod.quantity);
					setDescription(prod.description);
					toast.success(req.data.message);
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.response.data.message);
				});
		}
	}, []);
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isNew)
			axios
				.post("/api/v1/products/", {
					name,
					description,
					price,
					quantity,
				})
				.then((req) => {
					console.log(req.data);
					toast.success(req.data.message);
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.response.data.message);
				});
		else
			axios
				.put(`/api/v1/products/${_id}`, {
					name,
					description,
					price,
					quantity,
				})
				.then((req) => {
					console.log(req.data);
					toast.success(req.data.message);
				})
				.catch((err) => {
					console.log(err);
					toast.error(err.response.data.message);
				});
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<TextField
						required
						margin="dense"
						placeholder="Name"
						label="Name"
						fullWidth
						type="text"
						id="name"
						name="name"
						value={name}
						onInput={(e: FormEvent<HTMLInputElement>) =>
							setName((e.target as HTMLInputElement).value)
						}
					/>
				</div>
				<div>
					<TextField
						required
						margin="dense"
						placeholder="Price"
						label="Price"
						fullWidth
						type="number"
						id="price"
						name="price"
						value={price}
						onInput={(e: FormEvent<HTMLInputElement>) =>
							setPrice(
								parseInt((e.target as HTMLInputElement).value)
							)
						}
					/>
				</div>
				<div>
					<TextField
						required
						margin="dense"
						placeholder="Quantity"
						label="Quantity"
						fullWidth
						type="number"
						id="quantity"
						name="quantity"
						value={quantity}
						onInput={(e: FormEvent<HTMLInputElement>) =>
							setQuantity(
								parseInt((e.target as HTMLInputElement).value)
							)
						}
						/>
				</div>
				<div>
					<TextField
						required
						margin="dense"
						placeholder="Description"
						label="Description"
						fullWidth
						type="text"
						id="description"
						name="description"
						value={description}
						multiline
						rows={10}
						onInput={(e: FormEvent<HTMLInputElement>) =>
							setDescription((e.target as HTMLInputElement).value)
						}
					/>
				</div>
				<Button variant="contained" sx={{ marginY: 4 }} startIcon={<Edit />} type="submit">
					{isNew ? "Create" : "Edit"} Product
				</Button>
			</form>
		</div>
	);
};

export default FormFill;
