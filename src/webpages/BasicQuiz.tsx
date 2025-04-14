import React, { useState } from 'react';
import { QuizQuestion } from '../QuizQuestion';
import { Question } from '../Question';
import { Button } from 'react-bootstrap';
import { Progress } from '../Progress';

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
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "2rem" }}>
            <div className="quiz-card full-quiz">
                <h1>Basic Quiz</h1>
                { BASIC_QUESTIONS.map((quizQuestion: QuizQuestion) => 
                    <Question addProgress={addProgress} key={quizQuestion.name} quizQuestion={quizQuestion} />
                )}
                <Progress progress={progress} numOfQuestions={BASIC_QUESTIONS.length} />
                <Button disabled={!isFinished()}>Get Results</Button>
            </div>
        </div>
    )
}
