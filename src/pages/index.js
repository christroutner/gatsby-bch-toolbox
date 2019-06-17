/* eslint-disable */

import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

//import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="BitcoinCash JavaScript Toolbox"
          meta={[
            { name: 'description', content: 'BitcoinCash JavaScript Toolbox' },
            { name: 'keywords', content: 'bitcoin, bitcoin cash, bch, javascript, docker' },
          ]}
        />

        <div id="main">
          <div className="grid-wrapper">
            <div className="col-6">
              <div class="youtube-responsive-container">
                <iframe
                  title="Bitcoin Cash JavaScript Toolbox"
                  src="https://www.youtube.com/embed/8w0CpQ8oydA"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
            <div className="col-6">
              <header className="major" style={{ padding: '20px' }}>
                <h2>Bitcoin Cash JavaScript Toolbox</h2>
                <ul>
                  <li>4 TB, USB 3.0, Portable Hard Drive</li>
                  <li>
                    Fully-synced full nodes and indexers for both mainnet and
                    testnet.
                  </li>
                  <li>Diversified indexers to prevent platform risk</li>
                  <li>
                    Only uses open source software licensed for commercial use.
                  </li>
                  <li>
                    Docker containers for easy deployment and customization.
                  </li>
                </ul>
                <br />
                <center><b>Cost</b>: $200</center>
              </header>
            </div>
          </div>

          <div className="grid-wrapper" style={{ padding: '50px' }}>
            <div className="col-6">
              <center>
                <button>Buy with Badger Wallet</button>
              </center>
            </div>

            <div className="col-6">
              <center>
                <button>Buy with Paypal</button>
              </center>
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export default HomeIndex
