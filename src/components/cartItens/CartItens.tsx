import { useState } from 'react';
import { Container } from './styles';
import minus from '../../assets/minus.svg';
import more from '../../assets/more.svg';
import trashcan from '../../assets/trashcan.svg';

const data = [
	{
		id: 1,
		title: 'Viúva Negra',
		price: 9.99,
		image: 'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
	},
	{
		id: 2,
		title: 'Shang-chi',
		price: 30.99,
		image: 'https://www.imagemhost.com.br/images/2022/07/10/shang-chi.png',
	},
];

export default function CartItens() {
	const [cartData, setCartData] = useState(data);

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value);
	}

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
							{cartData.map(({ id, title, price, image }) => (
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
											<img src={minus} className='minusIcon' />
											<input type='number' disabled />
											<img src={more} className='moreIcon' />
										</div>
									</td>
									<td className='subTotalContainer'>
										<div className='subTotalContent'>
											<h1>{formatCurrency(price)}</h1>
										</div>
									</td>
									<td className='trashcanContainer'>
										<div className='trashcanContent'>
											<img src={trashcan} />
										</div>
									</td>
								</tr>
							))}
						</tbody>

						<tbody className='mobileTBodyContainer'>
							{cartData.map(({ id, title, price, image }) => (
								<tr key={id} className='purchaseItemContainer'>
									<td className='imgContainer'>
										<div className='imgContent'>
											<img src={image} className='mobileImage' />
										</div>

										<div className='infoContent'>
											<h2>{title}</h2>
											<div className='quantityContent'>
												<img src={minus} className='minusIcon' />
												<input type='number' disabled />
												<img src={more} className='moreIcon' />
											</div>
										</div>
									</td>

									<td className='priceAndSubTotalContainer'>
										<div className='priceContent'>
											<h2>{formatCurrency(price)}</h2>
											<img src={trashcan} className='trashcan' />
										</div>

										<div className='subTotalContent'>
											<h2 className='subtotalLabel'>SUBTOTAL</h2>
											<h2 className='subtotal'>{formatCurrency(price)}</h2>
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
									<button>FINALIZAR PEDIDO</button>
								</div>

								<div className='totalContainer'>
									<h1 className='totalLabel'>TOTAL</h1>
									<h1 className='totalPrice'>R$ 40,98</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
