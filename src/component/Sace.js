import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./Menu";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";

import Login from "./Login";
import OuvertureDossier from "./OuvertureDossier";
import DossierInstitution from "./DossierInstitution";

const Sace = () => {
  const histo = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [postUser, setPostUser] = useState();

  const url_user = "http://localhost:3001/app/sace/me";

  const setAuth = (Boolean) => {
    setIsAuthenticated(Boolean);
  };

  const setUser = (user) => {
    setPostUser(user);
  };

  const getMe = async () => {
    await axios
      .get(url_user, { headers: { "x-auth-token": localStorage.token } })
      .then((res) => {        
        setUser(res.data[0].email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {    
    if (!localStorage.token) {
      histo.push("/login");
    } else {
      getMe();
      setAuth(true);
    }
  }, []);

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
