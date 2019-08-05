/* eslint-disable */

import React from 'react'

const Footer = props => (
  <footer id="footer">
    <p>
      This site is also available over Tor: <a href="http://abuq3kgfrzlvrdb4.onion/">abuq3kgfrzlvrdb4.onion</a>
    </p>
    <p>
      Need support? Want to chat with other users? Check out
      our <a href="https://t.me/bch_js_toolkit" target="_blank">Telegram channel</a>.
    </p>
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://t.me/bch_js_toolkit" target="_blank" className="icon alt fa-telegram">
            <span className="label">Telegram</span>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/BCHJSToolkit" target="_blank" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/christroutner/bch-api" target="_blank" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/chris-troutner-7332bb8/" target="_blank" className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
