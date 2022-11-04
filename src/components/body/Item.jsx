import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';

const Item = ({ prod }) => {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		addToCart,
	} = useContext(cartContext);
	const quantity = getItemQuantity(prod.id);

	return (
		<div className="card">
			<img src={prod.imagen} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{prod.nombre}</h5>
				<p className="card-text">${prod.precio}</p>
				<Link to={`/prod/${prod.id}`} className="btn btn-primary">
					Ver detalle
				</Link>
				{quantity === 0 ? (
					<button
						className="btn btn-primary m-2"
						onClick={() => addToCart(prod)}
					>
						Agregar al carrito
					</button>
				) : (
					<div className="add-item">
						<button
							className="btn btn-primary mt-1"
							onClick={() => increaseCartQuantity(prod.id)}
						>
							+
						</button>
						<p className="text-muted">
							<span style={{ fontSize: '20px' }} className="p-1">
								{quantity}
							</span>
							En el carrito
						</p>
						<button
							className="btn btn-primary"
							onClick={() => decreaseCartQuantity(prod.id)}
						>
							-
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Item;
