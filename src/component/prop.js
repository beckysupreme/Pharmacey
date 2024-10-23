// import React from 'react'

// const Beck = (props) =>{
//   return(
//     <div className='now'>'
//     <h1>How To Apply {props.name} Age {props.age}</h1>
//     {props.children}
//     </div>
//   );
// }
// export default Beck;
import React,{Component} from "react";

class Prop extends Component{
    render(){
        return(
           <div>
            <h1>How To Apply {this.props.name}</h1>
           </div>
        );
    }

}
export default Prop;
