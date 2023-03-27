import {h} from 'preact';
// export must be default
import '../assets/css/home.css';
import arrierevoiture from '../assets/cars/arrierevoiture.avif';
import interieurvoiture from '../assets/cars/interieurvoiture.avif';
import coffre from '../assets/cars/coffre.avif';
import voitureblanche from '../assets/cars/voitureblanche.avif';



const Layout = ({ children }) => {
    return (
        <>
           <p className="description-card">Design extérieur</p>
            <p className="description-card">L'état d'un nouvel art. <br/>
            Le luxe automobile ultime : l’ergonomie électrique permet un espace aux passagers renouvelé. Du faite de la flexibilité du modelisme, l’espace est plus aéré et moins conventionnel, tout en gardant une élégance à couper le souffle. En outre, la calandre à design étoilé Mercedes-Benz met en avant le design futuriste de l'EQS.</p>
            <div className="design">
                <img src={voitureblanche} class="img"/>
                <div className="design-car">
                    <img src={interieurvoiture} class="img2"/>
                    <img src={arrierevoiture} class="img2"/>
                </div>
            </div>
        </>
    );
}

export default Layout;