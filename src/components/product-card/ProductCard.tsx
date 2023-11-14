import React from "react";
import { Link } from "react-router-dom";

import "./ProductCard.scss";
import { Item, addToCart } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../app/hooks";

interface ProductCardProps {
    product: Item
};

const ProductCard = ({product}: ProductCardProps) => {
    const dispatch = useAppDispatch();
    const [isVisible, setIsVisible] = React.useState(true);

    const handleAddToCart = (product: Item) => {
        dispatch(addToCart(product))
        setIsVisible(false)
    }

    return ( 
        <div className="product-card"> 
            <div className="product-card__container">
                <img className="product-card__image" src={product.image} alt="Name"></img>
            </div>
            <div className="product-card__info">
                <p className="product-card__text">{product.name}</p>
                <h5 className="product-card__price">{product.price}₽</h5>
            </div>
            {
                isVisible ? (
                    <button className="button" onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
                ) : (
                    <Link to="/cart" className="button button_replacing">
                       Оформить заказ
                    </Link>
                )
            }   
        </div>
    )
};

export default ProductCard;