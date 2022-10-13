import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
	return (
		<div className="card">
			<img src={prod.imagen} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{prod.nombre}</h5>
				<p className="card-text">${prod.precio}</p>
				<Link to={`/prod/${prod.id}`} className="btn btn-primary">
					Ver detalle
				</Link>
			</div>
		</div>
	);
};

export default Item;
