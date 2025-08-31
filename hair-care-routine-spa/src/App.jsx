import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionPage from './components/QuestionPage';
import Result from './pages/Result'

const App = () => {
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem("quizAnswers");
    return saved ? JSON.parse(saved) : {};
  });

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers(prev => {
      const updated = { ...prev, [questionId]: selectedOption };
      localStorage.setItem("quizAnswers", JSON.stringify(updated));
      return updated;
    });
  };

  const handleGoBack = (questionId) => {
    if (questionId != undefined) {
      setAnswers(prev => {
        const updated = { ...prev };
        delete updated[questionId];
        return updated;
      });
    }
  }

  const deleteSavedAnswers = () => {
    localStorage.removeItem("quizAnswers");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home deleteAnswers={deleteSavedAnswers} />} />
        <Route path="/q/:id" element={<QuestionPage answers={answers} onAnswer={handleAnswer} onGoBack={handleGoBack} />} />
        <Route path="/result" element={<Result answers={answers} onDeleteSavedAnswers={deleteSavedAnswers} />} />
      </Routes>
    </Router>
  )
}

export default App  