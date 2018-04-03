import React from 'react'
import { Container , GrassImage } from '../../components';

class MainContent extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<Container>
				<main className="wgg-main-container">
					<GrassImage />
					<aside>
						<p>
							Here comes the intro
						</p>
					</aside>
				</main>
			</Container>
		);
	}
}

export default MainContent;
