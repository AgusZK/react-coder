import { serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { useState } from 'react';
import { cartContext } from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';

const Checkout = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [repeatEmail, setRepeatEmail] = useState('');
	const [telefono, setTelefono] = useState('');
	const [orderId, setOrderId] = useState('');
	const { cart, finalPrice, buy, msgError } = useContext(cartContext);
	const total = finalPrice(cart);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			email != repeatEmail ||
			email === '' ||
			name === '' ||
			telefono === '' ||
			lastName === ''
		) {
			msgError();
		} else {
			const orden = {
				buyer: { name, lastName },
				items: cart,
				total: total,
				date: serverTimestamp(),
			};
			const collectionOrdenes = collection(db, 'ordenes');
			addDoc(collectionOrdenes, orden)
				.then((res) => {
					setOrderId(res.id);
				})
				.catch((error) => {
					console.log(error);
				});
			buy();
		}
	};
	const handleChangeName = (e) => {
		setName(e.target.value);
	};
	const handleChangeLastName = (e) => {
		setLastName(e.target.value);
	};
	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleChangeRepeatEmail = (e) => {
		setRepeatEmail(e.target.value);
	};
	const handleChangePhone = (e) => {
		setTelefono(e.target.value);
	};

	if (orderId) {
		return (
			<div className="ordenDeCompra">
				<h2>
					Gracias por su compra! su codigo de seguimiento es:
					<span> {orderId}</span>
				</h2>
			</div>
		);
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="mt-3">
				<div className="form-group">
					<label>Nombre</label>
					<input
						type="text"
						className="form-control"
						placeholder="Ingrese su nombre"
						name="nombre"
						onChange={handleChangeName}
					/>
				</div>

				<div className="form-group">
					<label>Apellido</label>
					<input
						type="text"
						className="form-control"
						placeholder="Ingrese su apellido"
						name="apellido"
						onChange={handleChangeLastName}
					/>
				</div>

				<div className="form-group">
					<label>Numero de Telefono</label>
					<input
						type="text"
						className="form-control"
						placeholder="2215938023"
						name="telefono"
						onChange={handleChangePhone}
					/>
				</div>
				<div className="form-group">
					<label>Correo Electronico</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="pablo@gmail.com"
						name="correo electronico"
						onChange={handleChangeEmail}
					/>
				</div>

				<div className="form-group">
					<label>Confirme su correo</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Ingrese su correo nuevamente"
						name="email"
						onChange={handleChangeRepeatEmail}
					/>
				</div>

				<button type="submit" className="btn btn-primary mt-3">
					Enviar
				</button>
			</form>
		</div>
	);
};

export default Checkout;
