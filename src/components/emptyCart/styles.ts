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
			max-width: 447px;
			width: 100%;
			margin: 64px 0;

			.cartSvgContainer {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-bottom: 1px solid var(--background);
				width: 100%;

				h1 {
					font-weight: bold;
					font-size: 20px;
				}

				img {
					margin-top: 32px;
				}
			}

			.returnLink {
				display: flex;
				justify-content: center;
				align-items: center;
				text-decoration: none;
				margin-top: 32px;
				border-radius: 4px;
				color: var(--white);
				background: var(--blue);
				max-width: 180px;
				width: 100%;
				height: 40px;
				border: none;
				font-weight: bold;
				font-size: 14px;
			}
		}
	}

	@media (max-width: 960px) {
		margin: 0 16px;

		.cartContainer {
			.cartContent {
				.cartSvgContainer {
					h1 {
						margin-top: 64px;
						text-align: center;
						width: 200px;
					}
				}
			}
		}
	}
`;
