import React from 'react';
import { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function DetailedQuiz(): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>){
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <h1>Detailed Quiz</h1>
            <br />
            <div>
                <h3>1. Question 1</h3>
            </div>
            <div>
            <FormGroup controlId="formUserAnswer" style={{backgroundColor: "royalblue"}}>
                <FormLabel>Input Answer Below:</FormLabel>
                <FormControl
                    value={userAnswer}
                    onChange={updateAnswer}
                ></FormControl>
            </FormGroup>
            </div>
            <div>
                The text that the user has typed: {userAnswer}
            </div>
        </div>
    )
}