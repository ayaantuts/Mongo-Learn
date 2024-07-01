const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide a name for this product'],
		},
		price: {
			type: Number,
			required: [true, 'Please provide a price for this product'],
			default: 0,
		},
		quantity: {
			type: Number,
			required: [true, 'Please provide a quantity for this product'],
			default: 0,
		},
		description: {
			type: String,
			required: false,
		},
		image: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;