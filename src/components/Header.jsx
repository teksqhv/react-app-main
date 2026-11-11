import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext";

function Header() {
    const { theme, toggleTheme} = useTheme();

    return (
        <header className="header">
            <h1>SOCIAL NETWORK</h1>
            <p>for communicate</p>
            <nav>
                <Link className="nav-link" to="/">Главная</Link>
                <Link className="nav-link" to="/profile">Профиль</Link>
                <Link className="nav-link" to="/settings">Настройки</Link>
                <Link className="nav-link" to="/about">О проекте</Link>
                <Link className="nav-link" to="/weather">Погода</Link>
                <Link className="nav-link" to="/currency">Курс валют</Link>
                <button onClick={toggleTheme}>
                    {theme === "light" ? "white" : "dark"}
                </button>
            </nav>
        </header>
    )
}

export default Header;