import React from 'react';
import { GrassImage , Container} from '../../components';
import { ImageList } from '../../collections';

let items =[
	{
		src:"./res/wgg_img_1.jpg",
		alt:"Hello",
		text:"Many bugs in my lens"
	},
	{
		src:"./res/wgg_img_2.jpg",
		alt:"Hello",
		text:"Many bugs in my lens"
	},
	{
		src:"./res/wgg_img_3.jpg",
		alt:"Hello",
		text:"Many bugs in my lens"
	},
	{
		src:"./res/wgg_img_1.jpg",
		alt:"Hello",
		text:"Many bugs in my lens"
	},
	{
		src:"./res/wgg_img_2.jpg",
		alt:"Hello",
		text:"Many bugs in my lens"
	},
	{
		src:"./res/wgg_img_3.jpg",
		alt:"Hello",
		text:"Many bugs in my lens"
	}
]

class Root extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<React.Fragment>
				<Container>
					<GrassImage />
				</Container>
				<ImageList items={items} />
			</React.Fragment>
		);
	}
}

export default Root;
