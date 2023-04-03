import Layout from "../components/Layout.jsx";
import Image from "../components/Image.jsx";
import '../assets/css/home.css';

import voiturehome from '../assets/cars/voiturehome.avif';
import voitureblanche from '../assets/cars/voitureblanche.avif';
import arrierevoiture from '../assets/cars/arrierevoiture.avif';
import interieurvoiture from '../assets/cars/interieurvoiture.avif';
import coffre from '../assets/cars/coffre.avif';
import interieurvoiture2 from '../assets/cars/interieurvoiture2.avif';
import portiere from '../assets/cars/portiere.avif';
import roue from '../assets/cars/roue.avif';

import '../assets/css/home.css';




const Home = () => {
    return (
        <Layout>
            <div className="home">
                <div className="content">
                    <img src={voitureblanche} class="img-home"/>
                    <Image src={coffre} alt="voiture blanche" />
                    <div className="text-top-left">L'aube d'une nouvelle ère à la sensualité époustouflante.</div>
                </div>
                <p className="description"> Pour les trajets courts, privilégiez la marche ou le vélo. Au quotidien, prenez les transports en commun. Pensez à covoiturer. <br />#SeDéplacerMoinsPolluer
                </p>
                <p className="description-card">Design extérieur</p>
                <p className="description-card">L'état d'un nouvel art. <br/>
                Le luxe automobile ultime : l’ergonomie électrique permet un espace aux passagers renouvelé. Du faite de la flexibilité du modelisme, l’espace est plus aéré et moins conventionnel, tout en gardant une élégance à couper le souffle. En outre, la calandre à design étoilé Mercedes-Benz met en avant le design futuriste de l'EQS.</p>
                <div className="design">
                    <img src={voitureblanche} class="img" loading="lazy"/>
                    <div className="design-car">
                        <img src={interieurvoiture} class="img2" loading="lazy"/>
                        <img src={arrierevoiture} class="img2" loading="lazy"/>
                    </div>
                </div>              
                <img src={voiturehome} />
                <table>
                    <td></td>
                    <td></td>
                    <tr>
                        <td><img src={portiere} className="img-tab" loading="lazy" /></td>
                        <td><p className="desc-tab">Détail exclusif : les poignées de porte affleurantes.</p></td>
                    </tr>
                    <tr>
                        <td><p className="desc-tab">De nouvelles jantes pour de nouveaux chemins </p></td>
                        <td><img src={roue} className="img-tab"/></td>
                    </tr>
                </table>
                <img src={interieurvoiture2} />
                
            </div>
        </Layout>
    );
}

export default Home;