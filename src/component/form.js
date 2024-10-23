import React, { Component } from 'react'

class Nael extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first: '',
         second:'',
         sel:''
      }
    }
    change =(event) =>{
        this.setState({
            first: event.target.value
        })
    }
    commentcha =(event)=>{
        this.setState({
            second: event.target.value
        })
    }
    selchange = (event) =>{
        this.setState({
            sel: event.target.value
        })
    }
    butt=(event)=>{
        alert(`${this.state.first} ${this.state.second}`)
    }
  render() {
    return (
      <form onSubmit={this.butt}>
        <div>
        <label >Name: </label>
        <input type='text' value={this.state.first} onChange={this.change}></input>
        </div>
        <div>
          <label>Age</label>
          <input type='text' value={this.state.second} onChange={this.commentcha}></input>
        </div>
        <div>
            <label>Course : </label>
            <select value={this.state.sel} onChange={this.selchange}>
                <option value="">None</option>
                <option value="React">React</option>
                <option value="css">Css</option>
                <option value="Java">Java</option>
            </select>
        </div>
        <div>
            <button type='submit'>Login</button>
        </div>
      </form>
    )
  }
}

export default Nael
