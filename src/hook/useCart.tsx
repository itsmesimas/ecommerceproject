import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import { ProductType } from '../types';

type CartProviderProps = {
	children: ReactNode;
};

type CartContextData = {
	cart: ProductType[];
	addProduct: (id: number) => Promise<void>;
	removeProduct: (id: number) => void;
	updateProductAmount: ({ id, amount, title, price }: ProductType) => void;
	removeAllProducts: () => void;
};

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useState<ProductType[]>(() => {
		const storagedCart = localStorage.getItem('@WeMovies:cart');

		if (storagedCart) {
			return JSON.parse(storagedCart);
		}

		return [];
	});

	const addProduct = async (id: number) => {
		try {
			const alreadyOnCart = cart.find((product) => product.id === id);

			if (!alreadyOnCart) {
				const { data: product } = await api.get<ProductType>(`/products/${id}`);

				if (product.amount > 0) {
					setCart([...cart, { ...product, amount: 1 }]);
					localStorage.setItem('@WeMovies:cart', JSON.stringify([...cart, { ...product, amount: 1 }]));

					return;
				} else {
					return console.error('Quantidade solicitada fora de estoque');
				}
			}

			if (alreadyOnCart) {
				const { data: product } = await api.get<ProductType>(`/products/${id}`);

				if (product.amount > alreadyOnCart.amount) {
					const updatedCart = cart.map((item) =>
						item.id === id
							? {
									...item,
									amount: Number(item.amount + 1),
							  }
							: item,
					);
					setCart(updatedCart);
					localStorage.setItem('@WeMovies:cart', JSON.stringify(updatedCart));

					return;
				} else {
					console.error('Quantidade solicitada fora de estoque');
				}
			}
		} catch {
			console.error('Erro na adição do produto');
		}
	};

	const removeProduct = (id: number) => {
		try {
			const productExists = cart.some((product) => product.id === id);

			if (!productExists) {
				console.error('Erro na remoção do produto');
				return;
			}

			const updatedCart = cart.filter((product) => product.id !== id);
			setCart(updatedCart);
			localStorage.setItem('@WeMovies:cart', JSON.stringify(updatedCart));
		} catch {
			console.error('Erro na remoção do produto');
		}
	};

	const updateProductAmount = async ({ id, amount }: ProductType) => {
		try {
			if (amount < 1) {
				console.error('Erro na alteração de quantidade do produto');
				return;
			}

			const { data: product } = await api.get<ProductType>(`/products/${id}`);
			const productAmount = product.amount;
			const stockNotAvailable = amount > productAmount;

			if (stockNotAvailable) {
				console.error('Quantidade solicitada fora de estoque');
				return;
			}

			const productExists = cart.some((product) => product.id === id);

			if (!productExists) {
				console.error('Erro na alteração de quantidade do produto');
				return;
			}

			const updatedCart = cart.map((product) => (product.id === id ? { ...product, amount: amount } : product));

			setCart(updatedCart);
			localStorage.setItem('@WeMovies:cart', JSON.stringify(updatedCart));
		} catch {
			console.error('Erro na alteração de quantidade do produto');
		}
	};

	const removeAllProducts = () => {
		setCart([]);
		localStorage.removeItem('@WeMovies:cart');
		window.location.reload();
	};

	return (
		<CartContext.Provider value={{ cart, addProduct, removeProduct, updateProductAmount, removeAllProducts }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart(): CartContextData {
	const context = useContext(CartContext);

	return context;
}
