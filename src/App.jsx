import './components/header/NavBar';
import NavBar from './components/header/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/body/ItemListContainer';
import { useState } from 'react';
import ItemDetailContainer from './components/body/ItemDetailContainer';

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
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
