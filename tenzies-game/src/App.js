import { useState, useEffect } from "react";
import Die from "./Components/Die";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(()=>allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(()=>{
    const allHeld = dice.every(die=>die.isHeld)
    const firstValue = dice[0].value
    const allSameValues = dice.every(die=>die.value === firstValue)
    if(allHeld && allSameValues){
      setTenzies(true)
    }
    
  },[dice])

  function generateNewDie(){
    return(
      {
        value:Math.ceil(Math.random() * 6 ), 
        isHeld:false
      }
    )
  }

  function allNewDice (){
    const newDice = []
    for (let i = 0; i < 10; i++) { 
      newDice.push(generateNewDie())  
    }
    return newDice
  }

  const rollDice=()=>{
    if(!tenzies){
      setDice(oldDice=> oldDice.map(die=>{
        return(die.isHeld
          ? die 
          : generateNewDie()
          )
      }))
    }else{
      setTenzies(false)
      setDice(allNewDice)
    }
    }

    const holdDice = (id)=>{
      setDice(oldDice=>oldDice.map((die, index)=>{
          return(id === index
            ? {...die, isHeld:!die.isHeld}
            : die)
        }))
    }

  const diceElement = dice.map((die, index)=>
    <Die value={die.value} 
        key={index} 
        isHeld={die.isHeld} 
        holdDice={()=>holdDice(index)}
        />)
  
  return (
    <main className="flex">
      {tenzies && <Confetti/>}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-wrapper grid">
        {diceElement}
      </div>
      <button onClick={rollDice} className="roll-btn">
        {tenzies? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
