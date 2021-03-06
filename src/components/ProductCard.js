import React from 'react';
import './style/productCard.css';

const ProductCard = ({image, title, price, description}) => {
	return (
		<div className="product-card">
			<div className="product-card-element">
				<img src={image}></img>
			</div>
			<div className="product-card-element">
				<p>Title: {title}</p>
				<p>Price: {price}</p>
				<p>Description: {description}</p>
			</div>
		</div>
	);
};

export default ProductCard;
