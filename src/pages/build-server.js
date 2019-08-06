/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import asus from '../assets/images/asus-bare-bones.jpg'
import ram from '../assets/images/ram.jpg'
import internalHD from '../assets/images/harddrive.jpg'
import harddrive from '../assets/images/hard-drive.jpg'

class ToolkitInfo extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Build Your Own Microserver</title>
          <meta
            name="description"
            content="Buy Trout's Bitcoin Cash JavaScript Toolkit"
          />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Build Your Own Microserver</h1>
              </header>

              <div className="grid-wrapper">
                <div className="col-12">
                  <p>
                    A parts list for all the hardware needed to build your own
                    copy of the bch-api microserver is below. All parts are
                    available on Amazon.com. Click on an image below to view
                    that part on Amazon.com.
                  </p>
                </div>
              </div>

              <div className="grid-wrapper">
                <div className="col-6">
                  <center>
                    <a href="https://amzn.to/2YIkI9W" target="_blank">
                      <h4>ASUS Bare-Bones Mini PC</h4>
                      <img src={asus} alt="" />
                    </a>
                  </center>
                </div>

                <div className="col-6">
                  <center>
                    <a href="https://amzn.to/31ocohx" target="_blank">
                      <h4>2x 16GB 2400MHz PC4-19200 RAM</h4>
                      <img src={ram} alt="" />
                    </a>
                  </center>
                </div>
              </div>

              <br />

              <div className="grid-wrapper">
                <div className="col-6">
                  <center>
                    <a href="https://amzn.to/2YL3nxh" target="_blank">
                      <h4>120GB Internal SSD HD</h4>
                      <img src={internalHD} alt="" />
                    </a>
                  </center>
                </div>

                <div className="col-6">
                  <center>
                    <a href="/toolkit-info/">
                      <h4>BCH JS Toolkit</h4>
                      <img src={harddrive} alt="" style={{width: '300px'}} />
                    </a>
                  </center>
                </div>
              </div>

              <div className="grid-wrapper">
                <div className="col-12">
                  <p>
                    The instructions for building the server is roughly as
                    follows:
                  </p>

                  <ol>
                    <li>
                      Order all the above parts.
                    </li>

                    <li>
                      Install the internal HD and memory into the bare-bones
                      mini-PC.
                    </li>

                    <li>
                      Use
                      a <a href="https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-ubuntu#0" target="_blank"> bootable USB flash drive </a>
                      loaded with Ubuntu 18.04 to install Ubuntu onto newly
                      assembled computer.
                    </li>

                    <li>
                      Configure the Toolkit portable hard drive to be mounted
                      at boot (typically in the <code>/mnt/usb</code> directory).
                    </li>

                    <li>
                      Unzip the files on the Toolkit and start the Docker containers
                      to build <a href="/toolkit-info/">the stack</a> of your
                      choice.
                    </li>
                  </ol>
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
    window.location.href = '/'
  }
}

export default ToolkitInfo
