/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

//import pic11 from '../assets/images/pic11.jpg'
import restStack from '../assets/images/rest-stack.jpeg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>rest.bitcoin.com Application Stack</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>rest.bitcoin.com Application Stack</h1>
          </header>

          <div className="grid-wrapper">
            <div className="col-3" />
            <div className="col-6">
              <p>
                Below is a graphical view of the software making up the
                rest.bitcoin.com application stack.
              </p>
              <span className="image main">
                <img src={restStack} alt="" />
              </span>
            </div>
            <div className="col-3" />
          </div>

          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                The software stack behind rest.bitcoin.com is visualized above.
                From bottom to top, the stack is composed of the following
                applications:
              </p>
              <ul>
                <li>
                  <h4>Full Nodes</h4>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/christroutner/docker-abc"
                        target="_blank"
                      >
                        ABC full node
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4>Indexers</h4>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/christroutner/insight-docker"
                        target="_blank"
                      >
                        Insight API v3
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/christroutner/docker-slpdb"
                        target="_blank"
                      >
                        SLPDB
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <h4>REST API</h4>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/christroutner/docker-rest.bitcoin.com"
                        target="_blank"
                      >
                        rest.bitcoin.com
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <h4>JavaScript Library</h4>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/Bitcoin-com/bitbox-sdk"
                        target="_blank"
                      >
                        BITBOX
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <p>
                The top-most layer, the 'Application' layer represents the web
                or mobile application created by software developers, for end
                users. Application developers build on top of the stack of
                infrasturcture below them, using the REST API and JavaScript
                library. They abstract away the complexity of directly dealing
                with the full node and indexer software.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
