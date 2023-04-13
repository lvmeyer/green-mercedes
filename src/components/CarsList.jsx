import PocketbaseService from "../services/pocketbase.service.js";
import CarsService from "../services/cars.service.js";
import {useEffect, useState} from "preact/hooks";
import Image from "./Image.jsx";
import CategoriesList from "./CategoriesList.jsx";

const CarsList = () => {
    const [category, setCategory] = useState('all');
    const [cars, setCars] = useState([]);

    useEffect(async () => {
        const data = (category !== "all") ? await CarsService.getCarsByCategory(category) : await CarsService.getCars();
        setCars(data);
    }, [category]);

    const emitCategory = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className="home-products">
            <div style={{ width: "25%" }}>
                <CategoriesList handleClick={emitCategory} />
            </div>
            <div className="home-cars-grid" style={{ width: "75%" }}>
                {cars.map((record) => (
                    <div className="home-cars-grid-item">
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
                            <p>A partir de {record.price} € </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarsList;