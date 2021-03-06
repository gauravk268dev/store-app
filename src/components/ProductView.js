import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';
import products from './data/products';
import "./style/productView.css";

const ProductView = (props) => {
	const [items, setItems] = useState(...products);

	return (
		<div className="container">
			{items.map(item =>
						<ProductCard image={item.image} title={item.title} price={item.price} description={item.description} />
				)
			}
		</div>
	);
};

export default ProductView;
