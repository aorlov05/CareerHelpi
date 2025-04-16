import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { QuizQuestion } from './QuizQuestion';
import "./webpages/BasicQuiz.css"
export function Question({ 
    addProgress, 
    quizQuestion 
}: { 
    addProgress: () => void; 
    quizQuestion: QuizQuestion; 
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [answered, setAnswered] = useState<boolean>(false);

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        if (!answered) {
            setAnswered(true);
            addProgress();
        }

        setAnswer(event.target.value);
    }

    return (
        <Form.Group controlId="answers">
            <h3>
                <Form.Label>{quizQuestion.name}</Form.Label>
            </h3>
            <div className = "options">
                { quizQuestion.options.map((option: string) => 
                    <Form.Check 
                        inline
                        type="radio" 
                        key={option}
                        name={`options-${quizQuestion.name}`} 
                        onChange={updateAnswer}
                        label={option} 
                        value={option} 
                        checked={answer === option} />
                )}
            </div>
        </Form.Group>
    );
}