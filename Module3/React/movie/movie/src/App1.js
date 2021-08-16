import React from "react";
import Child from "./Child";
class App extends React.Component{
  state={
    child: true,
};
componentDidMount(){
  console.log("parent component did mount was called");
}
componentDidUpdate() {
  console.log("parent component did update was called");
}

componentWillUnmount() {
  console.log("parent component will umount was called");
}
render ( ){
  console.log("parent render called");
  return (
    <div>
      <button onClick={
        ()=>{
          if ( this.state.child){
              this.setState({child:false})
          }
          else{
            this.setState({child:true})

          }
        }
      }>
        parent toggle
      </button>
      {this.state.child?<Child/>:""}
    </div>
  )
}
}
export default App;