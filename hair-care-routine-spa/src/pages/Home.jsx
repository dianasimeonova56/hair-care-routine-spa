import React from 'react'
import '../assets/home.css'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src="/images/spa.jpg" />
      </div>
      <div className="group">
        <h1>Build a self care routine suitable for you</h1>
        <p>Take out test to get a personalised self care <br />
          routine based on your needs.</p>
        <Link to="/q/1">
          {/* <Button text="Start the quiz"></Button> */}
          <button className='btn-start'>Start the quiz</button>
        </Link>
      </div>
    </div>
  )
}

export default Home  