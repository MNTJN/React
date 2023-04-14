import React from 'react'
import '../styles/Modal.css'

const Modal = ({ isActiveModal, setIsActiveModal, children }) => {

	return isActiveModal ? (
		<div className='modal-window'>
			<div className='modal-utility'>
				<span onClick={() => setIsActiveModal(false)} className='modal-close-btn'>X</span>
			</div>
			{children}
		</div>
	) : null
}

export default Modal