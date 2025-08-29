import React from 'react'
import '../assets/home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src="/images/spa.jpg" />
      </div>
      <div className="btn-group">
        <h1>Build a self care routine suitable for you</h1>
        <p>Take out test to get a personalised self care <br />
          routine based on your needs.</p>
        <Link to="/q1">
          <button>Start the quiz</button>
        </Link>
      </div>
    </div>
  )
}

export default Home  