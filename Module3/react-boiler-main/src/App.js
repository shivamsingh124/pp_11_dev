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
      <div className="fle">
        <div className="main">
          {/* <input type="text" className="input" onChange={() => {
      //  .handleCurrInput(e.currentTarget.value); 
    }}
    value={this.state.res}
    ></input> */}
          { console.log(this.state.operand1)}
          {console.log(this.state.res)}
          {console.log(this.state.flag)}
          {/* <p>{this.diaplay()}</p> */}
          <p>{this.state.res}</p>
          <div className="opr">
            <button className="cal" onClick={() => {
            }}>+</button>
            <button className="cal">-</button>
            <button className="cal">/</button>
            <button className="cal">*</button>
          </div>
          <button className="num" onClick={() => {
            this.set(-2);
          }}>khatam</button>
          <div className="ope">
            <button className="num" onClick={() => {
              this.set(1);
            }}>1</button>
            <button className="num" onClick={() => {
              this.set(2);

            }}>2</button>
            <button className="num" onClick={() => {
              this.set(3);
            }}>3</button>
            <button className="num" onClick={() => {
              this.set(4);
            }}>4</button>
            <button className="num" onClick={() => {
              this.set(5);
            }}>5</button>
            <button className="num" onClick={() => {
              this.set(6);
            }}>6</button>
            <button className="num" onClick={() => {
              this.set(7);
            }}>7</button>
            <button className="num" onClick={() => {
              this.set(8);
            }}>8</button>
            <button className="num1" onClick={() => {
              this.set(0);
            }}>RESET</button>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
