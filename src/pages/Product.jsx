import Layout from "../components/Layout.jsx";
import Image from "../components/Image.jsx";


import arriere from '../assets/images/product/voiturerouge.avif';
import interieur from '../assets/images/product/voiturerouge1.avif';
import roues from '../assets/images/product/voiturerouge2.avif';
import interieur2 from '../assets/images/product/voiturerouge3.avif';

import '../assets/css/product.css';



const Product = () => {
    return (
        <Layout>
            <div className="product">
                <div className="content">
                    <img src={interieur2} class="img-product" loading="lazy"/>
                    <div className="text-top-left">L'aube d'une nouvelle ère à la sensualité époustouflante.</div>
                </div>
                <p className="description-card">Design</p>
                <p className="description-card">L'état d'un nouvel art. <br/>
                Le luxe automobile ultime : l’ergonomie électrique permet un espace aux passagers renouvelé. Du faite de la flexibilité du modelisme, l’espace est plus aéré et moins conventionnel, tout en gardant une élégance à couper le souffle. En outre, la calandre à design étoilé Mercedes-Benz met en avant le design futuriste de l'EQS.</p>
                <div className="design">
                    <img src={interieur} class="img" loading="lazy"/>
                    <div className="design-car">
                        <img src={arriere} class="img2" loading="lazy"/>
                        <img src={roues} class="img2" loading="lazy"/>
                    </div>
                </div>
                
                
            </div>
        </Layout>
    );
}

export default Product;