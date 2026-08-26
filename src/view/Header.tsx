import "@/styles/header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">
                    <a
                        href="https://en.wikipedia.org/wiki/Metis_(mythology)"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        METIS
                    </a>
                </h1>
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a
                                href="https://github.com/simonstockinger/METIS"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
