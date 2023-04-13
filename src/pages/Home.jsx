import Layout from "../components/Layout.jsx";
import {lazy, Suspense} from "preact/compat";
import '../assets/css/home.css';
import {Car, CarIcon, Mail, NewspaperIcon} from "lucide-preact";
const Home = ({ scrollTo }) => {
    const CarsList = lazy(() => import('../components/CarsList.jsx'));
    const NewsList = lazy(() => import('../components/NewsList.jsx'));

    if (scrollTo) {
        const element = document.getElementById(scrollTo);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Layout>

            <section onMouseEnter={e => e.target.querySelector('video').play()}>
                <figure className="home-figure min-vh-screen">
                    <video
                        className="home-video"
                        muted
                        loop
                        preload="none"
                        playsInline
                    >
                        <source src="https://green-mercedes.b-cdn.net/intro_video.webm" type="video/webm" />
                    </video>
                    <figcaption className="home-figcaption">
                        <h1>Mercedes-Benz</h1>
                        <p>The best or nothing for all customers</p>
                    </figcaption>
                </figure>
            </section>

            <section className="container" id="news">
                <h3 className="home-title"><NewspaperIcon size={40}/>Actualités</h3>
                <Suspense fallback={<article aria-busy={true}></article>}>
                    <NewsList />
                </Suspense>
            </section>

            <hr />

            <section className="container" id="products">
                <h3 className="home-title"><CarIcon size={40}/> Nos modèles</h3>
                <Suspense fallback={<article aria-busy={true}></article>}>
                    <CarsList />
                </Suspense>
            </section>

            <section className="container" id="annotations">
                <details>
                    <summary>
                        Mentions légales et annotations
                    </summary>
                    <p>
                        [a] Prix conseillé constructeur. Prix client TTC clé en main conseillé pour le véhicule au tarif en vigueur à la date de consultation.
                        Selon les pays, les versions commercialisées de nos véhicules peuvent différer, certains équipements peuvent ne pas être disponibles (en série, en option ou en accessoire). Veuillez-vous rapprocher de votre Distributeur Agréé pour plus de précisions.
                    </p>
                </details>
            </section>

            <section aria-label="NewsLetter">
                <div className="container">
                    <article>
                        <hgroup>
                            <h2 className="home-title"> <Mail size={40} />NewsLetter</h2>
                            <h3>Abonnez-vous gratuitement et recevez les dernières actualités de Mercedes-Benz</h3>
                        </hgroup>
                        <form className="grid">
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                placeholder="Prénom / Nom"
                                aria-label="Prénom / Nom"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Adresse Email"
                                aria-label="Adresse Email"
                                required
                            />
                            <button type="submit">S'inscrire</button>
                        </form>
                    </article>
                </div>
            </section>

        </Layout>
    );
}

export default Home;