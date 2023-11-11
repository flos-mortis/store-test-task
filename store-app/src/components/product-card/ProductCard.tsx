import React from "react";
import "./ProductCard.scss"

const ProductCard = () => {
    return (
        <div className="product-card"> 
            <img className="product-card__image" src="https:\/\/appevent.ru\/devtasks\/img\/catalog_item_1.jpg" alt="Name"></img>
            <p className="product-card__text">Браслет Xiaomi Mi Band 4</p>
            <p className="product-card__price">1790</p>
            <button className="button visible">Добавить в корзину</button>
            <button className="button hidden">Оформить заказ</button>
        </div>
    )
}

export default ProductCard