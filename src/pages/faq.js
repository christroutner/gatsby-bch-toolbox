/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Collapsible from '../components/MyCollapsible'
import styled from 'styled-components'

import pic11 from '../assets/images/research-header.jpg'

const StyledCollapsible = styled.div`
  background-color: #8482c426;
  padding: 15px;
`

const faqTitles = []
const faqContent = []

faqTitles.push('How can I open the disk in Windows or Mac OS?')
faqContent.push(() => {
  return (
    <div>
      <p>
        Reading of ext4 formatted drives is possible with the installation of a
        plugin:
      </p>
      <ul>
        <li>
          <a
            href="http://osxdaily.com/2014/03/20/mount-ext-linux-file-system-mac/"
            target="_blank"
          >
            Mac OS{' '}
          </a>
        </li>
        <li>
          <a
            href="https://www.howtogeek.com/112888/3-ways-to-access-your-linux-partitions-from-windows/"
            target="_blank"
          >
            Windows OS{' '}
          </a>
        </li>
      </ul>
    </div>
  )
})

faqTitles.push('What should I ask?')
faqContent.push(() => {
  return <p>An intelligent question.</p>
})

const renderFaqs = () => {
  return faqTitles.map((title, index) => {
    const trigger1 = `⊳ ${title}`
    const trigger2 = `↴ ${title}`

    return (
      <StyledCollapsible key={title}>
        <Collapsible
          key={title}
          trigger={trigger1}
          triggerWhenOpen={trigger2}
          triggerTagName="h3"
          triggerStyle={{ margin: 0 }}
        >
          {faqContent[index]()}
        </Collapsible>
      </StyledCollapsible>
    )
  })
}

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Generic - Forty by HTML5 UP</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Frequently Asked Questions</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>

          {renderFaqs()}
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
