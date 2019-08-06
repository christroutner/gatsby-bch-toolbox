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
                <div className="col-6">
                  <span className="image main">
                    <img src={serverpic} alt="" style={{ width: '100%' }} />
                  </span>
                </div>
                <div className="col-6">
                  <p>
                    The microserver can be built from parts readily available on
                    Amazon.com. It runs all{' '}
                    <a href="/toolkit-info/">the networking software</a> which
                    makes up the rest.bitcoin.com stack as well as the bch-api
                    stack. If you are skilled in Docker and Linux
                    administration, you are encouraged to{' '}
                    <a href="/build-server/">build your own</a>. Otherwise, a
                    preconfigured, turn-key microserver is available for{' '}
                    <a href="#">purchase</a>.
                  </p>

                  <center>
                    <button
                      className="button"
                      onClick={this.buildButton}
                      style={{ margin: '20px' }}
                    >
                      Build It
                    </button>
                    <button
                      className="button special"
                      onClick={this.buyButton}
                      style={{ margin: '20px' }}
                    >
                      Buy It
                    </button>
                  </center>
                </div>
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

  buildButton() {
    window.location.href = '/build-server/'
  }
}

export default ToolkitInfo
