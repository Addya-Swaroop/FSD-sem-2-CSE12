// function App() {
//   return(
//     <div className='App'>
//       <h1>hello world</h1>
//       <p>this is my first react app</p>
//       <Cse12 />
//     </div>
//   );
// }

// function Cse12(){
//   return(
//     <div className='cse12'>
//       <h1>welcome to cse12</h1>
//       <p>this is the second component</p>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
function app(){
  const[isOn, setisOn]=useState(false);
  return(
    <div style={{textAlign:'center', marginTop:50
    }}>
      <h1>toggle button</h1>
      <button onClick={()=> setisOn(isOn)}>
      { isOn ? 'ON' :'OFF' }</button>
    </div>
  );
}
export default app;