import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import Product from "../../types/Product";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ProductCard = (product: Product) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	};
	const { createdAt, description, name, price, quantity, updatedAt, _id } =
		product;

	const navigate = useNavigate();
	const handleEditClick = () => {
		navigate(`/edit/${_id}`);
	};

	const handleDeleteClick = () => {
		axios
			.delete(`/api/v1/products/${_id}`)
			.then((req) => {
				toast.success(req.data.message);
			})
			.catch((err) => {
				toast.error(err.response.data.message);
				console.error(err);
			});
		document.querySelector(`[data-id='${_id}']`)?.remove();
	};

	return (
		<Card data-id={_id}>
			<CardContent>
				<Typography
					variant="body2"
					gutterBottom
					sx={{ color: "text.secondary" }}
				>
					Created on: {formatDate(createdAt)} | Updated on:{" "}
					{formatDate(updatedAt)}
				</Typography>
				<Typography variant="h2" component="div">
					{name}
				</Typography>
				<Typography variant="h5" component="div">
					{description}
				</Typography>
				<Typography variant="body1" sx={{ color: "text.secondary" }}>
					Price: {price} | Quantity: {quantity}
				</Typography>
				<CardActions>
					<Button
						size="small"
						variant="outlined"
						color="info"
						startIcon={<Edit />}
						onClick={handleEditClick}
					>
						Edit
					</Button>
					<Button
						size="small"
						variant="contained"
						color="error"
						startIcon={<Delete />}
						onClick={handleDeleteClick}
					>
						Delete
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
