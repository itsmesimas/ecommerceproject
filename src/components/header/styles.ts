import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 960px;
		width: 100%;

		.tag,
		h2,
		p {
			color: var(--white);
		}

		.tag {
			font-size: 20px;
			margin: 24.5px 0 0 10px;
			font-weight: bold;
			text-decoration: none;

			:hover {
				text-decoration: underline;
			}
		}

		h2 {
			font-size: 14px;
			font-weight: 600;
		}

		p {
			font-size: 12px;
		}

		.cartContainer {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 18px 10px 0 0;
			text-decoration: none;

			.cartInfo {
				display: flex;
				flex-direction: column;
				margin-right: 8px;

				.cartTitle {
					text-align: center;
				}

				.cartItens {
					display: flex;
					justify-content: flex-end;
					align-items: center;
				}
			}
		}

		@media (max-width: 375px) {
			.cartContainer {
				margin: 24.5px 8px 0 0;

				.cartTitle {
					display: none;
				}

				.cartItens {
					margin-right: 8px;
				}
			}
		}
	}
`;
