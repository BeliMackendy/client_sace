import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Menu = ({ setAuth, setUser,postUser, isAuthenticated }) => {
  
  const deconnecter = (e) => {
    localStorage.removeItem("token");
    setAuth(false);
    setUser("");
  };

  const statusbutton = isAuthenticated ? (
    <button className="btn btn-primary text-uppercase" onClick={deconnecter}>
      Deconnexion
    </button>
  ) : (
    <button className="btn btn-primary text-uppercase" onClick={deconnecter}>
      Connecter
    </button>
  );
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        // fixed="top"
        bg="primary"
        variant="dark"
      >
        <Navbar.Brand>
          <strong>SACE</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/accueil">
              <Nav.Link>Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ouverture">
              <Nav.Link>Demande d'Ouverture</Nav.Link>
            </LinkContainer>
          </Nav>
          {postUser}
          {statusbutton}         
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
