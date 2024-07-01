const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const port = 3000;
const productRoutes = require('./routes/products.routes');
dotenv.config();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(port, () => {
			console.log(`Server is running on port http://localhost:${port}/`);
		});
		app.use('/api/products', productRoutes);
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB', error);
	});