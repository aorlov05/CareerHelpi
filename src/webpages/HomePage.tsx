import React from "react";
import { Button, Form } from "react-bootstrap";
import { PageType } from "../pages";

import "./HomePage.css"
// Props for API key form
type APIKeyFormProps = {
    handleSubmit: () => void;
    changeKey: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Props for HomePage (includes APIKeyFormProps + setPage)
type HomePageProps = APIKeyFormProps & {
    setPage: (page: PageType) => void;
};

// Props for the quiz buttons component
type StartQuizButtonsProps = {
    setPage: (page: PageType) => void;
};

// API Key input form
function APIKeyForm({ handleSubmit, changeKey }: APIKeyFormProps): React.JSX.Element {
    return (
        <div className="api-key-form-wrapper">
            <Form>
                <Form.Label>API Key:</Form.Label>
                <Form.Control 
                    className="API-Key-Input"
                    type="password" 
                    placeholder="Insert API Key Here" 
                    onChange={changeKey} 
                />
                <br />
                <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>      
            </Form>
        </div>
    );
}


// Buttons to start quizzes
function StartQuizButtons({ setPage }: StartQuizButtonsProps): React.JSX.Element {
    return (
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", marginTop: "2rem" }}>
            <div className="quiz-card">
                <h3>Basic Quiz</h3>
                <p className="quiz-description">
                    {"Give a number score on how much you resonate with a question"}
                </p>
                <Button className="Basic-Quiz-Button" onClick={() => setPage("Basic")}>
                    Start Simple Questions
                </Button>
            </div>

            <div className="quiz-card">
                <h3>Detailed Quiz</h3>
                <p className="quiz-description">
                    {"Write out detailed answers to give a deeper answer to questions"}
                </p>
                <Button className="Detailed-Quiz-Button" onClick={() => setPage("Detailed")}>
                    Start Detailed Questions
                </Button>
            </div>
        </div>
    );
}


// Main HomePage component
export function HomePage({ handleSubmit, changeKey, setPage }: HomePageProps): React.JSX.Element {
    return (
        <div>
            <h1>Home Page</h1>
            <APIKeyForm handleSubmit={handleSubmit} changeKey={changeKey} />
            <StartQuizButtons setPage={setPage} />
        </div>
    );
}
