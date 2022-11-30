// import React from "react";
// import { Component, useState } from "react";
// // function CouterApp() {
// //   const [count, setCount] = useState(0);
// //   const increase = function () {
// //     setCount(count + 1);
// //   };
// //   return (
// //     <div>
// //       <button on onClick={increase}>
// //         {" "}
// //         CLick me
// //       </button>
// //       <p>{count}</p>
// //     </div>
// //   );
// // }

// class CouterApp extends Component {
//   condition = {
//     count: 10,
//   };
//   decrease = function () {
//     this.condition.setState({
//       count: this.state.count - 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <p>Count Reached {this.state.count}</p>
//         <button type="btn" onClick={() => this.decrease()}>
//           {" "}
//           Decrease
//         </button>
//       </div>
//     );
//   }
// }
// export default CouterApp;

import React from "react";
import { useEffect, useState } from "react";
const CouterApp = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    console.log(`${count} times`);
    return () => {
      "component unmounted";
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default CouterApp;
