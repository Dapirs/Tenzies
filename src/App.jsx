import React from 'react'
import './styles/App.css'
import Dice from './Dice'

export default function App() {
  const [dice, setDice] = React.useState([1,1,1,1,1,,1,1,1,1,1])
  let newDice = dice.map((number) => <Dice value={number} />)

    return (
      <>
        <div className='dice-container'>
          <h1>Tenzies</h1>
          <p>Roll the dice until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          {newDice}
        </div>

      </>
    )
}


