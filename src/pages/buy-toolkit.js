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
            <div className="col-1" />
            <div className="col-4">
              <span className="image main">
                <img src={harddrive} alt="" style={{ width: '300px' }} />
              </span>
            </div>
            <div className="col-6">
              <p>
                The Toolbox is a portable hard drive containing fully synced
                indexers and full-nodes. It contains all the open source
                infrastructure needed by web and mobile developers to build
                moderns apps capable of interacting directly with the Bitcoin
                Cash blockchain.
              </p>
              <p>
                <b>Note:</b> This hard drive is formatted using the <i>ext4</i>{' '}
                filesystem. It is only readable by the Linux operating system.
                Windows and Mac will not recognize this file format by default.
                {' '}<a href="/faq">Check out the FAQ</a> for software to read this format
                if you are using those operating systems.
              </p>
              <p>
                <b>Price: $200</b> in Bitcoin Cash (BCH).
              </p>
            </div>
            <div className="col-1" />
          </div>

          <div className="grid-wrapper">
            <div className="col-12">

            </div>
          </div>

          <p>
            Fill out the form below to order your own drive. Ensure you
            have <a href="https://badger.bitcoin.com" target="_blank">Badger Wallet</a> installed
            in your browser and at least $200 worth of Bitcoin Cash
            loaded in the wallet. Alternatively, a QR code will appear after
            you submit the code, and you can pay by sending the Bitcoin Cash
            to that address.
          </p>
          <OrderForm />

        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
