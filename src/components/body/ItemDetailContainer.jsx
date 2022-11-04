import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDoc, doc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import { db } from '../../services/firebaseConfig';

const ItemDetailContainer = () => {
	const [prod, setProd] = useState({});

	const { id } = useParams();

	useEffect(() => {
		const collectionProd = collection(db, 'productos');
		const ref = doc(collectionProd, id);
		getDoc(ref)
			.then((res) => {
				setProd({
					id: res.id,
					...res.data(),
				});
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
