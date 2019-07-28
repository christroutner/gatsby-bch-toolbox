/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

// Page specific components
import OrderForm from '../components/order-form'

import harddrive from '../assets/images/hard-drive.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Buy Trout's Bitcoin Cash JavaScript Toolkit</title>
      <meta
        name="description"
        content="Buy Trout's Bitcoin Cash JavaScript Toolkit"
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Buy the Toolkit</h1>
          </header>

          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                Fill out the form below to order your own drive. Ensure you have{' '}
                <a href="https://badger.bitcoin.com" target="_blank">
                  Badger Wallet
                </a>{' '}
                installed in your browser and at least $200 worth of Bitcoin
                Cash loaded in the wallet. Alternatively, a QR code will appear
                after you submit the form, and you can pay by sending the
                Bitcoin Cash to that address.
              </p>
            </div>
          </div>

          <OrderForm />
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
