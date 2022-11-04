import React, { createContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
export const cartContext = createContext();

export const Data = ({ children }) => {
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem('productos') || '[]')
	);
	const cartQuantity = cart.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);
	useEffect(() => {
		localStorage.setItem('productos', JSON.stringify(cart));
	}, [cart]);
	const addToCart = (product) => {
		const newProduct = { ...product, quantity: 1 };
		setCart([...cart, newProduct]);
	};

	function getItemQuantity(id) {
		return cart.find((item) => item.id === id)?.quantity || 0;
	}

	function increaseCartQuantity(id) {
		setCart((currentItem) => {
			if (currentItem.find((item) => item.id === id) == null) {
				return [...currentItem, { id, quantity: 1 }];
			} else {
				return currentItem.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function decreaseCartQuantity(id) {
		setCart((currentItem) => {
			if (currentItem.find((item) => item.id === id)?.quantity === 1) {
				return currentItem.filter((item) => item.id !== id);
			} else {
				return currentItem.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function removeFromCart(id) {
		setCart((currentItem) => {
			return currentItem.filter((item) => item.id !== id);
		});
	}

	function finalPrice(items) {
		return items.reduce(
			(total, item) => item.precio * item.quantity + total,
			0
		);
	}

	function emptyCart() {
		setCart([]);
		localStorage.setItem('productos', JSON.stringify([]));
	}

	function buy() {
		setCart([]);
		localStorage.setItem('productos', JSON.stringify([]));
		toast.success('Ha realizado su compra con exito!', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	}
	function msgError() {
		toast.error('Error! Revise los campos y vuelva a completarlos', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	}

	return (
		<cartContext.Provider
			value={{
				cart,
				setCart,
				addToCart,
				getItemQuantity,
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				cartQuantity,
				finalPrice,
				buy,
				emptyCart,
				msgError,
			}}
		>
			{children}
		</cartContext.Provider>
	);
};
