import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price, 
    0
  )

  useEffect(() => {
    document.title = `ljv: ${total}€ d'achats`
  }, [total])

  return isOpen ? (
    <div className='ljv-cart'>
        <button
            className='ljv-cart-toggle-button'
            onClick={() => setIsOpen(false)}
        >
            Fermer
        </button>
        {cart.length > 0 ? (
          <div>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
            <div key={`${name}-${index}`}>
              {name} {price}€ x {amount}
            </div>
            ))}
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
          </div>
        ) : (
          <div>Votre panier est vide</div>
        )}          
    </div>
  ) : (
      <div className='ljv-cart-closed'>
          <button
              className='ljv-cart-toggle-button'
              onClick={() => setIsOpen(true)}
          >
              Ouvrir le Panier
          </button>
      </div>
  )
}

export default Cart
