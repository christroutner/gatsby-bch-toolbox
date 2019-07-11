import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

//import pic11 from '../assets/images/pic11.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Generic - Forty by HTML5 UP</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Port List for REST-in-a-box</h1>
          </header>

          <p>
            If you order a fully configured REST-in-a-box microserver, the computer
            will come configured with the following software running on the
            following ports.
          </p>
          <p>
            For example, if you home router assignes an IP address of
            192.168.0.16 to your mainnet microserver, you would be able to pull up
            the bch-api documentation by pointing your web browser at
            <code>http://192.168.0.16:12400</code>
          </p>

          <ul>
            <li>
              <h2>Mainnet</h2>
              <ul>
                <li>Full node JSON RPC: 8332</li>
                <li>Full node p2p: 8333</li>
                <li>Full node ZMQ: 28332</li>
                <li>Insight v3 REST API: 12100</li>
                <li>Insight v3 ZMQ: 12101</li>
                <li>Bitcore Node REST API: 12200</li>
                <li>Bitcore Node MongoDB: 12201 (not public)</li>
                <li>Blockbook REST API: 9131</li>
                <li>Blockbook Internal port: 9031</li>
                <li>slp-serve REST API: 12300</li>
                <li>slp-serve mongo DB: 12301 (not public)</li>
                <li>bch-api REST API port: 12400</li>
                <li>bch-api health check: 12401</li>
                <li>rest.bitcoin.com REST API: 12500</li>
                <li>rest.bitcoin.com health check: 12501</li>
                <li>netdata health monitoring: 19999</li>
              </ul>
            </li>
            <li>
              <h2>Testnet</h2>
              <li>Full node JSON RPC: 18332</li>
              <li>Full node p2p: 18333</li>
              <li>Full node ZMQ: 38332</li>
              <li>Insight v3 REST API: 13100</li>
              <li>Insight v3 ZMQ: 13101</li>
              <li>Bitcore Node REST API: 13200</li>
              <li>Bitcore MongoDB: 13201 (not public)</li>
              <li>Blockbook REST API: 19131</li>
              <li>Blockbook Internal port: 19031</li>
              <li>slp-serve REST API: 13300</li>
              <li>slp-db mongo DB: 13301 (not public)</li>
              <li>bch-api REST API port: 13400</li>
              <li>bch-api health check: 13401</li>
              <li>rest.bitcoin.com REST API: 13500</li>
              <li>rest.bitcoin.com health check: 13501</li>
              <li>netdata health monitoring: 19998</li>
            </li>
          </ul>

        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
