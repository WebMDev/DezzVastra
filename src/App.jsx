import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductInfo from './pages/ProductInfo';
// import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <ProductInfo />
      {/* <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/productinfo' element={<ProductInfo />} />
      </Routes> */}
      
      <Footer />
    </>
  )
}

export default App;