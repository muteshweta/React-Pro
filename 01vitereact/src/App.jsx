import { useState } from "react";
function App() {

  let [counter,setCounter] = useState(15); 

  const addValue = () => {
      console.log("value added",counter);
      //counter = counter + 1;
      //if(counter < 20){    
      //} 
      setCounter(Math.min(counter + 1,20))
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }  
  }

  return (
    <>
        <h1>Chai or React | Shweta</h1>
        <h2>Counter Value : {counter} </h2>
        <button onClick={addValue}>add Value</button>
        <br />
        <button onClick = {removeValue}>remove value</button>
    </>
  )
}

export default App
