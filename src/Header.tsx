import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { PageType } from "./pages";
import "./Header.css";

export function Header({
    setPage,
    currentPage,
  }: {
    setPage: (page: PageType) => void;
    currentPage: PageType;
  }): React.JSX.Element {
    return (
      <Navbar className="custom-navbar">
        <Container className="d-flex justify-content-center align-items-center">
          <span className="brand-title">CareerHelpi</span>
          <span className="separator">|</span>
          <Nav className="nav-inline">
            <Nav.Link
              onClick={() => setPage("Home")}
              className={currentPage === "Home" ? "active-link" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => setPage("Basic")}
              className={currentPage === "Basic" ? "active-link" : ""}
            >
              Basic Quiz
            </Nav.Link>
            <Nav.Link
              onClick={() => setPage("Detailed")}
              className={currentPage === "Detailed" ? "active-link" : ""}
            >
              Detailed Quiz
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
  
