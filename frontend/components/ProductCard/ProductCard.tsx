const ProductCard = (product : Product) => {
	const { createdAt, description, image, name, price, quantity, updatedAt, _id } = product;
    return (
		<div className="product" data-id={_id}>
			<img src={image} alt={name} />
			<div className="product-info">
				<h2>{name}</h2>
				<p>{description}</p>
				<p>Price: ${price}</p>
				<p>Quantity: {quantity}</p>
				<button>Edit</button>
				<button>Delete</button>
				<span>
					Created At: {createdAt} | Updated At: {updatedAt}
				</span>
			</div>
		</div>
	);
};

type Product = {
    createdAt: string;
    description: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    updatedAt: string;
    _id: string;
};

export default ProductCard;
