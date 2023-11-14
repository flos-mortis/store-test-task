import '../src/styles/App.scss';
import Header from './components/header/Header';
import Catalog from './components/catalog/Catalog';
import ShoppingCart from './components/shopping-cart/ShoppingCart';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/" element={<Catalog />}/>
          <Route path="/cart" element={<ShoppingCart />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
