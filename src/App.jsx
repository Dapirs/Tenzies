import React from 'react'
import './styles/App.css'
import Dice from './Dice'

export default function App() {
  const [dice, setDice] = React.useState(getNewDice())
  let newDice = dice.map((number) => <Dice value={number.value} isHeld={number.isHeld} />)

    function getNewDice(){
      let arr=[]
      for(let i=0;i<10;i++){
          arr[i]= {value: Math.ceil(Math.random() * 6), isHeld: true}
      }
      return arr;
    }

    function rollDice(){
      setDice(getNewDice())
    }

    function holding(){
      setDice((prevDice)=>prevDice.map((obj)=>{ isHeld: !obj.isHeld}))
    }

    return (
      <>
        <div className='dice-container'>
          <h1>Tenzies</h1>
          <p>Roll the dice until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className='dice'>
              {newDice}
          </div>
          <button onClick={rollDice} className='roll'>Roll</button>

        </div>

      </>
    )
}


