import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
}
