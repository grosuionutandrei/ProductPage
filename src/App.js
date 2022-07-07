import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './HomePage/Home';
import { MainProduct } from './Features/ProductPage/MainProductPage/MainProduct';
import { CartContextProvider } from './Components/GeneralContext/GeneralContext';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home></Home>}>
              <Route path="/home" element={<MainProduct />} />
              <Route path="/collections" element={<p>Collections</p>} />
              <Route path="/men" element={<p>Men</p>} />
              <Route path="/women" element={<p>Women</p>} />
              <Route path="/about" element={<p>About</p>} />
              <Route path="/contact" element={<p>Contact</p>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
