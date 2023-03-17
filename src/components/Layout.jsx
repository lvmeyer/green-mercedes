import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="container">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;