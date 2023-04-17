import { Routes, Route } from "react-router-dom";
import './App.css';
import ProductList from './components/ProductList'
import ProductHome from './pages/ProductHome';
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductHome />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/:details' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
