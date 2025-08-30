import React from 'react'
import '../assets/question.css'
import Option from './Option'
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from './Button';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import questions from "../data/questions.json";

const QuestionPage = ({ answers, onAnswer, onGoBack }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    let isLastQuestion = (id == Object.keys(questions).length);

    const currentQ = questions[Number(id) - 1];
    const selectedOption = answers[currentQ.id];

    return (
        <div className="container">
            <div className="main-part">
                <div className="question">
                    <h1>{currentQ.text}</h1>
                </div>
                <div className="options-group">
                    {currentQ.options.map((option) => (
                        <Option
                            key={option.id}
                            id={option.id}
                            text={option.text}
                            isSelected={selectedOption === option.id}
                            onClick={() => onAnswer(currentQ.id, option.text)} />
                    ))}
                </div>
                <div className="btn-group">
                    {/* <Link to={'..'} className="back">
                        <p>Back</p>
                    </Link> */}
                    <p className="back" onClick={() => {
                        navigate(-1);
                        onGoBack(currentQ.id)
                    }}>
                        Back
                    </p>
                    {isLastQuestion
                        ? <Link to={`/result`}>
                            <Button text="Discover your results"></Button>
                        </Link>
                        : <Link to={`/q/${currentQ.id + 1}`}>
                            <Button text="Next question →"></Button>
                        </Link>}
                </div>
            </div>
            <div className="aside">
                <CircularProgressbar
                    value={`${(currentQ.id / 5) * 100}`}
                    text={`${currentQ.id}/5`}
                    strokeWidth={5}
                    styles={buildStyles({
                        pathColor: `#AADDF3`,
                        trailColor: '#EEF7FB',
                        textColor: '#1C2635'
                    })}></CircularProgressbar>
            </div>
        </div>
    )
}

export default QuestionPage  