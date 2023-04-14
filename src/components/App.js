import '../App.css';
import Banner from './Banner';
import logo from '../assets/logo.png'
import Cart from './Cart';
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import ShoppingList from './ShoppingList'

const App = () => {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (<>
    <Banner>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
    <section className='main-section'>
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
    </section>
    <Footer />
  </>
  )
}

export default App;