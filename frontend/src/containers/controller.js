import React, {Component} from 'react';
import axios from "../axios-tickets";
import InputWindow from "../components/InputWindow";
import Ticket from "../components/Ticket";
import Buttons from "../components/Buttons/Buttons";

class Controller extends Component {
	state = {
		tickets: [],
		outputWindow: [],
		checkedTicket: null
	};

	async componentDidMount() {
		const {data: tickets} = await axios.get("/api/tickets", {crossdomain: true});
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
		this.setState({checkedTicket: false});
	};

	buttonClearHandler = () => {
		let window = [...this.state.outputWindow];
		window.length = 0;
		this.setState({outputWindow: window});
		this.setState({checkedTicket: false});
	};

	buttonSubmitHandler = async() => {
		const tickets = [...this.state.tickets];
		let window = [...this.state.outputWindow];
		window = window.join('');
		const result = tickets.filter(ticket => {
			return ticket.code === parseInt(window);
		});

		if(result.length && result[0].checked === false) {

			const updatedTicketData = tickets.find(ticket => ticket._id === result[0]._id);
			const data = {
				...updatedTicketData,
				'checked': true
			};

			axios.put(`/api/tickets/${result[0]._id}`, data, {crossdomain: true})
			.then(() => {
				this.setState({checkedTicket: result[0]});
			}).catch((error) => {
				console.log(error);
			});
		} else if(result.length && result[0].checked === true) {
			this.setState({checkedTicket: result[0]});
		} else {
			this.setState({checkedTicket: false});
		}


	};
	render() {
		const {checkedTicket, outputWindow} = this.state;
		return (
				<>
					<InputWindow
							checkedTicketData={checkedTicket}
							value={outputWindow.join('')}/>
					{checkedTicket && !checkedTicket.checked ? <Ticket data={checkedTicket} /> : null}
					<Buttons
							submitClick={this.buttonSubmitHandler}
							clearClick={this.buttonClearHandler}
							backStaceClick={this.buttonBackStaceHandler}
							defaultButtonClick={this.buttonClickHandler} />
				</>
		);
	}
}

export default Controller;