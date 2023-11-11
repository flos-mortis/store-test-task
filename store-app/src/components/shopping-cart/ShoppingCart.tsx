import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { add } from '../../features/cart/cartSlice';

const ShoppingCart = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(add())}>Добавить</button>
        </div>
    )
}