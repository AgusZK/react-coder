import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './body.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);

	const { categoria } = useParams();
	useEffect(() => {
		const collectionProd = collection(db, 'productos');
		const ref = categoria
			? query(collectionProd, where('categoria', '==', categoria))
			: collectionProd;

		getDocs(ref)
			.then((res) => {
				const products = res.docs.map((prod) => {
					return {
						id: prod.id,
						...prod.data(),
					};
				});
				setItems(products);
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
