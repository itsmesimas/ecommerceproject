import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { api } from '../../services/api';
import { Container } from './styles';
import cartIcon from '../../assets/cartIcon.svg';
import { useCart } from '../../hook/useCart';

type ProductsType = {
	id: number;
	title: string;
	price: number;
	image: string;
	amount: number;
};
type CartItemsAmount = {
	[key: number]: number;
};

export default function Catalog() {
	const [loading, setLoading] = useState<boolean>(true);
	const [products, setProducts] = useState<ProductsType[]>([]);
	const [productQuantity, setProductQuantity] = useState<number>(0);
	const { addProduct, cart } = useCart();

	const cartItemsAmount = cart.reduce((sumAmount, product) => {
		sumAmount[product.id] = product.amount;
		return sumAmount;
	}, {} as CartItemsAmount);

	const pacmanLoaderSettings = {
		color: 'var(--white)',
	};

	async function getproducts() {
		try {
			const { data } = await api.get('/products');

			setProducts(data.products);
			setLoading(false);
		} catch (err) {
			console.error(err);
		}
	}

	function handleAddProduct(id: number) {
		addProduct(id);
	}

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value);
	}

	useEffect(() => {
		getproducts();
	}, []);

	return (
		<Container>
			{loading ? (
				<PacmanLoader {...pacmanLoaderSettings} />
			) : (
				<div className='catalogContainer'>
					<div className='catalogContent'>
						{products.map(({ id, image, price, title }) => (
							<div className='cardContainer' key={id}>
								<div className='cardContent'>
									<img src={image} />
									<h2>{title}</h2>
									<h1>{formatCurrency(price)}</h1>
									<button className='cardAddButton' type='button' onClick={() => handleAddProduct(id)}>
										<img src={cartIcon} className='cartIcon' />
										<p className='productQuantity'>{cartItemsAmount[id] || 0}</p>
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
