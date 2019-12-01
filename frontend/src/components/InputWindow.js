import React from 'react';

const InputWindow = ({value, result}) => {

	const resultHandler = () => {
		if(result && result !== 'checked') {
			return <h3 className="successInfo">Code Exist!</h3>
		} else if(result && result === 'checked') {
			return <h3 className="successInfo">Code already has been checked!</h3>
		} else {
			return <h3 className="errorInfo">Code doesn't Exist!</h3>
		}
	};

	return (
			<div className="InputWindow">
				<h2>Input</h2>
				{resultHandler()}
				<input type="text" readOnly={true} value={value}/>
			</div>
	);
};

export default InputWindow;
