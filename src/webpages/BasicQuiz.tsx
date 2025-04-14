import React, { useState } from 'react';
import { QuizQuestion } from '../QuizQuestion';
import { Question } from '../Question';
import { Button } from 'react-bootstrap';
import './BasicQuiz.css';
const BASIC_QUESTIONS: QuizQuestion[] = [
    {
        name: "Where do you see yourself working?",
        options: [
            "At home", "In a creative studio", "Outdoors in nature", "In the office"
        ]
    },
    {
        name: "What subject do you like the best?",
        options: [
            "Math", "Business", "Art", "Science"
        ]
    },
    {
        name: "Question example 3?",
        options: [
            "A", "B", "C", "D"
        ]
    },
    {
        name: "Question example 4?",
        options: [
            "A", "B", "C", "D"
        ]
    },
    {
        name: "Question example 5?",
        options: [
            "A", "B", "C", "D"
        ]
    },
    {
        name: "Question example 6?",
        options: [
            "A", "B", "C", "D"
        ]
    },
    {
        name: "Question example 7?",
        options: [
            "A", "B", "C", "D"
        ]
    },
]

export function BasicQuiz(): React.JSX.Element {
    const [progress, setProgress] = useState<number>(0);

    function addProgress() {
        setProgress(progress + 1);
    }

    function isFinished(): boolean {
        return progress === BASIC_QUESTIONS.length;
    }

    return (
        <div className = "basic-quiz-wrapper">
            <h1>Basic Quiz</h1>
            { BASIC_QUESTIONS.map((quizQuestion: QuizQuestion) => 
                <div className = "basic-question"><Question addProgress={addProgress} key={quizQuestion.name} quizQuestion={quizQuestion}></Question></div>
            )}
            <Button disabled={!isFinished()}>Get Results</Button>
        </div>
    )
}
