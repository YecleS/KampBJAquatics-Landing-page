import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import ProductsFullPage from './Components/Pages/ProductsFullPage';
import PetsFullPage from './Components/Pages/PetsFullPage';
import Header from './Components/UiComponents/Header';
import Footer from './Components/UiComponents/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsFullPage />} />
          <Route path='/pets' element={<PetsFullPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
