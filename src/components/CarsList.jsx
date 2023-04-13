import PocketbaseService from "../services/pocketbase.service.js";
import CarsService from "../services/cars.service.js";
import {useEffect, useState} from "preact/hooks";
import Image from "./Image.jsx";
import CategoriesList from "./CategoriesList.jsx";

const CarsList = () => {
    const numberOfItems = 6;
    const [carsPage, setCarsPage] = useState(1);
    const [category, setCategory] = useState('all');
    const [cars, setCars] = useState([]);

    useEffect(async () => {
        const data = await CarsService.getCarsByCategoryPaginated(category, carsPage, numberOfItems);
        if (carsPage > 1) {
            data.items = [...cars.items, ...data.items];
        }
        setCars(data);
    }, [category, carsPage]);

    const emitCategory = (e) => {
        setCategory(e.target.value);
        setCarsPage(1)
    }

    const loadMore = () => {
        setCarsPage(carsPage + 1)
    }

    return (
        <div className="home-products">
            <div style={{ width: "25%" }}>
                <CategoriesList handleClick={emitCategory} />
            </div>
            <div style={{ width: "75%" }} className="home-cars-flex-container">
                <div className="home-cars-grid">
                    {cars.items !== undefined && cars.items.map((record) => (
                        <div className="home-cars-grid-item" onClick={() => window.location.href = `/products/${record.id}`}>
                            <Image
                                src={PocketbaseService.getPictureUrl(record, record.picture, { thumb: "1000x0" })}
                                alt={record.name}
                                srcsets={[
                                    PocketbaseService.getPictureUrl(record, record.picture, { thumb: "800x0" }),
                                    PocketbaseService.getPictureUrl(record, record.picture, { thumb: "100x0" }),
                                ]}
                            />
                            <div className="home-cars-grid-item-container">
                                <h4>{record.name}</h4>
                                <p>A partir de <strong>{record.price} €</strong> </p>
                            </div>
                        </div>
                    ))}
                </div>
                {cars.totalPages > 1 && carsPage < cars.totalPages && <button className="secondary" onClick={loadMore}>Voir plus</button>}
            </div>
        </div>
    );
}

export default CarsList;