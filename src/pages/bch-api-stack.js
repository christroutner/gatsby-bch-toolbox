/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

//import pic11 from '../assets/images/pic11.jpg'
import bchapiStack from '../assets/images/bch-api-stack.jpeg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>bch-api Application Stack</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>bch-api Application Stack</h1>
          </header>

          <div className="grid-wrapper">
            <div className="col-2" />
            <div className="col-8">
              <p>
                Below is a graphical view of the software making up the bch-api
                application stack.
              </p>
              <span className="image main">
                <img src={bchapiStack} alt="" />
              </span>
            </div>
            <div className="col-2" />
          </div>

          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                The software stack behind bch-api is visualized above. From
                bottom to top, the stack is composed of the following
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
                        href="https://github.com/christroutner/docker-bitcore-node"
                        target="_blank"
                      >
                        Bitcore Node
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/christroutner/docker-ubuntu-blockbook"
                        target="_blank"
                      >
                        Blockbook
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
                        href="https://github.com/christroutner/bch-api"
                        target="_blank"
                      >
                        bch-api
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <h4>JavaScript Library</h4>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/christroutner/bch-js"
                        target="_blank"
                      >
                        bch-js
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <p>
                The top-most layer, the 'Application' layer represents the web
                or mobile application created <b>by</b> software developers,{' '}
                <b>for</b> end users. Application developers build on top of the
                stack of infrastructure below them, using the REST API and
                JavaScript library. The REST API and library abstract away the
                complexity of directly dealing with the full node and indexer
                software.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
