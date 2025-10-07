import React from 'react'
import './styles/App.css'
import Dice from './Dice'
import {nanoid} from 'nanoid'

export default function App() {
  const [dice, setDice] = React.useState(getNewDice())
  let newDice = dice.map((number) => <Dice value={number.value} isHeld={number.isHeld} hold={()=> holdDice(number.id)} />)

    function getNewDice(){
      let arr=[]
      for(let i=0;i<10;i++){
          arr[i]= {key: i+1, value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()}
      }
      return arr;
    }

    function rollDice(){
      setDice(getNewDice())
    }

    function holdDice(id) {
        setDice((prevDice) => prevDice.map((die) => die.id === id ? {...die, isHeld: !die.isHeld} : die))
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