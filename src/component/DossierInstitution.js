import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import MenuDossier from "./MenuDossier";
import FormInstitution from "./FormInstitution";
import FormFondateur from "./FormFondateur";
import FormDocument from "./Form_Document";

const DossierInstitution = ({ postUser,url }) => {
  const [postInstitution, setPostInstitution] = useState([]);
  // const url_getInstitutionuser =
  //   "http://localhost:3001/app/sace/selectInstitutionUser";
   
    const url_getInstitutionuser =url+"/selectInstitutionUser";

  const data = { user: postUser };

  const loadInstitution = async () => {
    await axios
      .post(url_getInstitutionuser, data)
      .then((res) => {
        setPostInstitution(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadInstitution();
  }, []);

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
                path="/Etablissement"
                render={(props) => (
                  <>
                    <FormInstitution
                      {...props}
                      postInstitution={postInstitution}  
                      url={url}                   
                    />
                  </>
                )}
              />
              <Route
                exact
                path="/Fondateur"
                render={(props) => (
                  <>
                    <FormFondateur
                      {...props}
                      postInstitution={postInstitution}  
                      url={url}                   
                    />
                  </>
                )}
              />
              <Route
                exact
                path="/Document"
                render={(props) => (
                  <>
                    <FormDocument
                      {...props}
                      postInstitution={postInstitution}  
                      url={url}                   
                    />
                  </>
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
