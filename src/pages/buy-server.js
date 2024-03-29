/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

// Page specific components
import ContactForm from '../components/contact-form'

import harddrive from '../assets/images/hard-drive.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Buy Microserver</title>
      <meta
        name="description"
        content="Buy Trout's Bitcoin Cash JavaScript Toolkit"
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Buy the Microserver</h1>
          </header>

          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                Thank you for your interest in purchasing the microserver.
                Fill out the form below to begin a dialog with us. We'll email
                confirm your order, then send you a BCH address to
                deposit funds. New orders typically take three to four weeks for
                assembly and programming.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
