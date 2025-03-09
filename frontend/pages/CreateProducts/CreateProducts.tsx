import React from "react";

const CreateProducts = () => {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
        const price = (e.currentTarget.elements.namedItem('price') as HTMLInputElement).value;
        const quantity = (e.currentTarget.elements.namedItem('quantity') as HTMLInputElement).value;
        const description = (e.currentTarget.elements.namedItem('description') as HTMLInputElement).value;
        const image = (e.currentTarget.elements.namedItem('image') as HTMLInputElement).value;

        const resp = await fetch('http://localhost:3000/api/products/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				price,
				quantity,
				description,
				image,
			}),
		});
		const data = await resp.json();
		console.log(data);
	};
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" />
                </div>
                <div>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" name="quantity" />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" name="description" />
                </div>
                <div>
                    <label htmlFor="image">Image: </label>
                    <input type="text" id="image" name="image" />
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProducts;
