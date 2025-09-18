import './App.css'
import { Routes, Route, Link } from 'react-router'
import { useEffect, useState } from 'react'
import About from './About/about'
import Home from './Home/home'
import Cart from './Cart/cart'

function App() {

  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => alert("Cant fetch data ", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home products={products} setCartList={setCartList} />} />
        <Route path='/about' element={<About/>} />
        <Route path='/carts' element={<Cart cartList={cartList} setCartList={setCartList} />} />
      </Routes>
    </>
  )
}

export default App