import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionPage from './components/QuestionPage';
import Result from './pages/Result'

const App = () => {
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers(prev => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleGoBack = (questionId,) => {
    if (questionId != undefined) {
      setAnswers(prev => {
        const updated = { ...prev };
        delete updated[questionId];
        return updated;
      });
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/q/:id" element={<QuestionPage answers={answers} onAnswer={handleAnswer} onGoBack={handleGoBack} />} />
        <Route path="/result" element={<Result answers={answers} />} />
      </Routes>
    </Router>
  )
}

export default App  