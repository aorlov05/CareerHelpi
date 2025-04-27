import "./Results.css";
import React from 'react';
import { Answer } from "./QuizPages/QuizQuestion";

type ResultsProps = {
  answers: Answer[];
};

export function Results({ answers }: ResultsProps): React.JSX.Element {
  return (
    <div className="results-page">
      <h1>Quiz Results</h1>
      <div className="results-list">
        {answers.map((answer, index) => (
          <div key={index} className="result-item">
            <p>Q: {answer.question_name}</p>
            <p>A: {answer.question_result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
