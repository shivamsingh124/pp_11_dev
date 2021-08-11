// let MyComp=()=>{
// return(
//   <div>
//       <h1>OTHER</h1>
//       <p>List</p>
//       <ul>
//           <li>List1</li>
//           <li>List2</li>
//       </ul>
//       <ol>
//           <li>List3</li>
//           <li>List4</li>
//       </ol>
//   </div>
// );
// }
// export default MyComp;

import React from "react";
class MyComp extends React.Component{
    state={
        somenumber:0,
    };
    render = ()=>{
        return(
            <div>
                <button onClick= { ()=>{
                    this.setState({somenumber:this.state.somenumber+1})
                }}>
                increment
                </button>
                
                <h1>{this.state.somenumber}</h1>

                <button onClick= { ()=>{
                    this.setState({somenumber:this.state.somenumber-1})
                }}>
                decrement
                </button>
            </div>
        );
    };
}
export default MyComp;