import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState } from 'react'
import Modal from './Modal'
import ItemDescription from './ItemDescription'

const ShoppingList = ({ cart, updateCart }) => {
	const [activeCategory, setActiveCategory] = useState('');

	const [selectedItem, setselectedItem] = useState({});

	const [isActiveModal, setIsActiveModal] = useState(false);

	const categories = plantList.reduce(
		(acc, { category }) =>
			acc.includes(category) ? acc : [...acc, category],
		[]
	)

	const addToCart = (name, price) => {
		const currentPlantSaved = cart.find(plant => plant.name === name);
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		}
		else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='shopping-list'>
			<Categories activeCategory={activeCategory} categories={categories} setActiveCategory={setActiveCategory} />
			<ul className='lmj-plant-list'>
				{
					plantList.map(({ id, cover, name, water, light, price, category, description }, index) => (
						!activeCategory || category === activeCategory ? (
							<div key={id}>
								<PlantItem
									id={id}
									cover={cover}
									name={name}
									water={water}
									light={light}
									category={category}
								>
									<button className='lmj-cart-add-button' onClick={() => addToCart(name, price)}>Ajouter</button>
									<button className='lmj-cart-add-button' onClick={() => { setselectedItem(plantList[index]); setIsActiveModal(true) }}>Description</button>
								</PlantItem>
							</div>
						) : null
					))
				}
			</ul >
			<Modal isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal}>
				<ItemDescription item={selectedItem} />
			</Modal>
		</div >
	)
}

export default ShoppingList