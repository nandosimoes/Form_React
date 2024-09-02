import "../../public/css/Header.css";

export function Header({ title }) {
    return (
        <header className="header">
            <div className="logo">ReactForm</div>
            <h1>{title}</h1>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
            <button className="contact-button">Fale Conosco</button>
        </header>
    );
}

