import { useState } from "react";
import "./App.css";
//import { Component, useState } from "react";
//import FormValidation from "./formValidation";
//import ContextAPI from "./contextAPI";

import Todo from "./todo/Todo";
function App() {
  return (
    <>
      {/* <FormValidation /> */}
      {/* <ContextAPI /> */}
      <Todo />
    </>
  );
}

// function App() {
//   const [count, setCount] = useState(0);
//   const increase = function () {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <button on onClick={increase}>
//         {" "}
//         CLick me
//       </button>
//       <p>{count}</p>
//     </div>
//   );
// }

// class App extends Component{
//   state = {
//     count : 10
//   }
//  decrease = function() {
//     this.state.count - 1;
//   }
//   render(){
//     <div>
//       <p>Count Reached { this.state.count}</p>
//       <button type="btn" onClick={()=> this.decrease()}></button>
//     </div>
//   }
// }
export default App;
