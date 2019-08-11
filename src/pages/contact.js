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
            <h1>Contact Us</h1>
          </header>

          <div className="grid-wrapper">
            <div className="col-12">
              <p>
                Fill out the form below to send an email to the organziation
                running this website.
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
