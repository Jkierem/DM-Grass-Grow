import React from 'react'

class ImageListItem extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		const { src , alt , text } = this.props;
		return(
			<section className={"wgg-list-item-container"}>
				<img className={"wgg-list-img"} src={src} alt={alt}/>
				<article className={"wgg-list-item-text"}>
					<p>{text}</p>
				</article>
			</section>
		);
	}
}

export default ImageListItem;
