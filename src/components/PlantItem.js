import CareScale from './CareScale'
import '../styles/PlantItem.css'

const PlantItem = ({ name, cover, id, light, water, category, children }) => {

	return (
		<li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
			<img onClick={testFunction} className='lmj-plant-item-cover' alt='' src={cover} />
			<p className='item-name'>{name}</p>
			<p className='item-category'>{category}</p>
			<CareScale careType="water" scaleValue={water} />
			<CareScale careType="light" scaleValue={light} />
			{children}
		</li>
	)
}

function handleClick(plantName) {
	console.log(`You clicked : ${plantName.charAt(0).toUpperCase() + plantName.slice(1)}`)
}

function testFunction(e) {
	console.log(e.target);
}

export default PlantItem