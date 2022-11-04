import './components/header/NavBar';
import NavBar from './components/header/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/body/ItemListContainer';
import { useState } from 'react';
import ItemDetailContainer from './components/body/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/categoria/:categoria" element={<ItemListContainer />} />
					<Route path="/prod/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				<ToastContainer></ToastContainer>
			</BrowserRouter>
		</>
	);
}

export default App;
