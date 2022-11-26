import { useState } from 'react';
import { Container } from './styles';
import minus from '../../assets/minus.svg';
import more from '../../assets/more.svg';
import trashcan from '../../assets/trashcan.svg';
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/useCart';
import { ProductType } from '../../types';
import { formatCurrency } from '../../utils/formatCurrency';

export default function CartItens() {
	const { cart, removeProduct, updateProductAmount, removeAllProducts } = useCart();
	const products = cart.map((product) => ({
		...product,
		subTotal: product.price * product.amount,
	}));

	function handleProductIncrement(product: ProductType) {
		const increment = { ...product, id: product.id, amount: product.amount + 1 };
		updateProductAmount(increment);
	}

	function handleProductDecrement(product: ProductType) {
		const decrement = {
			...product,
			id: product.id,
			amount: product.amount - 1,
		};
		updateProductAmount(decrement);
	}

	function handleRemoveProduct(id: number) {
		removeProduct(id);
	}

	const total = formatCurrency(
		cart.reduce((sumTotal, product) => {
			sumTotal += product.price * product.amount;
			return sumTotal;
		}, 0),
	);

	return (
		<Container>
			<div className='cartContainer'>
				<div className='cartContent'>
					<table>
						<thead>
							<tr>
								<th className='productTitle'>PRODUTO</th>
								<th className='qtdTitle'>QTD</th>
								<th className='subTotalTitle'>SUBTOTAL</th>
							</tr>
						</thead>

						<tbody className='webTBodyContainer'>
							{products.map(({ id, title, price, image, amount, subTotal }) => (
								<tr key={id}>
									<td className='imgContainer'>
										<div className='imgContent'>
											<img src={image} className='image' />
											<div className='infoContent'>
												<h2>{title}</h2>
												<h1>{formatCurrency(price)}</h1>
											</div>
										</div>
									</td>
									<td className='quantityContainer'>
										<div className='quantityContent'>
											<button
												disabled={amount <= 1}
												type='button'
												className='minusIcon'
												onClick={() => handleProductDecrement({ id, title, price, image, amount })}
											>
												<img src={minus} />
											</button>
											<input type='text' disabled value={amount} />
											<button
												type='button'
												className='moreIcon'
												onClick={() => handleProductIncrement({ id, title, price, image, amount })}
											>
												<img src={more} />
											</button>
										</div>
									</td>
									<td className='subTotalContainer'>
										<div className='subTotalContent'>
											<h1>{formatCurrency(subTotal)}</h1>
										</div>
									</td>
									<td className='trashcanContainer'>
										<div className='trashcanContent'>
											<button onClick={() => handleRemoveProduct(id)}>
												<img src={trashcan} />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>

						<tbody className='mobileTBodyContainer'>
							{products.map(({ id, title, price, image, amount, subTotal }) => (
								<tr key={id} className='purchaseItemContainer'>
									<td className='imgContainer'>
										<div className='imgContent'>
											<img src={image} className='mobileImage' />
										</div>

										<div className='infoContent'>
											<h2>{title}</h2>
											<div className='quantityContent'>
												<button
													disabled={amount <= 1}
													type='button'
													className='minusIcon'
													onClick={() => handleProductDecrement({ id, title, price, image, amount })}
												>
													<img src={minus} />
												</button>
												<input type='text' readOnly value={amount} />
												<button
													type='button'
													className='moreIcon'
													onClick={() => handleProductIncrement({ id, title, price, image, amount })}
												>
													<img src={more} />
												</button>
											</div>
										</div>
									</td>

									<td className='priceAndSubTotalContainer'>
										<div className='priceContent'>
											<h2>{formatCurrency(price)}</h2>
											<button onClick={() => handleRemoveProduct(id)}>
												<img src={trashcan} className='trashcan' />
											</button>
										</div>

										<div className='subTotalContent'>
											<h2 className='subtotalLabel'>SUBTOTAL</h2>
											<h2 className='subtotal'>{formatCurrency(subTotal)}</h2>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<div className='finishPurchaseButtonContainer'>
						<div className='finishPurchaseButtonContent'>
							<div className='finishPurchaseAndTotal'>
								<div className='buttonContainer'>
									<Link to='/checkout' onClick={() => removeAllProducts()} className='finishLink'>
										FINALIZAR PEDIDO
									</Link>
								</div>

								<div className='totalContainer'>
									<h1 className='totalLabel'>TOTAL</h1>
									<h1 className='totalPrice'>{total}</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
