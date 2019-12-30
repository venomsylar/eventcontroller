import React from 'react';
import Button from './Button'

function Buttons({submitClick, clearClick, backStaceClick, defaultButtonClick}) {
	const buttons = [1,2,3,4,5,6,7,8,9,0];
	return (
			<div className="Buttons">
				{buttons.map(button => {
					return <Button className="numberButton" click={() => defaultButtonClick(button)} key={button} value={button}/>
				})}
				<Button className="backspaceButton" click={backStaceClick} value="<="/>
				<Button className="clearButton" click={clearClick} value="C"/>
				<Button className="submitButton" click={submitClick} value="Submit"/>
			</div>
	);
}

export default Buttons;