import React from 'react';
import Button from './Button'

function Buttons({buttons, submitClick, clearClick, backStaceClick, defaultButtonClick}) {
	return (
			<>
				<div className="Buttons">
					{buttons.map(button => {
						return <Button className="numberButton" click={() => defaultButtonClick(button.value)} key={button.id} value={button.value}/>
					})}
					<Button className="backspaceButton" click={backStaceClick} value="<="/>
					<Button className="clearButton" click={clearClick} value="C"/>
					<Button className="submitButton" click={submitClick} value="Submit"/>
				</div>
			</>
	);
}

export default Buttons;