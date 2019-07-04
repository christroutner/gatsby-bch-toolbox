import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import harddrive from '../assets/images/hard-drive.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Buy Trout's Bitcoin Cash JavaScript Toolkit</title>
            <meta name="description" content="Buy Trout's Bitcoin Cash JavaScript Toolkit" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Buy the Toolkit</h1>
                    </header>


                    <div className="grid-wrapper">
                      <div className="col-1">
                      </div>
                      <div className="col-4">
                        <span className="image main"><img src={harddrive} alt="" style={{ width: '300px'}} /></span>
                      </div>
                      <div className="col-6">
                        <p>
                          The Bitcoin Cash JavaScript toolkit is a pre-programmed
                          portable hard drive with the entire blockchain downloaded
                          to it. This includes both mainnet and testnet blockchains,
                          as well as the database of several indexers.
                        </p>
                        <p>
                          <b>Note:</b> This hard drive is formatted using
                          the <i>ext4</i> filesystem. It is only readable by the
                          Linux operating system. Windows and Mac will not
                          recognize this file format.
                        </p>
                      </div>
                      <div className="col-1">
                      </div>
                    </div>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
