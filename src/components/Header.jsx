import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <h1>SOCIAL NETWORK</h1>
            <p>for communicate</p>
            <nav>
                <Link className="nav-link" to="/">Главная</Link>
                <Link className="nav-link" to="/profile">Профиль</Link>
                <Link className="nav-link" to="/settings">Настройки</Link>
                <Link className="nav-link" to="/about">О проекте</Link>
            </nav>
        </header>
    )
}

export default Header;