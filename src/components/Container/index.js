import React from 'react'

class Container extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<section className="wgg-base-container">
				{this.props.children}
			</section>
		);
	}
}

export default Container;
