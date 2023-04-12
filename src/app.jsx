import AsyncRoute from "preact-async-route";
import Router from "preact-router";
import '@picocss/pico';
import './app.css';

import Home from "./pages/Home.jsx";
export function App() {
	return (
		<Router>
			<Home path="/" />
			<AsyncRoute
				path="/product"
				getComponent={() => import('./pages/Product.jsx').then(module => module.default)}
				loading={() => <div>Loading...</div>}
			/>
			<AsyncRoute
				path="/products"
				getComponent={() => import('./pages/Products.jsx').then(module => module.default)}
				loading={() => <div>Loading...</div>}
			/>
			<AsyncRoute
				path="/legal/copyright"
				getComponent={() => import('./pages/Copyright.jsx').then(module => module.default)}
				loading={() => <div>Loading...</div>}
			/>
		</Router>
	);
}
