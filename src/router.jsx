import Home from "./pages/Home.jsx";
import AsyncRoute from "preact-async-route";

const Router = () => {
    return (
        <Router>
            <Home path="/" />
            <AsyncRoute
                path="/product"
                getComponent={() => import('./pages/Product.jsx').then(module => module.default)}
                loading={() => <div>Loading...</div>}
            />
        </Router>
    );
}