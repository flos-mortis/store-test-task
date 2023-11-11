import '../src/styles/App.scss';
import Header from './components/header/Header';
import ProductCard from './components/product-card/ProductCard';
import { Counter } from './features/cart/Counter';


function App() {
  return (
    <div className="App">
      <Counter />
      <Header></Header>
      <div className="container">
        <main className="main-page">
          <h3 className="heading">Каталог товаров</h3>
          <div className="products">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard> 
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
