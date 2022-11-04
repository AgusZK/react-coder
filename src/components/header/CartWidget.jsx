import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { cartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
	const { cartQuantity } = useContext(cartContext);

	return (
		<div>
			<FontAwesomeIcon className="icon" icon={faShoppingCart}></FontAwesomeIcon>
			{cartQuantity === 0 ? (
				<></>
			) : (
				<div className="contador">{cartQuantity}</div>
			)}
		</div>
	);
};

export default CartWidget;
