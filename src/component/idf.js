import React, { Component } from 'react'

export default class Old extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         num:true,
      }
    }
  render() {
    //  if(this.state.num){
    //     return(
    //      <h1>Correct</h1>
    //     );
    //  }
    //  else{
    //     return(
    //         <h1>Not Correct</h1>
    //     );
    //  }
    return(
     this.state.num ?
    <div><h1>Ok</h1></div>:
    <div><h1>Not</h1></div>
    )

  }
}
