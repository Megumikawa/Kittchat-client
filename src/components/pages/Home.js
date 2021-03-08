import React, { Component } from 'react'
import Footer from '../Footer'

class Home extends Component {
  render() {
    return (
      <div >
        <div style={{backgroundImage: `url(/images/cat-bg.jpg)`}} className="main-body home-body">
          <div className="home-inside">
            <h1>Kittchat</h1>
            <p>Welcome to Kittchat Cafe!<br />We have many cute and friendly cats in each cafe.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home