import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { api } from '../../services/api';
import { Container } from './styles';
import cart from '../../assets/cart.svg';

type ProductsType = {
	id: number;
	title: string;
	price: number;
	image: string;
};

export default function Catalog() {
	const [loading, setLoading] = useState<boolean>(true);
	const [productsData, setProductsData] = useState<ProductsType[]>([]);
	const [productQuantity, setProductQuantity] = useState<number>(0);

	const pacmanLoaderSettings = {
		color: 'var(--white)',
	};

	async function getProductsData() {
		try {
			const { data } = await api.get('/');

			setProductsData(data);
			setLoading(false);
		} catch (err) {
			console.error(err);
		}
	}

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value);
	}

	useEffect(() => {
		getProductsData();
	}, []);

	return (
		<Container>
			{loading ? (
				<PacmanLoader {...pacmanLoaderSettings} />
			) : (
				<div className='catalogContainer'>
					<div className='catalogContent'>
						{productsData.map(({ id, image, price, title }) => (
							<div className='cardContainer' key={id}>
								<div className='cardContent'>
									<img src={image} />
									<h2>{title}</h2>
									<h1>{formatCurrency(price)}</h1>
									<button className='cardAddButton'>
										<img src={cart} className='cartIcon' />
										<p className='productQuantity'>{productQuantity}</p>
										<p className='buttonLabel'>ADICIONAR AO CARRINHO</p>
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</Container>
	);
}
