// import React from "react";

// class Child extends React.Component {
//   constructor(props) {
//     super(props);                                           // to call constructor of reacom
//     console.log("constructor was called");
//     this.state = {
//       on: false,
//     };
//   }

//   componentDidMount(){
//     console.log("child component did mount was called");
// }
// componentDidUpdate() {
//     console.log("child component did update was called");
//   }

//   componentWillUnmount() {
//     console.log("child component will umount was called");
//   }
//   render(){
//         console.log("child render was called");
//         return (
//       <div>
//         <button
//           onClick={() => {
//             if (this.state.on) {
//               this.setState({ on: false });
//             } else {
//               this.setState({ on: true });
//             }
//           }}
//         >
//           click
//         </button>
//       </div>
//     );
//   }
// }


// export default Child;



import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor was called");
    this.state = {
      on: false,
    };
  }

  componentDidMount() {
    console.log(" child component did mount was called");
  }

  componentDidUpdate() {
    console.log("child component did update was called");
  }

  componentWillUnmount() {
    console.log("child component will umount was called");
  }

  render() {
    console.log("child render was called");
    return (
      <div>
        <button
          onClick={() => {
            if (this.state.on) {
              this.setState({ on: false });
            } else {
              this.setState({ on: true });
            }
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default Child;