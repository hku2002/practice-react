import './App.css';
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={"/products"} element={<ProductList />}></Route>
            <Route path={"/product/detail"} element={<ProductDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
