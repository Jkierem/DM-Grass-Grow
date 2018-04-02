import React from 'react'
import { Root , PageContainer } from './views'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
      <PageContainer>
        <Root />
      </PageContainer>
    )
  }
}

export default App;
