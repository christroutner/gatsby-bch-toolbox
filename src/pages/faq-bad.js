/* eslint-disable */

/*
The hard drive is formatted as ext4. You can download software for
Mac or Windows in order to read this format:
- Mac: http://osxdaily.com/2014/03/20/mount-ext-linux-file-system-mac/
- Windows: https://www.howtogeek.com/112888/3-ways-to-access-your-linux-partitions-from-windows/

*/

import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Collapsible from '../components/MyCollapsible'
import styled from 'styled-components'
import FAQComponent from '../components/faq-component'

import pic11 from '../assets/images/pic11.jpg'

const StyledCollapsible = styled.div`
  background-color: #8482c426;
  padding: 15px;
`

const faqTitles = []
const faqContent = []

faqTitles.push('How can I access the hard drive on Windows or Mac OS?')
/*
faqContent.push(() => {
  <p>
  test<p>})
*/
faqContent.push(() => {
  <p>test</p>
})

faqTitles.push('What should I ask?')
//faqContent.push('An intelligent question.')
/*
faqContent.push(() => {
  <div>
    <p>test</p>
  </div>
})
*/
//faqContent.push('test')
faqContent.push(() => {
  <p>test</p>
})

// <p>{faqContent[index]}</p>

class FAQ extends React.Component {
  constructor(props) {
    super(props)
  }

  // Compile all the FAQ data into a JSX component.
  faqComponents = () => {
    var trigger1 = `⊳ test`
    var trigger2 = `↴ test`

    return faqTitles.map((title, index) => {
      //var trigger1 = `⊳ ${title}`
      //var trigger2 = `↴ ${title}`

      return (
        <StyledCollapsible key={title}>
          <Collapsible
            key={title}
            trigger="trigger1"
            triggerWhenOpen="trigger2"
            triggerTagName="h3"
            triggerStyle={{ margin: 0 }}
          >
          <FAQComponent />
          </Collapsible>
        </StyledCollapsible>
      )
    })
  }

  // Render the page.
  render() {
    return (
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
                Click on the titles below to expand the answer to each
                Frequently Asked Question.
              </p>
              {this.faqComponents}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default FAQ
