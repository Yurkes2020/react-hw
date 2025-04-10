import {useEffect, useState} from "react";
import {getProducts} from "../servises/api.servise.tsx";
import {ProductType} from "../models/typeProduct.tsx";
import {ProductComponent} from "./product-component.tsx";

export const ProductsComponent = () => {
	const [products, setProducts] = useState<ProductType[]>([])

	useEffect(() => {
		const loadProducts = async (): Promise<void> => {
			const data: ProductType[]  = await getProducts();
			setProducts(data);
		};

		loadProducts().catch((err) => {
			console.error("Помилка при завантаженні:", err);
		});
	}, []);

return <div className="container mx-auto p-4">
	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
		{products.length > 0 ? products.map((product: ProductType) => {
				return <ProductComponent product={product} key={product.id}/>
			}) :
			<h2>Немає продуктів</h2>}</div>
</div>
}