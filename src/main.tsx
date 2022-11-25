import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from 'miragejs';
import { Products } from './server/server.js';

createServer({
	routes() {
		this.namespace = 'api';

		this.get(
			'/',
			() => {
				return Products;
			},
			{ timing: 1000 },
		);
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
