import '../styles/Cart.css'
import { useState, useEffect } from 'react'

const Cart = ({ cart, updateCart }) => {

	const [isOpen, setIsOpen] = useState(false);

	const cartTotal = cart.reduce((accu, { price, amount }) => accu + (price * amount), 0)

	useEffect(() => {
		document.title = `Panier ${cartTotal !== 0 ? ' : ' + cartTotal + '€' : 'vide'}`;
	}, [cartTotal])

	const adjustAmount = (index, value) => {
		if (value > 0) {
			updateCart([...cart], cart[index].amount++);
		}
		else if (value < 0) {
			const copiedCart = [...cart];

			if (copiedCart[index].amount - 1 <= 0) {
				copiedCart.splice(index, 1);
			}
			else {
				copiedCart[index].amount--;
			}
			updateCart([...copiedCart]);
		}
		else {
			const copiedCart = [...cart];
			copiedCart.splice(index, 1);
			updateCart([...copiedCart]);
		}
	}

	return isOpen ? (
		<div className="lmj-cart">
			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
			<h2>Panier</h2>
			{cart?.length > 0 ?
				(
					<div>
						<button className='lmj-empty-cart-button' onClick={() => updateCart([])}>Vider le panier</button>
						<p><b>Total</b> {cartTotal}€</p>
						{
							cart.map(({ name, amount, price }, index) => (
								<div key={index} className='cart-item'>
									<p className='cart-item-name'>{`${name.charAt(0).toUpperCase()}${name.slice(1)} `} </p>
									<p className='cart-item-price-and-quantity'>{`Prix unitaire: ${price}€ || Quantité : ${amount}`} </p>
									<p className='cart-item-subtotal'>{`Sous-total : ${price * amount}€`} </p>
									<div className='cart-item-adjust'>
										<button onClick={() => adjustAmount(index, -1)}>-</button>
										<button className='item-increase-btn' onClick={() => adjustAmount(index, 1)}>+</button>
										<button onClick={() => adjustAmount(index, 0)}>Supprimer</button>
									</div>
								</div>
							))
						}
					</div>
				) :
				(
					<div>Votre panier est vide</div>
				)
			}
		</div>
	) :
		(
			<div className='lmj-cart-closed'>
				<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
			</div>
		)
}

export default Cart