import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, Form } from "react-bootstrap";
import { PageType } from "./pages";
import "./Header.css";

export function Header({
  setPage,
  currentPage,
}: {
  setPage: (page: PageType) => void;
  currentPage: PageType;
}): React.JSX.Element {
  const [zoomEnabled, setZoomEnabled] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (zoomEnabled) {
      root?.classList.add("zoomed");
    } else {
      root?.classList.remove("zoomed");
    }
  }, [zoomEnabled]);

  return (
    <Navbar className="custom-navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <span className="brand-title">CareerHelpi</span>
          <span className="separator">|</span>
          <Nav className="nav-inline">
            <Nav.Link
              onClick={() => setPage({ page: "Home" })}
              className={currentPage.page === "Home" ? "active-link" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => setPage({ page: "Basic" })}
              className={currentPage.page === "Basic" ? "active-link" : ""}
            >
              Basic Quiz
            </Nav.Link>
            <Nav.Link
              onClick={() => setPage({ page: "Detailed" })}
              className={currentPage.page === "Detailed" ? "active-link" : ""}
            >
              Detailed Quiz
            </Nav.Link>
          </Nav>
        </div>

        <Form.Check
          type="switch"
          id="zoom-toggle"
          label="Zoom"
          checked={zoomEnabled}
          onChange={() => setZoomEnabled(!zoomEnabled)}
          className="zoom-toggle"
        />
      </Container>
    </Navbar>
  );
}
