import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./ProductList.scss";
import { useAppDispatch } from "../../app/hooks";
import { Item } from "../../features/cart/cartSlice";
import { selectCatalog, fetchCatalog } from "../../features/catalog/catalogSlice";
import ProductCard from "../product-card/ProductCard";
import Loader from "../loader/Loader";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const catalog = useSelector(selectCatalog);

    useEffect(() => {
        dispatch(fetchCatalog());
    }, [])

    return (
        <div className="products"> 
            {
                catalog.isLoading 
                    ? (<>
                        <Loader />
                        <Loader />
                        <Loader />
                        </>)
                    : (catalog.items.map((product: Item) => (
                    <ProductCard product={product} key={product.id}></ProductCard>)
                ))
            }
        </div>
    )
};

export default ProductList;