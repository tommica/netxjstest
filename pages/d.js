import React from 'react'

export default function B() {
	const [num1, setNum1] = React.useState(10);
	const [num2, setNum2] = React.useState(20);
	return (
		<React.Fragment>
			<input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
			<input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
			<div>{num1+num2}</div>
		</React.Fragment>
	);
}
