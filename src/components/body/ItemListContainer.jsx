import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/productMock';
import ItemList from './ItemList';
import './body.css';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);

	const { categoria } = useParams();

	useEffect(() => {
		const traerProductos = () => {
			return new Promise((res, rej) => {
				const prodFiltrados = products.filter(
					(prod) => prod.categoria === categoria
				);
				const prod = categoria ? prodFiltrados : products;
				setTimeout(() => {
					res(prod);
				}, 100);
			});
		};
		traerProductos()
			.then((res) => {
				setItems(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [categoria]);

	return (
		<div>
			<ItemList items={items} />
		</div>
	);
};
export default ItemListContainer;
