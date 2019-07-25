/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Collapsible from '../components/MyCollapsible'
import styled from 'styled-components'

import pic11 from '../assets/images/pic11.jpg'

const StyledCollapsible = styled.div`
  background-color: #8482c426;
  padding: 15px;
`

const faqTitles = []
const faqContent = []

faqTitles.push('How much disk space?')
faqContent.push('This is the collapsible content.')

faqTitles.push('What should I ask?')
faqContent.push('An intelligent question.')

const trigger1 = `⊳ ${faqTitles[0]}`
const trigger2 = `↴ ${faqTitles[0]}`

const renderFaqs = () => {
  return faqTitles.map((title, index) => {
    //var trigger1 = `⊳ ${title}`
    //var trigger2 = `↴ ${title}`

    return (
      <StyledCollapsible key={title}>
        <Collapsible
          key={title}
          trigger={title}
          triggerWhenOpen={title}
          triggerTagName="h3"
          triggerStyle={{ margin: 0 }}
        >
        <p>{faqContent[index]}</p>
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
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor
            sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,
            fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit.
            Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
            Curabitur sapien risus, commodo eget turpis at, elementum convallis
            elit. Pellentesque enim turpis, hendrerit.
          </p>


          {renderFaqs()}

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
            Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
            Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
            risus, commodo eget turpis at, elementum convallis elit.
            Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
