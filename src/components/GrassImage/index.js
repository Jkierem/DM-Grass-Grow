import React from 'react'
import { Timer } from '../'

class GrassImage extends React.Component{
	constructor(props){
		super(props);
		this.state={}
		this.loadImage();
	}

	loadImage = () => {
		const date = new Date();
		const url = `http://webcamb2.watching-grass-grow.com/current.jpg?wgg${date.getTime()}`
		this.setState({
			imageUrl: url
		})
	}

	render(){
		const { delay=1000 } = this.props;
		return(
			<Timer tick={this.loadImage} interval={delay}>
				<img className="wgg_img" alt="Server is down" src={this.state.imageUrl} />
			</Timer>
		);
	}
}

export default GrassImage;
