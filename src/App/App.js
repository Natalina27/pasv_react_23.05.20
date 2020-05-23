import React, {useState} from 'react';
import './App.module.css';
import LeftHand from "../LeftHand/LeftHand";
import RightHand from "../RightHand/RightHand";

function App() {

    const [count, setCount] = useState(15);

   const handler = (newValue) => {
       setCount(newValue);
   };

    return (
        <div className="App">
          <LeftHand count={count} changeCount={handler}/>
          <RightHand  count={count}/>


        </div>
    );
}

export default App;
