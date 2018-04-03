import React from 'react';
import { ImageList } from '../../collections';
import { MainContent } from '../'

const FallbackText = "Something went wrong";

let items =[
	{
		src:"./res/wgg_img_1.jpg",
		alt: FallbackText,
		text:'Jun 10, 2011 - Many "creatures" show up on the webcam!'
	},
	{
		src:"./res/wgg_img_2.jpg",
		alt: FallbackText,
		text:"Mr. Grass taking everything down via the christmas webcam! ;-)"
	},
	{
		src:"./res/wgg_img_3.jpg",
		alt: FallbackText,
		text:"Apr 11, 2012 - Mr. Grass with the Toro Lawn Mower"
	},
	{
		src:"./res/wgg_img_4.jpg",
		alt: FallbackText,
		text:"Halloween is just the warmup for Christmas! ;-)"
	},
	{
		src:"./res/wgg_img_5.jpg",
		alt: FallbackText,
		text:"May 22, 2013 - Super exciting closeup of Garabage pickup"
	},
	{
		src:"./res/wgg_img_6.jpg",
		alt: FallbackText,
		text:"May 31, 2014 - Composite image of skateboard dude"
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
				<MainContent />
				<ImageList items={items} />
			</React.Fragment>
		);
	}
}

export default Root;
