import React from 'react'

class Timer extends React.Component{
	constructor(props){
		super(props);
		this.state={}
		this.interval = undefined;
	}

	tick = () => {
		this.props.tick();
	}

	componentDidMount = () => {
		const { interval } = this.props;
		this.timer = setInterval(this.tick, interval);
	}

	componentWillUnmount = () => {
		clearInterval(this.timer);
	}

	render(){
		return(
			this.props.children
		);
	}
}

export default Timer;
