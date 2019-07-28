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
                </div>
                <div className="col-1" />
              </div>

              <div className="grid-wrapper">
                <div className="col-12">
                  <p>
                    This page is under construction. More information will be
                    added soon.
                  </p>
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
