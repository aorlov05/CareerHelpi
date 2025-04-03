import React from "react";
import { Button, Form } from "react-bootstrap";

type APIKeyFormProps = {
    handleSubmit: () => void;
    changeKey: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function APIKeyForm({ handleSubmit, changeKey }: APIKeyFormProps): React.JSX.Element {
    return (
        <Form>
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

export function HomePage({ 
    handleSubmit, 
    changeKey 
}: APIKeyFormProps): React.JSX.Element {
    return (
        <div>
            <h1>Home Page</h1>
            <APIKeyForm handleSubmit={handleSubmit} changeKey={changeKey} />
        </div>
    );
}
