import Layout from "../components/Layout.jsx";
import '../assets/css/home.css';

import voiturehome from '../assets/cars/voiturehome.avif';
import voitureblanche from '../assets/cars/voitureblanche.avif';
import arrierevoiture from '../assets/cars/arrierevoiture.avif';
import interieurvoiture from '../assets/cars/interieurvoiture.avif';
import coffre from '../assets/cars/coffre.avif';
import interieurvoiture2 from '../assets/cars/interieurvoiture2.avif';
import portiere from '../assets/cars/portiere.avif';
import roue from '../assets/cars/roue.avif';


const Home = () => {
    return (
        <Layout>
            <div className="home">
                <h2>Nos voitures</h2>
                <img src={voitureblanche} class=""/>
                <p className="description"> Pour les trajets courts, privilégiez la marche ou le vélo. Au quotidien, prenez les transports en commun. Pensez à covoiturer. <br />#SeDéplacerMoinsPolluer
                </p>
                <img src={interieurvoiture2} class=""/>

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
                <img src={voiturehome} />
                <table>
                    <td></td>
                    <td></td>
                    <tr>
                        <td><img src={portiere} className="img-tab" /></td>
                        <td><p className="desc-tab">Détail exclusif : les poignées de porte affleurantes.</p></td>
                    </tr>
                    <tr>
                        <td><p className="desc-tab">De nouvelles jantes pour de nouveaux chemins </p></td>
                        <td><img src={roue} className="img-tab" /></td>
                    </tr>
                </table>
                <img src={interieurvoiture2} />
               
               

                
            </div>
        </Layout>
    );
}

export default Home;