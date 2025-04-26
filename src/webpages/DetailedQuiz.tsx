import React from 'react';
import { useState } from "react";
import { FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
import "./Quiz.css"
import { DetailedQuizQuestion } from '../QuizQuestion';
import { Question } from '../Question';
import { Progress } from '../Progress';
const DETAILED_QUESTIONS: DetailedQuizQuestion[] = [
    {name: "Tell us about a project or hobby you worked on that made you lose track of time. What drew you into it?", response: ""},
    {name: "Describe a moment when you overcame a challenge or solved a tough problem. How did it make you feel?", response: ""},
    {name: "What kind of activities make you feel energized, even if they’re difficult?", response: ""},
    {name: "If you could collaborate with anyone in the world on a project, what type of project would it be?", response: ""},
    {name: "Think about a time you learned something completely new. What helped you stick with it?", response: ""},
    {name: "When you imagine a fulfilling career, what values or causes do you hope it supports?", response: ""},
    {name: "What is something you’ve always been curious to explore, but haven’t had the chance yet?", response: ""},
    {name: "What role do you naturally take on when working with a group (e.g., leader, researcher, organizer)?", response: ""},
    {name: "Imagine your perfect workday. What are you doing, who are you with (if anyone), and how does it feel?", response: ""},
    {name: "If you had unlimited time and resources, what is one big project or goal you would want to achieve?", response: ""},
];




export function DetailedQuiz(): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [progress, setProgress] = useState<number>(0);

    function addProgress() {
        setProgress(progress + 1);
    }

    function isFinished(): boolean {
        return progress === DETAILED_QUESTIONS.length;
    }

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>){
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "2rem" }}>
                <div className = "basic-quiz">
                    <h3>Detailed Quiz</h3>
                    { DETAILED_QUESTIONS.map((quizQuestion: DetailedQuizQuestion) => 
                        <div className="basic-question"><Question addProgress={addProgress} key={quizQuestion.name} quizQuestion={quizQuestion} /></div>
                    )}
                    <div className="get-results"><Button disabled={!isFinished()}>Get Results</Button></div>
                </div>
            </div>
            <div className="progress-footer">
                      <Progress progress={progress} numOfQuestions={DETAILED_QUESTIONS.length} />
                    </div>
        </div>
    );
}

