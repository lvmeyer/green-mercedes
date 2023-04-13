import {useEffect, useState} from "preact/hooks";
import CarsService from "../services/cars.service.js";
import Layout from "../components/Layout.jsx";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(async () => {
        const data = await CarsService.getCars();
        setProducts(data);
        setLoading(false);
    }, []);

    return (<Layout>
        <div>
        <h1>Products</h1>
        {loading ? (
            <h2>Loading...</h2>
        ) : (
            <ul>
            {products.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))}
            </ul>
        )}
        </div>
        </Layout>
    );
}

export default Products;