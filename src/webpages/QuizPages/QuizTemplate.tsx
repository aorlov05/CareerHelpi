import React, { useState } from "react";
import { Question } from "./Question";
import { Button } from "react-bootstrap";
import { Progress } from "./QuizProgress";

interface QuizTemplateProps<T> {
  quizTitle: string;
  questions: T[];
  numOfQuestions: number;
  renderQuestion: (question: T, addProgress: () => void) => React.ReactNode;
}

export function QuizTemplate<T>({ quizTitle, questions, numOfQuestions, renderQuestion }: QuizTemplateProps<T>): React.JSX.Element {
  const [progress, setProgress] = useState<number>(0);

  function addProgress() {
    setProgress(prev => prev + 1);
  }

  function isFinished(): boolean {
    return progress === numOfQuestions;
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "2rem" }}>
        <div className="basic-quiz">
          <h1>{quizTitle}</h1>
          {questions.map((quizQuestion, index) => (
            <div className="basic-question" key={index}>
              {renderQuestion(quizQuestion, addProgress)}
            </div>
          ))}
          <div className="get-results">
            <Button disabled={!isFinished()}>Get Results</Button>
          </div>
        </div>
      </div>
      <div className="progress-footer">
        <Progress progress={progress} numOfQuestions={numOfQuestions} />
      </div>
    </div>
  );
}
