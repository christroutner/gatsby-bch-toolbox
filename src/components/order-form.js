/* eslint-disable */

/*
  This is a simple order form component. After a user fills out the form, a
  BCH transaction will be generated inside Badger Wallet. Once the transaction
  is paid, the contents of the form will be submitted to the server to be
  emailed to the store admin.
*/

import React from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'
//import BadgerButton from './badger-button'
import spinningBitcoin from '../assets/images/spinning-bitcoin.gif'

const SERVER = `http://localhost:5000`;
//const SERVER = ``
const RECV_ADDR = 'bitcoincash:qpgusltsseyslth9azccyxel5gne2257fq0p9q2nkj'

const StyledButton = styled.a`
  margin: 10px;
  margin-bottom: 25px;
`

const OutMsg = styled.p`
  color: red;
  font-weight: bold;
  size: 18px;
`

const TextArea = styled.textarea`
  font-size: 14px;
  height: 400px;
`

let _this

class OrderForm extends React.Component {
  constructor(props) {
    super(props)

    _this = this

    this.state = {
      message: '',
      name: '',
      email: '',
      mailingaddress: '',
      message: '',
      usd2bch: 300.0,
      logStr: '',
      errStr: '',
      showPanel1: {display: 'inline'},
      showPanel2: {display: 'none'},
      showPanel3: {display: 'none'},
      showPanel4: {display: 'none'}
    }
  }

  render() {
    return (
      <div>
        <div className="panel1" style={_this.state.showPanel1}>
          <form>
            Name: (How we should address you in email)
            <input
              type="text"
              name="name"
              onChange={this.handleUpdate}
              placeholder="John Doe"
            />
            <br />
            Email:
            <input
              type="text"
              name="email"
              onChange={this.handleUpdate}
              placeholder="your@email.com"
            />
            <br />
            Mailing Address:
            <textarea
              name="mailingaddress"
              onChange={this.handleUpdate}
              placeholder="123 Place St&#10;line 2&#10;City, OR 98015"
              rows="3"
            / >
            <br />
            Message: (optional)
            <textarea
              name="message"
              onChange={this.handleUpdate}
              placeholder=""
              rows="3"
            / >

            <br />
            <OutMsg>{this.state.message}</OutMsg>
            <br />
            <StyledButton
              href="#"
              className="button special badger-button"
              //onClick={this.invokeBadger}
              onClick={this.clickCreateToken}
              data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al"
            >
              Place Order
            </StyledButton>
          </form>
        </div>

        <div className="panel2" style={_this.state.showPanel2}>
          <h2>Creating your tokens...</h2>
          <img src={spinningBitcoin} />
        </div>

        <div className="panel3" style={_this.state.showPanel3}>
          <h2>Please print this data for your records</h2>
          <p>
            The information below contains a private key for the wallet that
            controls the minting baton for your new token. This minting baton
            will be needed if you want to create more tokens. Throw it away
            if you want your token amount to be fixed forever.
          </p>
          <p>
            Your new tokens should show up in your Badger Wallet in the next
            few seconds.
          </p>
          <TextArea className="outputData" readOnly value={this.state.logStr}>
          </TextArea>
        </div>

        <div className="panel4" style={_this.state.showPanel4}>
          <h2>Error!</h2>
          <p>
            An error occured. Try reloading this page and trying again. If your
            wallet sent money and you need a refund, email the TXID for the
            transaction to <a href="mailto:bengentle@mailbox.org">bengentle@mailbox.org</a>.
            I will investigate the logs and refund payment to the sending address
            if I deem the issue was not due to user error.
          </p>
          <p>
            Please copy and paste the below information into the email:
          </p>
          <TextArea className="outputData" readOnly value={this.state.errStr}>
          </TextArea>
        </div>
      </div>

    )
  }

  componentDidMount() {
    this.getExchangeRate()
  }

