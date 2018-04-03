import React from 'react'
import { Container , GrassImage } from '../../components';

const links = [
	{ url: "http://www.watching-grass-grow.com/year/" , text: "A year of grass growing" },
	{ url: "http://www.watching-grass-grow.com/house-finch/2010/" , text: "House Finches nested in my front door" },
	{ url: "http://www.watching-grass-grow.com/pictures/toro-lawn-mower/" , text: "Mowing the lawn" },
	{ url: "https://www.youtube.com/watch?v=_T-dYJkWap0" , text: "Washing the Cars" },
	{ url: "https://www.youtube.com/watch?v=yBXJQSbctcw" , text: "Shoveling Snow" },
	{ url: "http://www.watching-grass-grow.com/2016_trash-fan/" , text: "Cool story about how the Trash man is a Fan" },
	{ url: "http://www.watching-grass-grow.com/2016_wedding-fan/" , text: "Mr. Grass asked to send a surprise wedding message" },
	{ url: "http://www.watching-grass-grow.com/2017_southwest-airlines-magazine/" , text: "Nine page spread about WGG" },
	{ url: "https://twitter.com/Noeltbrennan/status/876501183346507777" , text: "Crazy old suburban dad" },
	{ url: "http://www.9news.com/news/local/storytellers/storytellers-watching-grass-grow-/450066599" , text: "9News TV" }
]

class MainContent extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	renderLinks=()=>{
		return links.map((item,index) => {
			return <a
				target="_blank"
				rel="noopener noreferrer"
				key={index}
				href={item.url}
				className="wgg-link">
				{item.text}
			</a>
		})
	}

	render(){
		return(
			<Container>
				<main className="wgg-main-container">
					<GrassImage />
					<aside className="wgg-aside-container">
						<header>
							<h2>Links!</h2>
						</header>
						<nav className="wgg-link-list">
							{this.renderLinks()}
						</nav>
					</aside>
				</main>
			</Container>
		);
	}
}

export default MainContent;
