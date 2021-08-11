import React from "react";
import "./App.css"
import List from "./List";
import Input from "./input";

class App extends React.Component {
  state = {
    tasks: ["make coffee", "make notes", "go for a jog", "new task"],
    currInput: "",
  };
  handleCurrInput=(value)=>{
    this.setState({currInput:value});
  }
  handleTasks=()=>{this.setState({
    tasks: [...this.state.tasks, this.state.currInput],
    currInput: "",
  });
 }
 deleteTask=(singleTask)=>{
  let currTaskArr = this.state.tasks;
  let filteredArr = currTaskArr.filter((element) => {
    return element != singleTask;
  });
  this.setState({ tasks: filteredArr });
};
  render = () => {
    return (
      <div>
        <Input handleCurrInput={this.handleCurrInput}
          handleTasks={this.handleTasks}
          currInput={this.state.currInput}> </Input>

        <List tasks={this.state.tasks} 
        deleteTask={this.deleteTask}></List>
        {
        /* <input
          className="input-box"
          type="text"
          onChange={(e) => {
            this.setState({ currInput: e.currentTarget.value });
          }}

          onKeyDown={(e) => {
            if (e.key == "Enter") {
              this.setState({
                tasks: [...this.state.tasks, this.state.currInput],
                currInput: "",
              });
            }
          }}

          value={this.state.currInput}
        /> */}

        {/* <ul>
          {this.state.tasks.map((el) => {
            return <li>{el}<button onClick={() => {
              let statecu = this.state.tasks;
              let filterarray = statecu.filter((ele) => {
                return ele != el;
              });
              this.setState({tasks : filterarray})
            }

            }>Delete</button></li>;
          })}
        </ul> */}
        {/* <List tasks={this.state.tasks}></List> */}
      </div>
    );
  };
}

export default App;