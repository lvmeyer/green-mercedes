import {Link} from "preact-router";
import {Facebook, Instagram, Twitter} from "lucide-preact";
import "../assets/css/footer.css"

const Footer = () => {
    return (
        <footer className="footer-container">
            <small>
                <Link href="/legal/copyright">© 2023 Mercedes-Benz AG. Tous droits réservés.</Link>
            </small>

            <div id="social-icons" className="footer-social">
                <a href="https://www.facebook.com/mercedesbenz" target="_blank" rel="noopener noreferrer">
                    <Facebook />
                </a>
                <a href="https://twitter.com/mercedesbenz" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </a>
                <a href="https://www.instagram.com/mercedesbenz/" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                </a>
            </div>
        </footer>
    )
}

export default Footer;