import React from 'react'
import { ImageListItem } from '../';
import { Container } from '../../components';

class ImageList extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	renderItems = () => {
		const { items } = this.props;
		if( items.length === 0 ){
			return (
				<ImageListItem
					alt={"-- List is Empty --"}
					text={"--Empty--"}
				/>
			)
		}else{
			return items.map((item,index) => {
				const { src , alt , text } = item;
				return <ImageListItem
					key={index}
					src={src}
					alt={alt}
					text={text}
				/>
			})
		}
	}

	render(){
		const { renderItems } = this;
		return(
			<Container>
				<section className="wgg-list-container">
					{renderItems()}
				</section>
			</Container>
		);
	}
}

export default ImageList;
