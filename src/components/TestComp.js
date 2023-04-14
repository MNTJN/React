import React from 'react'
import { useState } from 'react'

const TestComp = () => {
	const [name, setName] = useState('');
	const handleNameInput = (e) => {
		setName(e.target.value);
	}
	return (
		<div>
			<input onChange={(e) => handleNameInput(e)} type='text'></input>
			<div>{name}</div>
		</div>
	)
}

export default TestComp