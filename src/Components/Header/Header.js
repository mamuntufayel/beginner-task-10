import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleToLogOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="home#home">Bodybuilding Plan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">My Services</Nav.Link>
            <Nav.Link href="home#weekendSpecial">Weekend Special</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
            {user ? (
              <Nav.Link onClick={handleToLogOut}>Log Out</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
