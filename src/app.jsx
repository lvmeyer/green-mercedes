import AsyncRoute from "preact-async-route";
import Router, {route} from "preact-router";
import '@picocss/pico';
import './app.css';

import Home from "./pages/Home.jsx";
import RouteLoader from "./components/RouteLoader.jsx";
export function App() {
	return (
		<Router>
			<Home path="/" />
			<Home path="/products" scrollTo="products" />
			<Home path="/news" scrollTo="news" />
			<AsyncRoute
				path="/products/:id"
				getComponent={() => import('./pages/Product.jsx').then(module => module.default)}
				loading={() => <RouteLoader />}
			/>
			<AsyncRoute
				path="/legal/copyright"
				getComponent={() => import('./pages/Copyright.jsx').then(module => module.default)}
				loading={() => <RouteLoader />}
			/>
		</Router>
	);
}
