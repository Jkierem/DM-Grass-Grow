import React from 'react'

class Hero extends React.Component{
	render(){return(
		<nav className="wgg-hero">
			<h1>Watching Grass Grow</h1>
		</nav>)
	}
}

class Footer extends React.Component{
	render=()=>(
		<footer className="wgg-footer">
			Copyright © 2018 - Todos los derechos reservados a sus respectivos dueños
		</footer>
	)
}

class PageContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<React.Fragment>
				<Hero/>
				<section className="wgg-page-container">
					{this.props.children}
				</section>
				<Footer />
			</React.Fragment>
		);
	}
}

export default PageContainer;
