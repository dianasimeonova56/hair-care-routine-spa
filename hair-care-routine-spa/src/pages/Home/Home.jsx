import React from 'react'
import '../../assets/home.css'

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src="/images/spa.jpg" />
      </div>
      <div className="btn-group">
        <h1>Build a self care routine suitable for you</h1>
        <p>Take out test to get a personalised self care <br/>
        routine based on your needs.</p>
        <button>Start the quiz</button>
      </div>
    </div>
  )
}

export default Home  