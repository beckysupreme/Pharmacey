import React, { Component } from 'react'

export default class state extends Component {
    constructor() {
      super()
    
      this.state = {
         message:"Hello",
      }
    }
    becky(){
        this.setState({
          message:"Every one"
        });
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.becky()}>Vote</button>
      </div>
    )
  }
}
