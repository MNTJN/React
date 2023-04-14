const CareScale = ({ scaleValue, careType }) => {

	const scale = [1, 2, 3]
	const scaleType = careType === 'water' ? '💧' : '☀️';
	return (
		<div>
			{
				scale.map(elem => (
					scaleValue >= elem ? <span onClick={() => alertCare(scaleType, scaleValue)} key={elem.toString()}>{scaleType}</span> : null
				))
			}
		</div>
	)
}

const alertCare = (scaleType, scaleValue) => {
	const scaleOfCare = ['peu', 'modérément', 'beaucoup'];
	alert(`Cette plante requiert ${scaleOfCare[scaleValue - 1]} ${scaleType === '💧' ? 'd\'eau' : 'de lumière'}`)
}

export default CareScale