import { Container } from './styles';
import cartBag from '../../assets/cartBag.svg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<Container>
			<header>
				<Link to={'/home'} className='tag'>
					WeMovies
				</Link>

				<Link to={'/cart'} className='cartContainer'>
					<div className='cartInfo'>
						<div className='cartTitle'>
							<h2>Meu Carrinho</h2>
						</div>

						<div className='cartItens'>
							<p>0 itens</p>
						</div>
					</div>

					<img src={cartBag} alt='ícone sacola' />
				</Link>
			</header>
		</Container>
	);
}
