import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;

	.catalogContainer {
		max-width: 960px;
		width: 100%;
		height: 100%;

		.catalogContent {
			margin-top: 49px;
			width: 100%;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 16px;

			.cardContainer {
				width: 310px;
				height: 305px;
				border-radius: 4px;
				background: var(--white);

				.cardContent {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					margin: 10px 11px;

					img {
						width: 147px;
						height: 188px;
					}

					h2 {
						font-size: 12px;
						font-weight: bold;
						margin-top: 7px;
					}

					h1 {
						font-size: 16px;
						font-weight: bold;
						margin-top: 2px;
					}

					.cardAddButton {
						display: flex;
						justify-content: center;
						align-items: center;
						max-width: 287px;
						width: 100%;
						height: 40px;
						margin-top: 8px;
						border-radius: 4px;
						background: var(--blue);
						color: var(--white);
						font-size: 12px;
						font-weight: bold;
						border: none;

						img {
							width: 11px;
							height: 11px;
						}
						.productQuantity {
							margin-left: 3.4px;
							font-size: 12px;
							font-weight: 400;
						}

						.buttonLabel {
							margin-left: 12px;
							font-size: 12px;
							font-weight: bold;
						}
					}
				}
			}
		}
	}

	@media (max-width: 985px) {
		.catalogContainer {
			.catalogContent {
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}
	@media (max-width: 680px) {
		.catalogContainer {
			.catalogContent {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}
`;
