import { useState } from 'react';
import { Link } from 'react-router-dom';
import emptyCart from '../../assets/emptyCart.svg';
import { Container } from './styles';

export default function EmptyCart() {
	const [cartData, setCartData] = useState([]);
	return (
		<Container>
			<div className='cartContainer'>
				<div className='cartContent'>
					<div className='cartSvgContainer'>
						<h1>Parece que não há nada por aqui :(</h1>
						<img src={emptyCart} />
					</div>
					<Link to={'/home'} type='button' className='returnLink'>
						VOLTAR
					</Link>
				</div>
			</div>
		</Container>
	);
}
