import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import { CartProvider } from './hook/useCart';
import { AppRoutes } from './Routes';
import { GlobalStyle } from './styles/global';

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<Header />
				<AppRoutes />
				<GlobalStyle />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
