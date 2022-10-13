import React from 'react';
import { NavLink } from 'react-router-dom';

const List = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Inicio</NavLink>
				</li>
				<li>
					<NavLink to="/categoria/remeras">Remeras</NavLink>
				</li>
				<li>
					<NavLink to="/categoria/zapatillas">Zapatillas</NavLink>
				</li>
				<li>
					<NavLink to="/categoria/pantalones">Pantalones</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default List;
