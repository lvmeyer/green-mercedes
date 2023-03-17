import {Link} from 'preact-router';

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="container-fluid">
                    <ul>
                        <li>
                            <strong>Merco</strong>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/product">
                                Product
                            </Link>
                        </li>
                        <li>
                            <a href="#" role="button">
                                Button
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;