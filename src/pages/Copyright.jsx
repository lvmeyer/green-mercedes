import Layout from "../components/Layout.jsx";

const Copyright = () => {
    return (
        <Layout>
            <section className="container">
                <h1>Copyright / Marques</h1>
                <p>
                    La société ci-dessous est le prestataire à l'origine des parties de ces pages Internet concernant les services relatifs au véhicule de Mercedes me connect et Mercedes me assist, ainsi que leurs fonctions de base (par ex. connexion, profil, boîte de réception, paramètres, véhicules associés) :
                </p>
                <ul>
                    <li>
                        Mercedes-Benz AG
                    </li>
                    <li>
                        Mercedesstraße 137
                    </li>
                    <li>
                        70327 Stuttgart
                    </li>
                    <li>
                        Allemagne
                    </li>
                    <li>
                        Téléphone : +49 711 17 0
                    </li>
                    <li>
                        E-mail :
                        <a href="mailto:dialog@daimler.com">
                         dialog@daimler.com
                        </a>
                    </li>
                </ul>
                <p>
                    Représenté par le directoire :
                    Ola Källenius (Président), Jörg Burzer, Renata Jungo Brüngger, Sajjad Khan, Sabine Kohleisen, Harald Wilhelm, Markus Schäfer, Britta Seeger
                </p>
                <p>
                    Numéro d'inscription au registre du commerce : Stuttgart HRB 19360
                </p>
                <p>
                    Numéro de TVA : DE 81 25 26 315
                </p>
                <p>
                    Numéro d'identification à la TVA : DE 81 25 26 315
                </p>
            </section>
        </Layout>
    );
}

export default Copyright;