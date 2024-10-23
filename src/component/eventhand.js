// import React from 'react'

// export default function Eventhand() {
//   function becky(){
//     // console.log("clicked");
//     alert("Hello");
//   }  
//   return (
//     <div>
//       <button onClick={becky}>Click</button>
//     </div>
//   )
// }


import React, { Component } from 'react'

export default class Eventhand extends Component {
    alarm(){
        console.log("onclick");
        // alert("hello");
    }

  render() {
    return (
      <div>
        <button onClick={this.alarm}>Click</button>
      </div>
    );
  }
}

