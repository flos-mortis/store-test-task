import "./Loader.scss"

//анимация прогрузки товаров
const Loader = () => {
    return (
        <div className="product-card product-card-skeleton"> 
            <div className="product-card__container product-card__container-skeleton"></div>
            <p className="product-card__text product-card__text-skeleton">Название</p>
            <h5 className="product-card__price product-card__price-skeleton">Цена</h5>
            <button className="button button-skeleton">Добавить в корзину</button>
        </div>
    )
};

export default Loader;