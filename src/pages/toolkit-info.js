/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import harddrive from '../assets/images/hard-drive.jpg'

const directoryStructure = `
├── full-nodes
│   └── mainnet
│   └── testnet
├── indexers
│   ├── insight # Insight API v3 used by rest.bitcoin.com
│   │   ├── mainnet
│   │   ├── testnet
│   ├── blockbook
│   │   ├── mainnet
│   │   ├── testnet
│   ├── bitcore
│   │   ├── mainnet
│   │   ├── testnet
│   ├── slpdb
│   │   ├── mainnet
│   │   ├── testnet
├── rest-apis
│   ├── bch-api
│   ├── docker-rest.bitcoin.com
├── libraries
│   ├── bch-js
│   ├── bitbox-sdk
`

class ToolkitInfo extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Info | Trout's Bitcoin Cash JavaScript Toolkit</title>
          <meta
            name="description"
            content="Buy Trout's Bitcoin Cash JavaScript Toolkit"
          />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>About the Toolkit</h1>
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
                    moderns apps capable of interacting directly with the
                    Bitcoin Cash blockchain.
                  </p>
                  <p>
                    <b>Note:</b> This hard drive is formatted using the{' '}
                    <i>ext4</i> filesystem. It is only readable by the Linux
                    operating system. Windows and Mac will not recognize this
                    file format by default. <a href="/faq">Check out the FAQ</a>{' '}
                    for software to read this format if you are using those
                    operating systems.
                  </p>
                  <center>
                    <p>
                      <b>Price: $200</b> in Bitcoin Cash (BCH).
                    </p>

                    <button className="button" onClick={this.buyButton}>
                      Buy Now
                    </button>
                  </center>
                  <br />
                  <br />
                </div>
                <div className="col-1" />
              </div>

              <div
                className="grid-wrapper"
                style={{ backgroundColor: '#375182', padding: '30px' }}
              >
                <div className="col-6">
                  <h2>Navigating the Stack</h2>
                  <p>
                    This video discusses the two types of software stacks that
                    can be constructed with the data in the Toolkit.
                  </p>
                  <ul>
                    <li>
                      A replication of{' '}
                      <a href="https://rest.bitcoin.com" target="_blank">
                        rest.bitcoin.com
                      </a>
                      . (<a href="/rest-stack">See Diagram</a>)
                    </li>
                    <li>
                      <a href="https://github.com/christroutner/bch-api">
                        bch-api
                      </a>{' '}
                      an alternative implementation of rest.bitcoin.com. (
                      <a href="/bch-api-stack">See Diagram</a>)
                    </li>
                  </ul>
                </div>

                <div className="col-6">
                  <div className="youtube-responsive-container">
                    <iframe
                      title="Bitcoin Cash JavaScript Toolbox"
                      src="https://www.youtube.com/embed/NpEaa2P7qZI"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              <br />

              <div className="grid-wrapper">
                <div className="col-6">
                  <h2>Directory Structure</h2>
                  <p>
                    The hard drive you recieve will have the following directory
                    structure. Each directory will contain:
                  </p>
                  <ul>
                    <li>A zip file of synced data.</li>
                    <li>
                      A copy of the repository used to create a Docker container
                      capable of reading the data in the zip file.
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <pre style={{ whiteSpace: 'pre-wrap' }}>
                    {directoryStructure}
                  </pre>
                </div>
              </div>

              <br />

              <div
                className="grid-wrapper"
                style={{ backgroundColor: '#375182', padding: '30px' }}
              >
                <div className="col-6">
                  <h2>Setting up the Software</h2>
                  <p>
                    This video discusses the basic workflow of starting the
                    software applications in the Toolkit for setting up an
                    application stack. Start at the bottom, and run the
                    applications from bottom to top, in this order:
                  </p>

                  <ol>
                    <li>Full node</li>
                    <li>Indexers</li>
                    <li>REST API</li>
                  </ol>

                  <p>
                    The general workflow for each layer of the stack is the
                    same:
                  </p>

                  <ol>
                    <li>Unzip the data.</li>
                    <li>Download or build the Docker container.</li>
                    <li>Run the Docker container.</li>
                  </ol>
                </div>

                <div className="col-6">
                  <div className="youtube-responsive-container">
                    <iframe
                      title="Bitcoin Cash JavaScript Toolbox"
                      src="https://www.youtube.com/embed/NpEaa2P7qZI"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              <br />

              <div className="grid-wrapper">
                <div className="col-12">
                  <center>
                    <button className="button" onClick={this.buyButton}>
                      Buy Now
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }

  buyButton() {
    window.location.href = '/buy-toolkit'
  }
}

export default ToolkitInfo
