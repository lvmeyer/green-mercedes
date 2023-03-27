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
import { LazyLoadImage } from "react-lazy-load-image-component";
import lazy from 'preact-lazy';

const ToBeLazyLoaded = lazy(() => import('../lazyloading/ToBeLazyLoaded.jsx'));


const Home = () => {
    return (
        <Layout>
            <div className="home">
                <div className="content">
                    <img src={voitureblanche} class="img-home"/>
                    <div className="text-top-left">L'aube d'une nouvelle ère à la sensualité époustouflante.</div>
                </div>
                <p className="description"> Pour les trajets courts, privilégiez la marche ou le vélo. Au quotidien, prenez les transports en commun. Pensez à covoiturer. <br />#SeDéplacerMoinsPolluer
                </p>
               <ToBeLazyLoaded/>                
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
                        <td><img src={roue} className="img-tab"/></td>
                    </tr>
                </table>
                <img src={interieurvoiture2} />
                
            </div>
        </Layout>
    );
}

export default Home;