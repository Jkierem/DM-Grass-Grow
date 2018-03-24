import React from 'react'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      color: "red",
      className: "button-red"
    }
  }

  handleClick=()=>{
    let newColor = this.state.color === "red" ? "green" : "red";
    this.setState({
      color: newColor,
      className: `button-${newColor}`
    })
  }

  render(){
    return(
      <React.Fragment>
        <header>
          <h1>
            Hello World!
          </h1>
          <p>
            I am now alive and ready to React.
          </p>
        </header>
        <button className={this.state.className} onClick={this.handleClick} >{this.props.nombre}</button>
      </React.Fragment>)
  }
}

export default App;
