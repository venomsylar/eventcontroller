import React, {Component} from 'react';
import './App.css';
import Controller from "./containers/controller";
class App extends Component {

	render() {
		return (
				<div className="App">
          <div className="container">
            <Controller/>
          </div>
				</div>
		);
	}
}

export default App;