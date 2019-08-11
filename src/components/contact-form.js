/* eslint-disable */

/*
  This is a simple order form component. After a user fills out the form,
  an email will be generated.
*/

import React from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'
//import BadgerButton from './badger-button'
import spinningBitcoin from '../assets/images/spinning-bitcoin.gif'

const SERVER = `https://bchjs.cash/api`
//const SERVER = `http://localhost:5101`

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

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    _this = this

    this.state = {
      message: '',
      name: '',
      email: '',
      formMessage: '',
      logStr: '',
      errStr: '',
      showPanel1: { display: 'inline' },
      showPanel2: { display: 'none' },
      showPanel3: { display: 'none' },
      showPanel4: { display: 'none' },
      bchAddr: '',
      //bchPrice: 200/DEFAULT_BCH_PRICE
      bchPrice: null,
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
            Message: (optional)
            <textarea
              name="formMessage"
              onChange={this.handleUpdate}
              placeholder=""
              rows="3"
            />
            <br />
            <OutMsg>{this.state.message}</OutMsg>
            <br />
            <StyledButton
              href="#"
              className="button special badger-button"
              //onClick={this.invokeBadger}
              onClick={this.clickSubmitForm}
              data-to="bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al"
            >
              Place Order
            </StyledButton>
          </form>
        </div>

        <div className="panel2" style={_this.state.showPanel2}>
          <h2>Thank you!</h2>
          <p>
            An email has been dispatched to the site owner. We will respond as
            soon as possible.
          </p>
        </div>

        <div className="panel3" style={_this.state.showPanel3}>
          <center>
            <h2>
              Please send payment to this BCH address to complete your order.
            </h2>
            <p>
              Send{' '}
              <u>
                <b>{_this.state.bchPrice} BCH</b>
              </u>{' '}
              to the address below.
            </p>
          </center>
        </div>

        <div className="panel4" style={_this.state.showPanel4}>
          <h2>Error!</h2>
          <p>
            An error occured. Try reloading this page and trying again. If it
            continues, please try again later.
          </p>
        </div>
      </div>
    )
  }

  componentDidMount() {}

  async clickSubmitForm(event) {
    try {
      event.preventDefault()

      const validInput = _this.validateForm(_this.state)

      _this.submitOrderFormData()

      //_this.submitOrderFormData()
    } catch (err) {
      // Display the error on the DOM.
      _this.setState(prevState => ({
        message: `Error while trying to submit contact form: ${err.message}`,
      }))
    }
  }

  // This function is called after a successful payment with Badger Wallet.
  // It submits the txid and token data to the server.
  // The server then validates the TXID and creates the token.
  async submitOrderFormData() {
    try {
      console.log(`Entered submitOrderFormData().`)

      const obj = {
        name: _this.state.name,
        email: _this.state.email,
        formMessage: _this.state.formMessage,
      }

      const resp = await fetch(`${SERVER}/contact/email`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ obj }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await resp.json()

      console.log(`data: ${JSON.stringify(data, null, 2)}`)

      if (data.success) {
        // Hide  the 1st panel and show the second.
        _this.setState(prevState => ({
          showPanel1: { display: 'none' },
          showPanel2: { display: 'inline' },
        }))
      } else {
        // Hide  the 1st panel and show the second.
        _this.setState(prevState => ({
          showPanel1: { display: 'none' },
          showPanel4: { display: 'inline' },
        }))
      }
    } catch (err) {
      console.log(`Error in submitOrderFormData(): `, err)

      // Hide  the 1st panel and show the second.
      _this.setState(prevState => ({
        showPanel1: { display: 'none' },
        showPanel4: { display: 'inline' },
      }))
    }
  }

  // Validates the raw form input. Throws error if input is not valid.
  validateForm(state) {
    const email = state.email
    if (!email || email === '') {
      throw new Error(`Email can not be empty`)
    }

    const message = state.formMessage
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

export default ContactForm
