import React from 'react';
import { useState } from "react";
import { FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
import "./Quiz.css"

export function DetailedQuiz(): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>){
        setUserAnswer(event.target.value);
    }
    return (
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "2rem"}}>
            <div className="quiz-card" style={{width: "80%"}}>
                <h1>Detailed Quiz</h1>
                <br />
                <div>
                    <h3>1. When faced with a challenge, how do you usually respond?</h3>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <FormGroup controlId="formUserAnswer">
                    <FormLabel>Input Answer Below:</FormLabel>
                    <FormControl
                        value={userAnswer}
                        onChange={updateAnswer}
                        // Need the "position: absolute" in order for the percents of the height to work
                        // style={{backgroundColor: "royalblue", height: "150px", width: "650px"}}
                        as="textarea" rows={5} cols={100}
                    ></FormControl>
                </FormGroup>
                </div>
                <div>
                    {/* The text that the user has typed: {userAnswer} */}
                    Tip: The more detailed and descriptive your answers are, the more accurate and personalized your career results will be!
                </div>

                <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "2rem"}}>
                    <div>
                        <Button className="Quiz-Button"> Previous </Button>
                    </div>

                    <div>
                        <Button className='Quiz-Button'>Next</Button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}