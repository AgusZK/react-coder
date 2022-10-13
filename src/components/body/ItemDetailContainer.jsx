import React, { useEffect, useState } from 'react';
import { products } from '../../mock/productMock';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
	const [prod, setProd] = useState({});

	const { id } = useParams();

	useEffect(() => {
		const traerProducto = () => {
			return new Promise((res, rej) => {
				const producto = products.find((prod) => prod.id === Number(id));
				setTimeout(() => {
					res(producto);
				}, 100);
			});
		};
		traerProducto()
			.then((res) => {
				setProd(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	return (
		<div>
			<ItemDetail prod={prod} />
		</div>
	);
};

export default ItemDetailContainer;
