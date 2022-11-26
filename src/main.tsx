import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from 'miragejs';
import data from '../data.json';

createServer({
	models: {
		product: Model,
	},

	seeds(server) {
		server.db.loadData({ products: data });
	},

	routes() {
		this.namespace = 'api';

		this.get(
			'/products',
			() => {
				return this.schema.all('product');
			},
			{ timing: 500 },
		);

		this.get(
			`/products/:id`,
			(schema, request) => {
				const id = request.params.id;

				return schema.db.products.find(id);
			},
			{ timing: 500 },
		);
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
