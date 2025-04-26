import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BasicQuizQuestion,DetailedQuizQuestion } from './QuizQuestion';
import "./webpages/BasicQuiz.css"


type QuestionProps = 
    { addProgress: () => void; quizQuestion: BasicQuizQuestion } 
    | { addProgress: () => void; quizQuestion: DetailedQuizQuestion };

export function Question({ 
    addProgress, 
    quizQuestion 
}: QuestionProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [answered, setAnswered] = useState<boolean>(false);

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        if (!answered) {
            setAnswered(true);
            addProgress();
        }

        setAnswer(event.target.value);
    }

    function isBasicQuestion(q: BasicQuizQuestion | DetailedQuizQuestion): q is BasicQuizQuestion {
        return (q as BasicQuizQuestion).options !== undefined;
    }

    return (
        <Form.Group controlId="answers">
            <h3>
                <Form.Label>{quizQuestion.name}</Form.Label>
            </h3>
            <div className="options">
                {isBasicQuestion(quizQuestion) ? (
                    //BasicQuizQuestion (multiple choice)
                    quizQuestion.options.map((option: string) => (
                        <Form.Check
                            inline
                            type="radio"
                            key={option}
                            name={`options-${quizQuestion.name}`}
                            onChange={updateAnswer}
                            label={option}
                            value={option}
                            checked={answer === option}
                        />
                    ))
                ) : (
                    //DetailedQuizQuestion (text area)
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Type your response here..."
                        value={answer}
                        onChange={updateAnswer}
                    />
                )}
            </div>
        </Form.Group>
    );
}