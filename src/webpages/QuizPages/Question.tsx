import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { BasicQuizQuestion,DetailedQuizQuestion } from './QuizQuestion';
import "./Quiz.css"

type QuestionProps = {
    addProgress: () => void;
    quizQuestion: BasicQuizQuestion | DetailedQuizQuestion;
    updateAnswer: (questionName: string, questionResult: string) => void;
    selectedAnswer: string;
  };
  
  export function Question({
    addProgress,
    quizQuestion,
    updateAnswer,
    selectedAnswer
  }: QuestionProps): React.JSX.Element {
    const [answered, setAnswered] = useState<boolean>(false);
  
    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      if (!answered) {
        setAnswered(true);
        addProgress();
      }
      updateAnswer(quizQuestion.name, event.target.value);
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
            quizQuestion.options.map((option: string) => (
              <Form.Check
                inline
                type="radio"
                key={option}
                name={`options-${quizQuestion.name}`}
                onChange={handleChange}
                label={option}
                value={option}
                checked={selectedAnswer === option}
              />
            ))
          ) : (
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type your response here..."
              value={selectedAnswer}
              onChange={handleChange}
            />
          )}
        </div>
      </Form.Group>
    );
}