import React, {Component} from 'react';
import './App.css';
import Button from "./components/Button";
import InputWindow from "./components/InputWindow";
class App extends Component {
  state = {
    buttons: [
      {id: 1, value: 1},
      {id: 2, value: 2},
      {id: 3, value: 3},
      {id: 4, value: 4},
      {id: 5, value: 5},
      {id: 6, value: 6},
      {id: 7, value: 7},
      {id: 8, value: 8},
      {id: 9, value: 9},
      {id: 0, value: 0},
    ],
    outputWindow: [],
    codeList: [
      '5678',
      '740761509737',
      '740761510372',
    ],
    codeMach: false
  };

  buttonClickHandler = (value) => {
    const window = [...this.state.outputWindow];
    window.push(value);
    this.setState({outputWindow: window});
  };

  buttonBackStaceHandler = () => {
    const window = [...this.state.outputWindow];
    window.splice(-1,1);
    this.setState({outputWindow: window});
    this.setState({codeMach: false});
  };

  buttonClearHandler = () => {
    let window = [...this.state.outputWindow];
    window.length = 0;
    this.setState({outputWindow: window});
    this.setState({codeMach: false});
  };

  buttonSubmitHandler = () => {
    const codeList = [...this.state.codeList];
    let window = [...this.state.outputWindow];
    window = window.join('');
    const result = codeList.filter(code => {
      return code === window;
    });
    if(result.length) {
      this.setState({codeMach: !this.state.codeMach});
    }
  };

	render() {
    const {codeMach, buttons, outputWindow} = this.state;
		return (
				<div className="App">
          <strong>Input</strong>
          <InputWindow value={outputWindow.join('')}/>

          {codeMach ? <strong>Code is Exist!</strong> : null}
          <div className="Buttons">
            {buttons.map(button => {
              return <Button className="numberButton" click={() => this.buttonClickHandler(button.value)} key={button.id} value={button.value}/>
            })}
            <Button className="backspaceButton" click={this.buttonBackStaceHandler} value="<="/>
            <Button className="clearButton" click={this.buttonClearHandler} value="C"/>
            <Button className="submitButton" click={this.buttonSubmitHandler} value="Submit"/>
          </div>
				</div>
		);
	}
}

export default App;