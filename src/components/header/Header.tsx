import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { getTotal, selectCart } from "../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Header = () => {
    const cart = useAppSelector(selectCart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTotal());
    })
    return (
        <header className="header">
            <ul className="menu">
                <li className="menu__item">
                    <Link to={"/"}>
                        <h5 className="text">Каталог</h5>
                    </Link>
                </li>
                <li>
                    <Link to={"/cart"} className="menu__item">
                        <span className="menu__count">{cart.totalQuantity}</span>
                        <i className="fa-solid fa-cart-shopping menu__cart-icon"></i>
                        <h5 className="text">Корзина</h5>
                    </Link>
                </li>
            </ul>
        </header>
    )
};

export default Header;