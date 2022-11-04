import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';

const Cart = () => {
	const {
		cart,
		increaseCartQuantity,
		decreaseCartQuantity,
		emptyCart,
		finalPrice,
	} = useContext(cartContext);

	const total = finalPrice(cart);

	return (
		<div className="d-flex align-items-center flex-column">
			{cart.length > 0 ? (
				<div className="cartContainer">
					{cart.map((product) => {
						return (
							<div key={product.id} className="carrito">
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<img
										src={product.imagen}
										alt={product.nombre}
										style={{
											minWidth: '150px',
											maxWidth: '150px',
											maxHeight: '150px',
										}}
									/>
									<p
										style={{
											color: 'black',
											width: '200px',
											textAlign: 'center',
											justifyItems: 'center',
										}}
									>
										{product.nombre}
									</p>
								</div>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<button
										className="btn btn-primary"
										onClick={() => increaseCartQuantity(product.id)}
										style={{
											maxWidth: '32.4px',
											textAlign: 'center',
										}}
									>
										+
									</button>
									<p
										style={{
											fontSize: '20px',
											color: '#3C3744',
											margin: '10px',
										}}
									>
										{product.quantity}
									</p>
									<button
										className="btn btn-primary"
										onClick={() => decreaseCartQuantity(product.id)}
									>
										-
									</button>
								</div>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<p>${product.precio}</p>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div>
					<p className="d-flex align-self-center">Tu carrito esta vacio</p>
				</div>
			)}

			{cart.length === 0 ? (
				<></>
			) : (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div>
						<p
							style={{
								margin: '1.5rem',
								padding: '1rem',
								fontSize: '20px',
								border: '0.5px solid #0275d8',
							}}
						>
							Precio final: ${total}
						</p>
					</div>
					<Link className="btn btn-primary" to="/checkout">
						Checkout
					</Link>
					<button
						className="btn btn-primary bg-danger border-0 m-3"
						onClick={() => {
							emptyCart();
						}}
					>
						Vaciar carrito
					</button>
				</div>
			)}
		</div>
	);
};

export default Cart;
