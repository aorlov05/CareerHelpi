import React from "react";
import { BasicQuizQuestion } from "./QuizQuestion";
import { Question } from "./Question";
import { QuizTemplate } from "./QuizTemplate";
import "./Quiz.css";
import { PageType } from "../../pages";

const BASIC_QUESTIONS: BasicQuizQuestion[] = [
    {
      name: "Where do you see yourself working?",
      options: [
        "At home", 
        "In a creative studio", 
        "Outdoors in nature", 
        "In the office"
      ]
    },
    {
      name: "What subject do you like the best?",
      options: [
        "Math", 
        "Business", 
        "Art", 
        "Science"
      ]
    },
    {
      name: "What motivates you most in a career?",
      options: [
        "Helping others", 
        "Solving complex problems", 
        "Expressing creativity", 
        "Leading teams"
      ]
    },
    {
      name: "Which activity sounds most appealing?",
      options: [
        "Designing a logo", 
        "Analyzing data", 
        "Negotiating deals", 
        "Conducting experiments"
      ]
    },
    {
      name: "Which work style suits you best?",
      options: [
        "Independent and self-paced", 
        "Team-oriented and collaborative", 
        "Hands-on and active", 
        "Structured and organized"
      ]
    },
    {
      name: "What kind of impact do you want to make?",
      options: [
        "Innovate new technologies", 
        "Improve people's well-being", 
        "Inspire through art", 
        "Drive business success"
      ]
    },
    {
      name: "How do you prefer to solve problems?",
      options: [
        "With logic and reasoning", 
        "With empathy and communication", 
        "With creativity and imagination", 
        "With strategy and planning"
      ]
    },
    {
      name: "Which environment do you thrive in?",
      options: [
        "Quiet and focused", 
        "Fast-paced and dynamic", 
        "Collaborative and social", 
        "Flexible and ever-changing"
      ]
    },
    {
      name: "What type of task do you enjoy most?",
      options: [
        "Crunching numbers", 
        "Writing stories or scripts", 
        "Organizing events", 
        "Fixing or building things"
      ]
    },
    {
      name: "Which tool sounds most exciting to use?",
      options: [
        "A camera or design software", 
        "A spreadsheet or calculator", 
        "A microscope or lab equipment", 
        "A planner or scheduling app"
      ]
    }
  ];
  
  export function BasicQuiz({ setPage }: { setPage: (page: PageType) => void }): React.JSX.Element {
    return (
      <QuizTemplate
        quizTitle="Basic Quiz"
        questions={BASIC_QUESTIONS}
        numOfQuestions={BASIC_QUESTIONS.length}
        setPage={setPage}
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