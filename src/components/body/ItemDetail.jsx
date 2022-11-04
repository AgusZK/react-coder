import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';

const ItemDetail = ({ prod }) => {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		addToCart,
	} = useContext(cartContext);
	const quantity = getItemQuantity(prod.id);

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
					{quantity === 0 ? (
						<button className="btn" onClick={() => addToCart(prod)}>
							Agregar al carrito
						</button>
					) : (
						<div className="add-item">
							<button
								className="add"
								onClick={() => increaseCartQuantity(prod.id)}
							>
								+
							</button>
							<p>
								<span style={{ fontSize: '20px' }} className="m-1">
									{quantity}{' '}
								</span>
								En el carrito
							</p>
							<button
								className="remove"
								onClick={() => decreaseCartQuantity(prod.id)}
							>
								-
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
