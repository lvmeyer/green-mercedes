import Layout from "../components/Layout.jsx";
import intro_video from '../assets/videos/home/intro.mp4'
import {lazy, Suspense} from "preact/compat";
import '../assets/css/home.css';
const Home = () => {
    const CarsList = lazy(() => import('../components/CarsList.jsx'));
    const NewsList = lazy(() => import('../components/NewsList.jsx'));
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
                        <source src={intro_video} type="video/mp4" />
                    </video>
                    <figcaption className="home-figcaption">
                        <h1>Mercedes-Benz</h1>
                        <p>The best or nothing for all customers</p>
                    </figcaption>
                </figure>
            </section>

            <section className="container" id="news">
                <h3>Actualités</h3>
                <Suspense fallback={<article aria-busy={true}></article>}>
                    <NewsList />
                </Suspense>
            </section>

            <hr />

            <section className="container" id="products">
                <h3>Nos modèles</h3>
                <Suspense fallback={<article aria-busy={true}></article>}>
                    <CarsList />
                </Suspense>
            </section>

            <section aria-label="Subscribe example">
                <div className="container">
                    <article>
                        <hgroup>
                            <h2>NewsLetter</h2>
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

            <dialog>
                <article>
                    <header>
                        <a href="#close" aria-label="Close" className="close"></a>
                        Modal title
                    </header>
                    <p>
                        Nunc nec ligula a tortor sollicitudin dictum in vel enim.
                        Quisque facilisis turpis vel eros dictum aliquam et nec turpis.
                        Sed eleifend a dui nec ullamcorper.
                        Praesent vehicula lacus ac justo accumsan ullamcorper.
                    </p>
                </article>
            </dialog>

        </Layout>
    );
}

export default Home;