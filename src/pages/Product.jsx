import Layout from "../components/Layout.jsx";
import Image from "../components/Image.jsx";
import CarsService from "../services/cars.service.js";
import {useEffect, useState} from "preact/hooks";
import PocketbaseService from "../services/pocketbase.service.js";
import {Cog, LucideShoppingCart} from "lucide-preact";
import {render} from "preact";
import '../assets/css/product.css';



const Product = ({ id }) => {
    const [car, setCar] = useState(null);

    const createModal = () => {
        //Create a NewsDialog modal component with the record
        import("../components/MeetingDialog.jsx").then(({default: MeetingDialog}) => {
            const modal = document.createElement("div");
            document.body.appendChild(modal);
            const close = () => {
                modal.remove();
            };
            console.log("open")
            const dialog = <MeetingDialog open={true} onClose={close} carId={car.id} />;
            render(dialog, modal);
        });
    }

    useEffect(async () => {
        const data = await CarsService.getCar(id);
        //generate fake data
        data.year = 2020;
        data.fuel = "Electrique";
        data.gearbox = "Automatique";
        data.seats = Math.floor(Math.random() * 5) + 2;
        data.doors = Math.floor(Math.random() * 3) + 2;
        data.cylinders = Math.floor(Math.random() * 4) + 2;
        data.power = Math.floor(Math.random() * 100) + 100;
        data.horsepower = Math.floor(Math.random() * 100) + 100;
        data.kilometers = Math.floor(Math.random() * 100000) + 10000;
        data.description = "La Mercedes-Benz est une voiture haut de gamme qui allie élégance, performance et sécurité. Les modèles récents sont équipés de technologies de pointe pour offrir une expérience de conduite exceptionnelle. Les moteurs puissants et économes en carburant, ainsi que les systèmes de suspension sophistiqués, permettent une conduite confortable sur les routes les plus difficiles. L'intérieur de la Mercedes-Benz est luxueux et spacieux, offrant une expérience de conduite agréable. Les options de personnalisation sont nombreuses, avec des choix de matériaux de qualité supérieure, de la technologie avancée et des caractéristiques de sécurité de pointe. La Mercedes-Benz est également connue pour sa longévité, sa fiabilité et son entretien facile. En bref, la Mercedes-Benz est une voiture qui combine une esthétique raffinée, des performances exceptionnelles et une sécurité avancée pour offrir une expérience de conduite de première classe.";
        setCar(data);
    }, []);

    if (car === null) {
        return null;
    }

    return (
        <Layout>
            <section className="container" id="introduction">
                <hgroup>
                    <h1>{car.name}</h1>
                    <h2>La nouvelle {car.name} est la première voiture électrique de luxe de Mercedes-Benz. Elle est équipée d'une batterie de 107 kWh et d'un moteur électrique de 300 kW (408 ch). La {car.name} est la première voiture électrique de luxe de Mercedes-Benz. Elle est équipée d'une batterie de 107 kWh et d'un moteur électrique de 300 kW (408 ch).</h2>
                </hgroup>

                <Image
                    srcsets={[PocketbaseService.getPictureUrl(car, car.picture, { thumb: "1024x0" }), PocketbaseService.getPictureUrl(car, car.picture, { thumb: "480x0" })]}
                    src={PocketbaseService.getPictureUrl(car, car.picture)}
                    alt={car.name}
                />
            </section>

            <section className="container" id="informations">

                <div>
                    <h3>Informations</h3>
                    <blockquote>
                    {
                        car.description.split(".")
                        .filter((sentence) => sentence.length > 0)
                        .map((sentence, index) => {
                            return <p key={index}>{sentence}.</p>;
                        })
                    }
                    </blockquote>
                </div>
            </section>

            <section className="container" id="caracteristiques">
                <div className="grid">
                    <article>
                        <h3 className="group-title">
                            <Cog size={38} />
                            Caractéristiques
                        </h3>
                        <ul>
                            <li>Type : <strong>{car.categoryName}</strong></li>
                            <li>Année : <strong>{car.year}</strong></li>
                            <li>Carburant : <strong>{car.fuel}</strong></li>
                            <li>Boîte de vitesse : <strong>{car.gearbox}</strong></li>
                            <li>Nombre de places : <strong>{car.seats}</strong></li>
                            <li>Nombre de portes : <strong>{car.doors}</strong></li>
                            <li>Nombre de cylindres : {car.cylinders}</li>
                            <li>Nombre de chevaux : {car.horsepower} ch</li>
                            <li>Nombre de kilomètres : {car.kilometers} km</li>
                        </ul>
                    </article>

                    <article>
                        <hgroup>
                            <h3 className="group-title">
                                <LucideShoppingCart size={38} />
                                Achat
                            </h3>
                            <h4>{car.price} €</h4>
                        </hgroup>
                        <p>
                            Vous souhaitez acheter cette voiture ? Contactez-nous au 01 23 45 67 89 ou par mail à <a href="mailto:mercedes-benz.fr">mercedes-benz.fr</a>.
                        </p>
                        <p>
                            Vous pouvez également nous rendre visite au 1 rue de la Mercedes, 75001 Paris.
                            Ouvert du lundi au vendredi de 9h à 18h.
                        </p>
                        <p>
                            Ou bien encore, vous pouvez nous contacter via notre formulaire de contact.
                        </p>
                        <button onClick={createModal}>Prendre rendez-vous</button>
                    </article>
                </div>
            </section>

        </Layout>
    );
}

export default Product;