// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denItems, onDecrement} = props
  const {value} = denItems

  const decrement = () => {
    onDecrement(value)
  }

  return (
    <li>
      <button className="price-amount" onClick={decrement} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

/* 
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
*/
