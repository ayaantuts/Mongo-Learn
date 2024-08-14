const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const { getProducts } = require('../controllers/product.controller');

router.get('/', getProducts);

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const product = await Product.findById(id);
		if (!product) {
			res.status(404).json({ message: `Product with id: ${id} not found` });
			return;
		}
		res.status(200).json({ message: `Successfully fetched product with id: ${id}`, data: product });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.post('/', async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(200).json({ message: 'Successfully saved!', data: product });
	} catch (error) {
		res.status(500).json({ message: error.message });
	};
});

router.put('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const product = await Product.findByIdAndUpdate(id, req.body);
		if (!product) {
			res.status(404).json({ message: `Product with id: ${id} not found` });
			return;
		}
		const updatedProduct = await Product.findById(id);
		res.status(200).json({ message: `Successfully updated product with id: ${id}`, data: updatedProduct });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const product = await Product.findByIdAndDelete(id);
		if (!product) {
			res.status(404).json({ message: `Product with id: ${id} not found` });
			return;
		}
		res.status(200).json({ message: `Successfully deleted product with id: ${id}` });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.delete('/destroy/', async (req, res) => {
	try {
		await Product.deleteMany({});
		res.status(200).json({ message: 'Successfully deleted all products' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;