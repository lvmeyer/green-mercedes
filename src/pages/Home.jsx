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
                <h2>Homepage</h2>
                <img src={voitureblanche} class=""/>
                <p className="home-text"> Pour les trajets courts, privilégiez la marche ou le vélo. Au quotidien, prenez les transports en commun. Pensez à covoiturer. <br />#SeDéplacerMoinsPolluer
                </p>
                <img src={voiturehome} class=""/>

                <img src={coffre} class=""/>
                <img src={interieurvoiture2} class=""/>
                <img src={portiere} class=""/>
                <img src={roue} class=""/>


                <div className="design">
                    <img src={voitureblanche} class="img"/>
                    <div className="design-car">
                        <img src={interieurvoiture} class="img2"/>
                        <img src={arrierevoiture} class="img2"/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;