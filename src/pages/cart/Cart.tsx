import CartItens from '../../components/cartItens/CartItens';
import Checkout from '../../components/checkout/Checkout';
import EmptyCart from '../../components/emptyCart/EmptyCart';
import Header from '../../components/header/Header';
import { Container } from './styles';

export default function Cart() {
	return (
		<>
			<Header />
			<CartItens />
			<EmptyCart />
			<Checkout />
		</>
	);
}
