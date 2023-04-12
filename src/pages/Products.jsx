import {useEffect, useState} from "preact/hooks";
import CarsService from "../services/cars.service.js";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(async () => {
        const data = await CarsService.getCars();
        setProducts(data);
        setLoading(false);
    }, []);

    return (
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
    );
}

export default Products;