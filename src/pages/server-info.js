/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import serverpic from '../assets/images/rest-in-a-box2.jpg'

class ToolkitInfo extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>About the Microserver</title>
          <meta
            name="description"
            content="Buy Trout's Bitcoin Cash JavaScript Toolkit"
          />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>About the Microserver</h1>
              </header>

              <div className="grid-wrapper">
                <div className="col-1" />
                <div className="col-4">
                  <span className="image main">
                    <img src={serverpic} alt="" style={{ width: '100%' }} />
                  </span>
                </div>
                <div className="col-6">
                <p>
                  This page is under construction. More information will be
                  added soon.
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
    window.location.href = '/'
  }
}

export default ToolkitInfo
