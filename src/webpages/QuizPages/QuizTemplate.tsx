import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Progress } from "./QuizProgress";
import {Answer} from  "./QuizQuestion";
import { PageType } from "../../pages";
interface QuizTemplateProps<T> {
  quizTitle: string;
  questions: T[];
  numOfQuestions: number;
  renderQuestion: (question: T, addProgress: () => void, updateAnswer: (questionName: string, questionResult: string) => void, selectedAnswer: string) => React.ReactNode;
  setPage: (page: PageType) => void; 
}

export function QuizTemplate<T extends { name: string }>({
  quizTitle,
  questions,
  numOfQuestions,
  renderQuestion,
  setPage
}: QuizTemplateProps<T>): React.JSX.Element {
  const [progress, setProgress] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  function addProgress() {
    setProgress(prev => prev + 1);
  }

  function isFinished(): boolean {
    return progress === numOfQuestions;
  }

  function updateAnswer(questionName: string, questionResult: string) {
    setAnswers(prevAnswers => {
      const existingAnswerIndex = prevAnswers.findIndex(a => a.question_name === questionName);
      if (existingAnswerIndex !== -1) {
        const updated = [...prevAnswers];
        updated[existingAnswerIndex] = { question_name: questionName, question_result: questionResult };
        return updated;
      } else {
        return [...prevAnswers, { question_name: questionName, question_result: questionResult }];
      }
    });
  }

  function getSelectedAnswer(questionName: string): string {
    const found = answers.find(a => a.question_name === questionName);
    return found ? found.question_result : "";
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "2rem" }}>
        <div className="basic-quiz">
          <h1>{quizTitle}</h1>
          {questions.map((quizQuestion, index) => (
            <div className="basic-question" key={index}>
              {renderQuestion(
                quizQuestion,
                addProgress,
                updateAnswer,
                getSelectedAnswer(quizQuestion.name)
              )}
            </div>
          ))}
          <div className="get-results">
            <Button disabled={!isFinished()} onClick={() => setPage({page:"Results",answers})}>
              Get Results
            </Button>
          </div>
        </div>
      </div>
      <div className="progress-footer">
        <Progress progress={progress} numOfQuestions={numOfQuestions} />
      </div>
    </div>
  );
}