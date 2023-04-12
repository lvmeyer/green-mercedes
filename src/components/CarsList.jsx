import PocketbaseService from "../services/pocketbase.service.js";
import CarsService from "../services/cars.service.js";
import {useEffect, useState} from "preact/hooks";
import Image from "./Image.jsx";

const CarsList = () => {
    const [cars, setCars] = useState([]);
    useEffect(async () => {
        const data = await CarsService.getCars();
        setCars(data);
    }, []);
    return (
        <div className="home-cars-grid">
            {cars.map((record) => (
                <div className="home-cars-grid-item">
                    <Image
                        src={PocketbaseService.getPictureUrl(record, record.picture)}
                        alt={record.name}
                    />
                    <div className="home-cars-grid-item-container">
                        <h4>{record.name}</h4>
                        <p>A partir de {record.price} € </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CarsList;