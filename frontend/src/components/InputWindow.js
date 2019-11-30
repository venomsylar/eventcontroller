import React from 'react';

const InputWindow = ({value, result}) => {
	return (
			<div className="InputWindow">
				<h2>Input</h2>
				{result ?
						<h3 className="successInfo">Code Exist!</h3> :
						<h3 className="errorInfo">Code doesn't Exist!</h3>}
				<input type="text" readOnly={true} value={value}/>
			</div>
	);
};

export default InputWindow;
