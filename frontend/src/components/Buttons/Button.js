import React from 'react';

const Button = ({className, value, click}) => {
	return (
			<button onClick={click} className={`Button ${className}`}>{value}</button>
	);
};

export default Button;
