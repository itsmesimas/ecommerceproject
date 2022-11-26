import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;

	.cartContainer {
		display: flex;
		flex-direction: column;
		background: var(--white);
		border-radius: 4px;
		max-width: 960px;
		width: 100%;
		align-items: center;
		justify-content: center;
		margin-top: 49px;

		.cartContent {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			border-bottom: 1px solid var(--background);

			table {
				border-radius: 4px;
				padding: 24px 24px 0 24px;
				width: 100%;

				thead {
					width: 100%;
					tr {
						width: 100%;
						th {
							text-align: start;
							font-size: 14px;
							font-weight: bold;
							color: var(--grey);
						}

						.productTitle {
							width: 50%;
						}

						.qtdTitle {
							width: 20%;
						}

						.subTotalTitle {
							width: 20%;
						}
					}
				}

				.mobileTBodyContainer {
					display: none;
				}

				.webTBodyContainer {
					tr {
						justify-content: center;
						align-items: center;
						text-align: start;

						.imgContainer {
							.imgContent {
								display: flex;
								justify-content: flex-start;
								align-items: center;
								max-width: 230px;
								width: 100%;

								img {
									width: 89px;
									height: 114px;
								}

								.infoContent {
									margin-left: 52px;

									h2 {
										font-size: 14px;
										font-weight: bold;
									}

									h1 {
										font-size: 16px;
										font-weight: bold;
									}
								}
							}
						}

						.quantityContainer {
							justify-content: center;
							align-items: center;
							text-align: start;

							input {
								width: 62px;
								height: 26px;
								border-radius: 4px;
								border: 1px solid var(--grey);
								padding: 3.5px 0 3.5px 16px;
								color: var(--background);
							}

							.minusIcon,
							.moreIcon {
								border: none;
								width: 18px;
								height: 18px;
								cursor: pointer;
								display: flex;
								align-items: center;

								&:disabled {
									cursor: not-allowed;
								}
							}

							.minusIcon {
								margin-right: 11px;
							}
							.moreIcon {
								margin-left: 11px;
							}

							.quantityContent {
								display: flex;
								justify-content: flex-start;
								align-items: center;
							}
						}

						.subTotalContainer {
							h1 {
								font-weight: bold;
								font-size: 16px;
							}
						}

						.trashcanContainer {
							.trashcanContent {
								display: flex;
								justify-content: flex-start;
								align-items: center;

								button {
									display: flex;
									justify-content: center;
									align-items: center;
									border: none;

									img {
										width: 18px;
										height: 18px;
									}
								}
							}
						}
					}

					tr > td {
						padding-top: 21px !important;
					}
				}
			}

			.finishPurchaseButtonContainer {
				width: 100%;

				.finishPurchaseButtonContent {
					margin: 21px 24px 24px 24px;
					border-top: 1px solid var(--background);
					display: flex;
					justify-content: flex-start;
					align-items: center;

					.finishPurchaseAndTotal {
						display: flex;
						width: 100%;
						align-items: center;
						justify-content: space-between;
						margin-top: 21px;

						.buttonContainer {
							width: 100%;
							display: flex;
							justify-content: flex-start;
							align-items: center;

							.finishLink {
								display: flex;
								justify-content: center;
								align-items: center;
								width: 235px;
								height: 40px;
								color: var(--white);
								background: var(--blue);
								border: none;
								border-radius: 4px;
								font-weight: bold;
								font-size: 14px;
								text-decoration: none;
							}
						}

						.totalContainer {
							display: flex;
							justify-content: flex-end;
							align-items: center;
							width: 100%;

							h1 {
								font-weight: bold;
								font-size: 14px;
							}

							.totalLabel {
								margin-right: 16px;
								color: var(--grey);
							}
						}
					}
				}
			}
		}
	}

	@media (max-width: 960px) {
		margin: 0 16px;
	}

	@media (max-width: 768px) {
		.cartContainer {
			.cartContent {
				table {
					padding: 0 16px 0 16px;

					thead,
					.webTBodyContainer {
						display: none;
					}

					.mobileTBodyContainer {
						display: flex;
						flex-direction: column;

						.purchaseItemContainer {
							display: flex;
							width: 100%;
							height: 82px;
							justify-content: space-between;
							margin-top: 16px;

							.imgContainer {
								display: flex;

								.imgContent {
									margin-right: 16px;

									.mobileImage {
										width: 64px;
										height: 82px;
									}
								}

								.infoContent {
									display: flex;
									flex-direction: column;
									justify-content: flex-start;
									align-items: flex-start;

									h2 {
										font-size: 14px;
										font-weight: bold;
										color: var(--background);
									}

									.quantityContent {
										display: flex;
										justify-content: center;
										align-items: center;
										margin-top: 22px;

										.minusIcon,
										.moreIcon {
											border: none;
											cursor: pointer;
											display: flex;
											justify-content: center;
											align-items: center;

											&:disabled {
												cursor: not-allowed;
											}
										}

										.minusIcon {
											margin-right: 11px;
										}

										.moreIcon {
											margin-left: 11px;
										}

										input {
											width: 59px;
											height: 26px;
											padding: 3.5px 0 3.5px 12px;
										}
									}
								}
							}

							.priceAndSubTotalContainer {
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								align-items: flex-start;
								max-width: 120px;

								.priceContent {
									width: 100%;
									display: flex;

									h2 {
										font-size: 16px;
										font-weight: bold;
										color: var(--background);
									}

									button {
										display: flex;
										justify-content: center;
										align-items: center;
										border: none;
										margin-left: 16px;
									}
								}

								.subTotalContent {
									width: 100%;
									display: flex;
									flex-direction: column;
									align-items: flex-end;

									.subtotalLabel {
										font-size: 12px;
										font-weight: bold;
										color: var(--grey);
									}

									.subtotal {
										font-size: 16px;
										font-weight: bold;
										color: var(--background);
									}
								}
							}
						}
					}
				}

				.finishPurchaseButtonContainer {
					width: 100%;

					.finishPurchaseButtonContent {
						.finishPurchaseAndTotal {
							width: 100%;
							flex-direction: column-reverse;
							align-items: center;

							.buttonContainer {
								width: 100%;

								.finishLink {
									width: 100%;
								}
							}

							.totalContainer {
								justify-content: flex-end;
								align-items: center;
								width: 100%;

								h1 {
									color: var(--background);
									font-weight: bold;
								}

								.totalLabel {
									font-size: 12px;
								}

								.totalPrice {
									font-size: 24px;
								}
							}
						}
					}
				}
			}
		}
	}
`;
