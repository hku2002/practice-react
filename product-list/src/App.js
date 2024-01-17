import './App.css';
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/products"} element={<ProductList />}></Route>
          <Route path={"/product/detail"} element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
