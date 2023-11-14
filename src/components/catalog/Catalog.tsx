import ProductList from "../product-list/ProductList";

const Catalog = () => {
    return (
    <main className="catalog-page page-content">
        <div className="container">
            <h3 className="heading">Каталог товаров</h3>
            <ProductList />
        </div>
    </main>
    )
};

export default Catalog;