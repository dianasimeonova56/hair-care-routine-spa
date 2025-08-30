import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionPage from './components/QuestionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/q/:id" element={<QuestionPage />} />
      </Routes>
    </Router>
  )
}

export default App  