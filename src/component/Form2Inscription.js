import React from "react";
import Departement from "./Departement";

const Form2Inscription = ({
  setCurrentform,
  currentform,
  dataform2,
  setdataform2,
}) => {
  const initform = (name, value) => {
    setdataform2({ ...dataform2, [name]: value.trim() });
  };

  const submitForm = (e) => {
  //  console.log(dataform2);
    setCurrentform(currentform + 1);
  };

  return (
    <div className="container mainformulaire">
      <div className="row">
        <div className="col-sm-9 col-md-9 col-lg-8 mx-auto">
          <div className="card">
            <div className="card-header">Creation de Compte</div>
            <div className="card-body">
              <h5 className="card-title">
                Information sur l'établissement Scolaire
              </h5>
              <form className="form-signin">
                <div class="form-group">
                  <label>Denomination de l'établissement</label>
                  <input
                    type="text"
                    class="form-control"
                    name="denomination"
                    onChange={(e) => initform(e.target.name, e.target.value)}
                  />
                </div>
                <Departement initform={initform} />
              </form>
              <button className="btn btn-primary" onClick={submitForm}>
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2Inscription;
