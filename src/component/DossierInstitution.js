import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import MenuDossier from "./MenuDossier";
import FormInstitution from "./FormInstitution";

const DossierInstitution = ({ postUser }) => {
  const [postInstitution, setPostInstitution] = useState([]);
  const url_getInstitutionuser =
    "http://localhost:3001/app/sace/selectInstitutionUser";

  const data = { user: postUser };

  useEffect(() => {
    axios
      .post(url_getInstitutionuser, data)
      .then((res) => {
        setPostInstitution(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className="row mx-3">
          <div className="col-sm-12 col-md-3">
            <MenuDossier />
          </div>
          <div className="col-sm-12 col-md-9">
            <div>
              <Route
                exact
                path="/Ouverture"
                render={(props) => (
                  <FormInstitution
                    {...props}
                    postInstitution={postInstitution}
                    // setPostInstitution={setPostInstitution}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default DossierInstitution;
