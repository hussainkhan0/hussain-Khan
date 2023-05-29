
import { useState } from 'react';
import { useRef } from 'react';

function App() {
  const [fruits,setFruits]= useState([])
  const [inputText,setInputText]= useState("")

  const inputUpdate=(event)=>{
    setInputText(event.target.value)
  }
   const focusOn = useRef();

  const updateArr =() => {
    if(inputText == ""){
      alert("Not Allowed")
  }
  else{
    const newAr=[...fruits,inputText];
    setFruits(newAr);
    setInputText("");
    focusOn.current.focus();
  }
  }

  const changeArr= (index) => {
    const result= fruits.toSpliced (index,1) 
  
    setFruits(result);
  }

 const enterKey = (event) => {
  if(event.key == "Enter"){
    updateArr();
  }
 }
 
  const editArr = (item) => {}


  return (
    <div className="App">

        <input onChange={inputUpdate} onKeyUp={enterKey} type="text" value={inputText} ref={focusOn}placeholder="Enter item to list"/>
        <button onClick={updateArr}> click me </button>
        
       <ul>
        {
          fruits.map((item, index) => {
            return <li key={index}>{item}<button onClick={ () => {changeArr(item)} }>X</button>
            <button onclick={ () => {editArr(item)}}>edit</button>
            </li>
          })
        }
       </ul>
       <h1>Hussain khan</h1>

    </div>
  );
}

export default App;
