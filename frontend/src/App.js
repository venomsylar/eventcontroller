import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import InputWindow from "./components/InputWindow";
import Buttons from "./components/Buttons/Buttons";
import Ticket from "./components/Ticket";
class App extends Component {
  state = {
    tickets: [],
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
    codeMach: null
  };

  async componentDidMount() {
    const {data: tickets} = await axios.get("http://localhost:4000/api/tickets", {
      crossdomain: true
    });
    this.setState({tickets})
  }

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
    const tickets = [...this.state.tickets];
    let window = [...this.state.outputWindow];
    window = window.join('');
    const result = tickets.filter(ticket => {
      return ticket.code === parseInt(window);
    });
    if(result.length) {
      this.setState({codeMach: result[0]});
    } else {
      this.setState({codeMach: false});
    }
  };

	render() {
    const {codeMach, buttons, outputWindow} = this.state;
		return (
				<div className="App">
          <div className="container">
            <InputWindow result={codeMach} value={outputWindow.join('')}/>
            {codeMach ? <Ticket data={codeMach} /> : null}
            <Buttons
                submitClick={this.buttonSubmitHandler}
                clearClick={this.buttonClearHandler}
                backStaceClick={this.buttonBackStaceHandler}
                defaultButtonClick={this.buttonClickHandler}
                buttons={buttons}/>
          </div>
				</div>
		);
	}
}

export default App;