import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export function Header(): React.JSX.Element {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Career Helpi</Navbar.Brand>
                <Nav className="mx-auto">
                    {/* Add redirection to quizzes and home */}
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#">Basic Quiz</Nav.Link>
                    <Nav.Link href="#">Detailed Quiz</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
