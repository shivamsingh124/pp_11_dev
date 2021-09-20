import React from "react";
import "./App.css"

class App extends React.Component {
  state = {
    operand1: 0,
    operator: "",
    operand2: 0,
    flag: 0,
    res: 0,
    sign: ""
  };
  diaplay(){
    this.setState({ res: this.state.operand1 + this.state.operand2});

  }
  set = (val) => {
    if (val === 0) {
      this.setState({ flag: this.state.flag * 0 });
      this.setState({ operand1: this.state.flag * 0 });
      this.setState({ operand2: this.state.flag * 0 });
    }
    else if (this.state.flag === 0) {
      this.setState({ operand1: val });
    this.setState({ res: this.state.operand1});
      this.setState({ flag: this.state.flag + 1 });
    }
    else if (this.state.flag === 1) {
      this.setState({ operand2: val });
      
    }
    // this.setState({ res: this.state.operand1 + this.state.operand2 });
  }
  render = () => {
    return (
 
        <div className="main">
          {/* <input type="text" className="input" onChange={() => {
      //  .handleCurrInput(e.currentTarget.value); 
    }}
    value={this.state.res}
    ></input> */}
         
            {console.log(<span/>)}
       

        </div>

    )
  }
}

export default App;
