

import { useState } from 'react';

function App() {
  const [fruits,setFruits]= useState([])
  const [inputText,setInputText]= useState("")

  const inputUpdate=(event)=>{
    setInputText(event.target.value)
  }

  const updateArr =() => {
    const newAr=[...fruits,inputText];
    setFruits(newAr);
    setInputText("");

  }
  return (
    <div className="App">

        <input onChange={inputUpdate} type="text" value={inputText} placeholder="Enter item to list"/>
        <button onClick={updateArr}> click me </button>
       <ul>
        {
          fruits.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
       </ul>
       <h1>hussain khan 123</h1>

    </div>
  );
}

export default App;
