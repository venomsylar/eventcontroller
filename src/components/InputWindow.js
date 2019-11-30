import React from 'react';

const InputWindow = ({value}) => {
	return (
			<div className="InputWindow">
				<input type="text" readOnly={true} value={value}/>
			</div>
	);
};

export default InputWindow;
