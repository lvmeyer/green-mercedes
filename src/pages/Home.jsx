import Layout from "../components/Layout.jsx";
import voiturehome from '../assets/cars/voiturehome.avif';
import voitureblanche from '../assets/cars/voitureblanche.avif';
import arrierevoiture from '../assets/cars/arrierevoiture.avif';
import interieurvoiture from '../assets/cars/interieurvoiture.avif';



const Home = () => {
    return (
        <Layout>
            <div className="home">
                <h2>Homepage</h2>
                <img src={voiturehome} class=""/>
                <img src={voitureblanche} class=""/>
                <img src={arrierevoiture} class=""/>
                <img src={interieurvoiture} class=""/>
            </div>
        </Layout>
    );
}

export default Home;