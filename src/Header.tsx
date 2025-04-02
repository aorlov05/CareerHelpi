import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { PageType } from "./pages";

export function Header({ setPage }: {setPage: (page: PageType) => void;}): React.JSX.Element {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Career Helpi</Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link onClick={() => {setPage("Home")}}>Home</Nav.Link>
                    <Nav.Link onClick={() => {setPage("Basic")}}>Basic Quiz</Nav.Link>
                    <Nav.Link onClick={() => {setPage("Detailed")}}>Detailed Quiz</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