  // Pulls the latest exchange rate data from coinbase.
  async getExchangeRate() {
    const resp = await fetch(
      `https://api.coinbase.com/v2/exchange-rates?currency=BCH`
    )
    const body = await resp.json()

    _this.setState(prevState => ({
      usd2bch: Number(body.data.rates.USD),
    }))
    console.log(`Exchange rate: $${_this.state.usd2bch} per BCH`)
  }

  clickCreateToken(event) {
    try {
      event.preventDefault()

      const validInput = _this.validateForm(_this.state)

      _this.invokeBadger()

      //_this.submitTokenData()
    } catch (err) {
      // Display the error on the DOM.
      _this.setState(prevState => ({
        message: err.message,
      }))
    }
  }

  // Invokes Badger Wallet with a transaction for paying for the token creation.
  invokeBadger() {
    try {
      const USD_TO_SEND = 0.02
      const SATS_PER_BCH = 100000000
      let sats = Math.floor((USD_TO_SEND * SATS_PER_BCH) / _this.state.usd2bch)
      console.log(`Sending ${sats} BCH`)

      const badgerButtons = document.body.getElementsByClassName(
        'badger-button'
      )
      const badgerButton = badgerButtons[0]

      if (typeof web4bch !== 'undefined') {
        // Instantiate web4bch
        web4bch = new Web4Bch(web4bch.currentProvider)

        // Prevent value=null bug
        if (sats === null || isNaN(sats)) sats = 10000

        var txParams = {
          to: RECV_ADDR,
          from: web4bch.bch.defaultAccount,
          value: sats,
        }

        web4bch.bch.sendTransaction(txParams, (err, txid) => {
          if (err) {
            // Display the error on the DOM.
            _this.setState(prevState => ({
              message: `Transaction failed!`,
            }))
            return
          }

          console.log(`Transaction sent! TXID: ${txid}`)

          _this.submitTokenData(txid)

          // Hide  the 1st panel and show the second.
          _this.setState(prevState => ({
            showPanel1: {display: 'none'},
            showPanel2: {display: 'inline'},
          }))
        })
      } else {
        window.open('https://badgerwallet.cash')
      }
    } catch (err) {
      // Display the error on the DOM.
      _this.setState(prevState => ({
        message: `Badger wallet error: ${err.message}`,
      }))
    }
  }

  // This function is called after a successful payment with Badger Wallet.
  // It submits the txid and token data to the server.
  // The server then validates the TXID and creates the token.
  async submitTokenData(txid) {
    try {
      const token = _this.state
      token.txid = txid

      const resp = await fetch(`${SERVER}/token`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ token }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await resp.json()

      // Display last panel and the log data
      _this.setState(prevState => ({
        logStr: JSON.stringify(data,null,2),
        showPanel2: {display: 'none'},
        showPanel3: {display: 'inline'}
      }))
    } catch (err) {
      debugger
      console.log(`Error in submitTokenData(): `, err)
      const thisErr = err

      // Hide  the 1st panel and show the second.
      _this.setState(prevState => ({
        showPanel2: {display: 'none'},
        showPanel4: {display: 'inline'},
        errStr: `
txid: ${_this.state.txid}

error: ${err.message}
        `
      }))

      //throw err
    }
  }

  // Validates the raw form input. Throws error if input is not valid.
  validateForm(state) {
    const email = state.email
    if (!email || email === '') {
      throw new Error(`Email can not be empty`)
    }

    const mailingaddress = state.mailingaddress
    if (!mailingaddress || mailingaddress === '') {
      throw new Error(`Mailing Address can not be empty`)
    }

    const message = state.message
    if (!message || message === '') {
      throw new Error(`Message can not be empty`)
    }

    return state
  }

  // Reactive event handler updates state as user types in the form inputs.
  handleUpdate(event) {
    _this.setState({
      [event.target.name]: event.target.value,
    })
  }

}

export default OrderForm