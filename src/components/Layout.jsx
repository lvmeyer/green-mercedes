import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="min-vh-screen">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;