import React from "react";
import { Button, Form } from "react-bootstrap";

export function HomePage({ 
    handleSubmit, 
    changeKey, 
}: { 
    handleSubmit: () => void; 
    changeKey: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}): React.JSX.Element {
    return (
        <div>
            <h1>
                Home Page
            </h1>
            <Form>
                <Form.Label>API Key:</Form.Label>
                <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
                <br></br>
                <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    );
}
