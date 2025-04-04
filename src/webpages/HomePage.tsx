import React from "react";
import { Button, Form } from "react-bootstrap";

// Props for API key form
type APIKeyFormProps = {
    handleSubmit: () => void;
    changeKey: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Props for HomePage (includes APIKeyFormProps + setPage)
type HomePageProps = APIKeyFormProps & {
    setPage: (page: "Home" | "Basic" | "Detailed") => void;
};

// Props for the quiz buttons component
type StartQuizButtonsProps = {
    setPage: (page: "Home" | "Basic" | "Detailed") => void;
};

// API Key input form
function APIKeyForm({ handleSubmit, changeKey }: APIKeyFormProps): React.JSX.Element {
    return (
        <Form>
            <br />
            <Form.Label>API Key:</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Insert API Key Here" 
                onChange={changeKey} 
            />
            <br />
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>      
        </Form>
    );
}

// Buttons to start quizzes
function StartQuizButtons({ setPage }: StartQuizButtonsProps): React.JSX.Element {
    return (
        <div>
            <br />
            <Button className="Basic-Quiz-Button" onClick={() => setPage("Basic")}>
                Basic Quiz
            </Button>
            <br /><br />
            <Button className="Detailed-Quiz-Button" onClick={() => setPage("Detailed")}>
                Detailed Quiz
            </Button>
            <br />
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
