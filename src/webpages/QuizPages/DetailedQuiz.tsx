import React from "react";
import { DetailedQuizQuestion } from "./QuizQuestion";
import { Question } from "./Question";
import { QuizTemplate } from "./QuizTemplate";
import { PageType } from "../../pages";

const DETAILED_QUESTIONS: DetailedQuizQuestion[] = [
    {name: "Tell us about a project or hobby you worked on that made you lose track of time. What drew you into it?", input: ""},
    {name: "Describe a moment when you overcame a challenge or solved a tough problem. How did it make you feel?", input: ""},
    {name: "What kind of activities make you feel energized, even if they’re difficult?", input: ""},
    {name: "If you could collaborate with anyone in the world on a project, what type of project would it be?", input: ""},
    {name: "Think about a time you learned something completely new. What helped you stick with it?", input: ""},
    {name: "When you imagine a fulfilling career, what values or causes do you hope it supports?", input: ""},
    {name: "What is something you’ve always been curious to explore, but haven’t had the chance yet?", input: ""},
    {name: "What role do you naturally take on when working with a group (e.g., leader, researcher, organizer)?", input: ""},
    {name: "Imagine your perfect workday. What are you doing, who are you with (if anyone), and how does it feel?", input: ""},
    {name: "If you had unlimited time and resources, what is one big project or goal you would want to achieve?", input: ""},
];


export function DetailedQuiz({ setPage }: { setPage: (page: PageType) => void }): React.JSX.Element {
    return (
      <QuizTemplate
        quizTitle="Detailed Quiz"
        questions={DETAILED_QUESTIONS}
        numOfQuestions={DETAILED_QUESTIONS.length}
        setPage = {setPage}
        renderQuestion={(quizQuestion, addProgress, updateAnswer, selectedAnswer) => (
          <Question 
            addProgress={addProgress} 
            quizQuestion={quizQuestion} 
            updateAnswer={updateAnswer} 
            selectedAnswer={selectedAnswer}
          />
        )}
      />
    );
  }