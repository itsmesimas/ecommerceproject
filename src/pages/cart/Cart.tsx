import CartItens from '../../components/cartItens/CartItens';
import EmptyCart from '../../components/emptyCart/EmptyCart';
import { useCart } from '../../hook/useCart';

export default function Cart() {
	const { cart } = useCart();
	const cartSize = cart.length;

	return <>{cartSize > 0 ? <CartItens /> : <EmptyCart />}</>;
}
