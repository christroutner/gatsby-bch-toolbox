/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import harddrive from '../assets/images/hard-drive.jpg'

class ToolkitInfo extends React.Component {
  render() {
    return (
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
                  <p>
                    <b>Price: $200</b> in Bitcoin Cash (BCH).
                  </p>
                  <button onClick={this.buyButton}>Buy Now</button>
                  <br />
                  <br />
                </div>
                <div className="col-1" />
              </div>

              <div className="grid-wrapper">
                <div className="col-6">
                  <h2>Navigating the Stack</h2>
                  <p>
                    The video discusses the two types of software stacks that
                    can be constructed with the data in the Toolkit.
                  </p>
                  <ul>
                    <li>
                      A replication of <a href="https://rest.bitcoin.com" target="_blank">
                      rest.bitcoin.com</a>. (<a href="#">See Diagram</a>)
                    </li>
                    <li>
                      <a href="https://github.com/christroutner/bch-api">bch-api</a> an
                      alternative implementation of rest.bitcoin.com.
                      (<a href="#">See Diagram</a>)
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
