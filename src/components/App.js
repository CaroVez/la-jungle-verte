import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
        <div className='ljv-title-logo'>
          <img src={logo} alt='La jungle verte' className='ljv-logo' />
				  <h1 className='ljv-title'>La jungle verte</h1>
        </div>				
        <Recommendation />
			</Banner>
			<div className='ljv-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
      <Footer />
		</div>
	)
}

export default App