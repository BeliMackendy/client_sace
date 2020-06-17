import React, { useState } from "react";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login";
import OuvertureDossier from "./OuvertureDossier";
import DossierInstitution from "./DossierInstitution";

const Sace = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [postUser, setPostUser] = useState();

  const setAuth = (Boolean) => {
    setIsAuthenticated(Boolean);
  };
  const setUser = (user) => {
    setPostUser(user);
  };

  return (
    <div>
      <BrowserRouter>
        <Menu
          isAuthenticated={isAuthenticated}
          postUser={postUser}
          setAuth={setAuth}
          setUser={setUser}
        />
        <Switch>
          {/* <Route exact path="/accueil" component={Accueil} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/ouverturedossier" component={OuvertureDossier} />
          <Route
            exact
            path="/login"
            render={(props) =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} setUser={setUser} />
              ) : (
                <Redirect to="/Accueil" />
              )
            }
          />
          <Route
            exact
            path="/dossier"
            render={(props) =>
              isAuthenticated ? (
                <DossierInstitution
                  {...props}
                  setAuth={setAuth}
                  postUser={postUser}
                  setPostUser={setPostUser}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Sace;
