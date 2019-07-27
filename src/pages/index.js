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
import restInABox from '../assets/images/rest-in-a-box2.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="BitcoinCash JavaScript Toolbox"
          meta={[
            { name: 'description', content: 'BitcoinCash JavaScript Toolbox' },
            {
              name: 'keywords',
              content: 'bitcoin, bitcoin cash, bch, javascript, docker',
            },
          ]}
        />

        <div id="main">
          <div className="grid-wrapper">
            <div className="col-6">
              <div className="youtube-responsive-container">
                <iframe
                  title="Bitcoin Cash JavaScript Toolbox"
                  src="https://www.youtube.com/embed/8w0CpQ8oydA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-6">
              <div style={{ padding: '20px' }}>
                <h2>Bitcoin Cash JavaScript Toolbox</h2>
                <p>
                  The Toolbox is a portable hard drive containing fully synced
                  indexers and full-nodes. It contains all the open source
                  infrastructure needed by web and mobile developers to build
                  moderns apps capable of interacting directly with the Bitcoin
                  Cash blockchain.
                </p>
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
                  <li>
                    <b>Cost:</b> $200 USD
                  </li>
                </ul>
                <br />
                <center>
                  <button>Learn More</button>
                </center>
              </div>
            </div>
          </div>

          <div className="grid-wrapper" style={{ padding: '50px' }}>
            <div className="col-12">
              <h2>What's on the disk?</h2>
              <p>
                The disk contains the following Bitcoin Cash infrastructure.
                Full nodes and indexers are synced at least once every three
                months, allowing for minmal time spent synchronizating after
                you recieve it.
                Links below are to the GitHub
                repositories. Each repository contains the Docker container
                or node.js
                software installed on the disk, used to run each layer of the
                stack.
              </p>
              <ul>
                <li>
                  <h3>Full Nodes</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/christroutner/docker-abc"
                        target="_blank"
                      >
                        ABC
                      </a> - The original BCH implimentation client that started
                      Bitcoin Cash.
                    </li>
                    <li>
                      <a href="https://github.com/gcash/bchd" target="_blank">
                        BCHD
                      </a>{' '}
                      (coming soon) - A new BCH full node implemenation written
                      in Go. Also possesses indexing capabilities.
                    </li>
                    <li>
                      <a
                        href="https://github.com/bcoin-org/bcash"
                        target="_blank"
                      >
                        bcash
                      </a>{' '}
                      (coming soon) - A new BCH full node implementation writen
                      in JavaScript for node.js. Also possesses indexing capabilities.
                    </li>
                  </ul>
                </li>

                <li>
                  <h3>Indexers</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/christroutner/docker-bitcore-node"
                        target="_blank"
                      >
                        Bitcore Node
                      </a> - Maintained
                      by <a href="https://bitpay.com/" target="_blank">Bitpay</a>, this
                      is a rebranded version of Insight
                      API. Written in Typescript, uses MongoDB.
                    </li>

                    <li>
                      <a
                        href="https://github.com/christroutner/docker-ubuntu-blockbook"
                        target="_blank"
                      >
                        Blockbook
                      </a> - Maintained
                      by <a href="https://trezor.io/" target="_blank">Trezor</a>. This
                      is the same API used by
                      their wallet hardware. Written in Go.
                    </li>

                    <li>
                      <a
                        href="https://github.com/christroutner/docker-slpdb"
                        target="_blank"
                      >
                        SLPDB
                      </a> - Written in Typescript and uses MongoDB. Indexes and
                      validates SLP token transactions.
                    </li>

                    <li>
                      <a
                        href="https://github.com/christroutner/insight-docker"
                        target="_blank"
                      >
                        Insight API
                      </a> - An older, deprecated version of Bitcore Node used
                      by rest.bitcoin.com and BITBOX.
                    </li>
                  </ul>
                </li>

                <li>
                  <h3>REST APIs</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/Bitcoin-com/rest.bitcoin.com"
                        target="_blank"
                      >
                        rest.bitcoin.com
                      </a> - Written in Typescript. The original REST API allowing
                      web and mobile apps to interface with the BCH blockchain.
                      Developed and managed by Bitcoin.com.
                    </li>

                    <li>
                      <a
                        href="https://github.com/christroutner/bch-api"
                        target="_blank"
                      >
                        bch-api
                      </a> - a fork of rest.bitcoin.com. Refactored
                      in JavaScript, and expanded to use Bitcore and Blockbook
                      APIs.
                    </li>
                  </ul>
                </li>

                <li>
                  <h3>BCH JS Libraries</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/Bitcoin-com/bitbox-sdk"
                        target="_blank"
                      >
                        BITBOX SDK
                      </a> - An npm library, written in Typescript and maintained
                      by Bitcoin.com to compliment their rest.bitcoin.com API
                      and cloud services.
                    </li>

                    <li>
                      <a
                        href="https://github.com/christroutner/bch-js"
                        target="_blank"
                      >
                        BCH JS
                      </a> - A fork of BITBOX SDK, refactored to JavaScript.
                      Includes endpoints for working with Blockbook and Bitcore.
                    </li>
                  </ul>
                </li>

                <li>
                  <h3>Example BCH Applications</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/Bitcoin-com/bch-cli-wallet"
                        target="_blank"
                      >
                        bch-cli-wallet
                      </a> - Both an npm library and command-line application
                      with HD wallet. Easy to use as a
                      stand-alone wallet, or it can be included in your next
                      JavaScript app to instantly give it wallet capabilities.
                    </li>

                    <li>
                      <a
                        href="https://github.com/christroutner/tip-bch"
                        target="_blank"
                      >
                        tip-bch
                      </a> - Tipping management app. Easily fund QR codes to
                      give paper or digitial 'tips'. Tipped funds can be recalled
                      if they are not claimed. A risk-free way to on-board
                      the crypto-curious.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid-wrapper" style={{ padding: '50px' }}>
            <div className="col-6">
              <center>
                <img src={restInABox} alt="" style={{ width: '100%'}} />
              </center>
            </div>

            <div className="col-6">
              <h2>REST API In A Box</h2>
              <p>
                Need a plug-and-play solution? This mini-pc is preconfigured to
                run all of the above infrastructure. Plug in power and an
                ethernet cable. That's all you need! No setup required.
                Specs on the PC:
              </p>
              <ul>
                <li>OS: Ubuntu 18.04 LTS</li>
                <li>Processor: Quad-core Intel i3</li>
                <li>Memory: 32 GB DDR4 RAM</li>
                <li>Drive: 120GB SSD internal, 4TB external</li>
                <li>All infrustrcture starts at boot. All available
                over <a href="/port-list">TCP ports listed here</a></li>
                <li><b>Cost:</b> $1,000 USD</li>
              </ul>

              <br />
              <center>
                <button>Learn More</button>
              </center>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
