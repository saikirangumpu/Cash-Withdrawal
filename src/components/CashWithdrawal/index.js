// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDecrement = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="name-container">
            <p className="logo">S</p>
            <h1 className="person-name"> Sarah Williams </h1>
          </div>
          <div className="balance-container">
            <p className="balance-mention"> Your Balance </p>
            <div className="actual-balance-container">
              <p className="balance-amount"> {amount} </p>
              <p className="balance-label"> In Rupees </p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-title"> Withdraw </p>
            <p className="withdraw-description"> CHOOSE SUM (IN RUPEES) </p>
            <ul className="amount-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denItems={eachItem}
                  key={eachItem.id}
                  onDecrement={this.onDecrement}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

/* 
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal


*/
