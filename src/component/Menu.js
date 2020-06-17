import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { Link } from "react-router-dom";

const Menu = ({ setAuth, setUser, postUser, isAuthenticated }) => {
  // console.log(postUser);
  const deconnecter = (e) => {
    localStorage.removeItem("token");
    setAuth(false);
    setUser("");
  };

  const statusbutton = isAuthenticated ? (
    <Link to="login" onClick={deconnecter} className="login_link">
      Deconnexion
    </Link>
  ) : (
    <Link to="login" className="login_link">
      Connexion
    </Link>
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
            <LinkContainer to="/dossier">
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
