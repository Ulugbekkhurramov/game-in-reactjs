import React, {useState , useEffect } from 'react'
import './index.css'
function App() {
  const[text, setText] = useState("")
  const [timeRemain, setTimeRemain ]=useState(0)
  const [isTimeRunning, setTimeRunning] = useState(false)
  const [words, setWords]= useState(0)

  function handlerChange(e) {
    setText(e.target.value)
    // console.log(text);
  }

  function calcWords(text) {
    const wordsArray = text.trim().split(" ")
    const filteredData = wordsArray.filter(word => word !== "");
    return filteredData.length 
  }
   
  useEffect( ()=> {
    if (isTimeRunning==true && timeRemain > 0) {
      setTimeout(() => {
        setTimeRemain(timeRemain => timeRemain-1 )
      }, 1000 );  
    }else if (timeRemain == 0) {
      setTimeRunning(false)
      const wordsNumber = calcWords(text)
      setWords(wordsNumber)
    }
    
  }, [timeRemain, isTimeRunning, ])
  function startClock() {
    setTimeRunning(true)
    setTimeRemain(20)
    setText("")
  }


  return (
    <div className="App">
      <h3 id="h3">Tezligingizni sinang</h3>
      <textarea disabled={!isTimeRunning} onChange={handlerChange} value={text}/>
      <h3 id="h3-two">QOLGAN ⏱: {timeRemain}</h3>
      <button disabled={isTimeRunning} onClick={ startClock }>Start</button>
      <h1>So'zlar soni: {words}</h1>
    </div>
  );
}

export default App
