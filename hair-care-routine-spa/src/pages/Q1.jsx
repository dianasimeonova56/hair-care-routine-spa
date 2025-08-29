import React from 'react'
import '../assets/question.css'
import Option from '../components/Option'
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const options = [
    {
        "id": "a",
        "text": "Straight"
    },
    {
        "id": "b",
        "text": "Curly"
    },
    {
        "id": "c",
        "text": "Wavy"
    },
    {
        "id": "d",
        "text": "Fine"
    }
]

const Q1 = () => {
    return (
        <div className="container">
            <div className="question">
                <h1>What's your hair type or texture?</h1>
            </div>
            <div className="options-group">
                {options.map((option) => (
                    <Option key={option.id} id={option.id} text={option.text} />
                ))}
            </div>
            <div className="btn-group">
                <Link to={'..'} className="back">
                   <p>Back</p>
                </Link>
                <Link to='/q2'>
                    <Button text="Next question →"></Button>
                </Link>
            </div>
        </div>
    )
}

export default Q1  