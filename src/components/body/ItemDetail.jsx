import React from 'react';

const ItemDetail = ({ prod }) => {
	return (
		<div className="detailContainer">
			<img src={prod.imagen} alt="" />
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
					accusantium incidunt quidem fugiat, repellat laborum quia est ipsum
					laudantium ipsa natus quos voluptatum recusandae illum temporibus
					perspiciatis cumque dolorum eligendi.
				</p>
				<div>
					<h2>${prod.precio}</h2>
					<button>Agregar al carrito</button>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
