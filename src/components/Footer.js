import { useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {
	const [inputValue, setInputValue] = useState('Laissez-nous votre mail :')

	const handleInput = (e) => {
		setInputValue(e.target.value);
	}

	const checkEmail = () => {
		if (!inputValue.includes('@')) {
			alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`)
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
				<input
					type='text'
					value={inputValue}
					onChange={handleInput}
					onBlur={checkEmail} />
			</div>
		</footer>
	)
}

export default Footer