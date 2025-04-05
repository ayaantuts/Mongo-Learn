const Product = require("../models/product.model");

const getProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({
			message: "Successfully fetched!",
			data: products,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const postProducts = async (req, res) => {
	try {
		const { description, name, price, quantity } = req.body;
		if (
			[description, name].some(
				(field) => field.trim() == ""
			)
		)
			return res.status(403).json({ message: "All fields are required" });

		const product = await Product.create(req.body);
		res.status(200).json({ message: "Successfully saved!", data: product });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = {
	getProducts,
	postProducts,
};
