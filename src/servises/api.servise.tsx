import {ProductType} from "../models/typeProduct.tsx";

export const getProducts =async (): Promise<ProductType[]> => {
	const response = await fetch(import.meta.env.VITE_API_URL + "/products");

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	const data = await response.json();

	return data.products;
};