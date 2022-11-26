import { Link } from 'react-router-dom';
import checkout from '../../assets/checkout.svg';
import { Container } from './styles';

export default function Checkout() {
	return (
		<Container>
			<div className='cartContainer'>
				<div className='cartContent'>
					<div className='cartSvgContainer'>
						<h1>Compra realizada com sucesso!</h1>
						<img src={checkout} />
					</div>
					<Link to={'/home'} className='returnLink'>
						VOLTAR
					</Link>
				</div>
			</div>
		</Container>
	);
}
