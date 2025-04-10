import {ProductType} from "../models/typeProduct.tsx";

type ProductPropType = {
	product: ProductType
}

export const ProductComponent = ({product}: ProductPropType) => {
	return <div className="bg-white p-4 border rounded-lg shadow-lg mb-6">
		<img
			src={product.thumbnail}
			alt={product.title}
			className="w-full h-48 object-contain rounded-lg mb-4"
		/>
		<div className="flex justify-between items-start">
			<h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
			<p className="text-xl font-bold text-green-600">${product.price}</p>
		</div>
		<div className="flex items-center mt-2">
			<div className="flex text-yellow-500">
				{Array.from({length: 5}, (_, index) => (
					<span
						key={index}
						className={index < product.rating ? "text-yellow-500" : "text-gray-400"}
					>
              ★
            </span>
				))}
			</div>
			<p className="ml-2 text-sm text-gray-500">
				{product.discountPercentage > 0 ? `-${product.discountPercentage}%` : ""}
			</p>
		</div>
		<p className="mt-2 text-sm text-gray-600">Category: {product.category}</p>
		<p className="mt-2 text-sm font-semibold text-gray-700">
			{product.availabilityStatus === "In stock" ? (
				<span className="text-green-500">In Stock</span>
			) : (
				<span className="text-red-500">Out of Stock</span>
			)}
		</p>
		<p className="mt-4 text-sm text-gray-700">{product.description}</p>
	</div>
}