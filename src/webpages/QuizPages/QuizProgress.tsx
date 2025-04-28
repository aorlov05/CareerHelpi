import React from 'react';
import { ProgressBar } from 'react-bootstrap';
//import "./webpages/QuizPages/Quiz.css";

export function Progress({ 
    progress, 
    numOfQuestions,
}: { 
    progress: number;
    numOfQuestions: number;
}): React.JSX.Element {
    return <ProgressBar striped className="quiz-progress-bar" now={progress} max={numOfQuestions} />
}
