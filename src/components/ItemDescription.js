import React from 'react'
import '../styles/ItemDescription.css'

const ItemDescription = ({ item }) => {
	const { name, description, price } = item;
	return (
		<div className='item-description-modal'>
			<h3>{name}</h3>
			<p>{description}</p>
			<p><span className='item-price'>Prix : </span>{price}€</p>
		</div>
	)
}

export default ItemDescription