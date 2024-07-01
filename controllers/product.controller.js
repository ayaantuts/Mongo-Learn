const Product = require('../models/product.model');

const getProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({ message: 'Successfully fetched!', data: products });
	} catch (error) {
		res.status(500).json({ message: error.message });
	};
}

module.exports = {
	getProducts
}