import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { QuizQuestion } from './QuizQuestion';

export function Question({ quizQuestion }: { quizQuestion: QuizQuestion }): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <Form.Group controlId="answers">
            <h3>
                <Form.Label>{quizQuestion.name}</Form.Label>
            </h3>
            <div>
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