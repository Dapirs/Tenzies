import './styles/Dice.css'
export default function Dice(props){
    return(
        <button
            style={{backgroundColor: props.isHeld ? '#59E391' : 'white'}}
            className='die'>{props.value}</button>
    )
}