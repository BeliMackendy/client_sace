import React, { useState } from "react";
import axios from "axios";

const Login = ({ setAuth, setUser }) => {
  const [postUser, setPostUser] = useState({
    email: "",
    password: "",
  });

  const urlLogin = "http://localhost:3001/app/sace/authUser";

  const UserChange = (e) => {
    setPostUser({ ...postUser, [e.target.name]: e.target.value });
  };

  const submitform = (e) => {
    axios
      .post(urlLogin, postUser)
      .then(async (res) => {
        const parseRes = await res.data;
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        setUser(postUser.email);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
          <div className="card card-signin my-3">
            <div className="card-body">
              <h5 className="card-title text-center">Connexion</h5>
              <form className="form-signin">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={UserChange}
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Mot de passe"
                    required
                    onChange={UserChange}
                  />
                </div>
              </form>
              <button
                onClick={submitform}
                className="btn btn-primary text-uppercase col-sm 9"
              >
                Connecter
              </button>
              <p style={{ fontSize: 13 }}>
                Vous n'avez pas de compte?
                <a href="ouverturedossier"> Inscrivez-vous ici</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
