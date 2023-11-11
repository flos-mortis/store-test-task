import React from "react"
import "./Header.scss"

const Header = () => {
    return (
        <header className="header">
            <ul className="menu">
                <li className="menu__item">
                    <h5 className="text">Каталог</h5>
                </li>
                <li className="menu__item">
                    <span className="menu__count">10</span>
                    <i className="fa-solid fa-cart-shopping menu__cart-icon"></i>
                    <h5 className="text">Корзина</h5>
                </li>
            </ul>
        </header>
    )
}

export default Header