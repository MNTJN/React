import React from 'react';

const Categories = ({ categories, activeCategory, setActiveCategory }) => {

	const changeCategory = (option) => {
		setActiveCategory(option);
	}

	return (
		<div>
			<h2 className='active-category-tag'>Catégorie : {activeCategory ? `${activeCategory.charAt(0).toUpperCase()}${activeCategory.slice(1)}` : 'Toutes les plantes'}</h2>
			<select onChange={(e) => changeCategory(e.target.value)} className='cat-select'>
				<option value=''>Toutes les plantes</option>
				{
					categories.map((cat, index) => {
						return <option key={index} value={cat} >{`${cat.charAt(0).toUpperCase()}${cat.slice(1)}`}</option>
					})
				}
			</select>
		</div>
	)
}

export default Categories