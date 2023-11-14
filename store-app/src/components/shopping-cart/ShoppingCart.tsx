import { useEffect } from "react";

import "./ShoppingCart.scss";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getTotal, removeFromCart, selectCart } from '../../features/cart/cartSlice';

const ShoppingCart = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCart);

    useEffect(() => {
        dispatch(getTotal());
    });

    const handleRemoveItem = (itemId: number) => {
        dispatch(removeFromCart(itemId))
    }

    return (
        <div className="shopping-cart page-content">
            <div className="container">
                {
                    cart.totalAmount === 0 ? (
                        <h3>Корзина пуста</h3>
                    ) : (
                        <div className="shopping-cart__table">
                            <h3>Корзина</h3>
                            {
                                cart.items.map((item) => (
                                    <div className="row">
                                        <p className="cell">{item.name} 
                                            <span className="shopping-cart__span"> X </span>
                                             {item.quantity}
                                        </p>
                                        <p className="cell">{item.price*item.quantity}</p>
                                        <button className="button shopping-cart__button" 
                                                onClick={() => handleRemoveItem(item.id)}>Убрать
                                        </button>
                                    </div>
                                ))
                            }
                            <h5 className="shopping-cart__total">Итого: {cart.totalAmount} ₽</h5>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default ShoppingCart;