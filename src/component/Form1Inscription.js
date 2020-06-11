import React from "react";

const Form1Inscription = ({
  setCurrentform,
  currentform,
  dataform1,
  setdataform1,
}) => {
  const initform = (e) => {
    setdataform1({ ...dataform1, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    setCurrentform(currentform + 1);
  };

  return (
    <div className="container mainformulaire">
      <div className="row">
        <div className="col-sm-9 col-md-9 col-lg-8 mx-auto">
          <div className="card">
            <div className="card-header">Creation de Compte</div>
            <div className="card-body">
              <h5 className="card-title">Information sur le Demandeur</h5>
              <form className="form-signin">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Nom</label>
                    <input
                      type="text"
                      name="nom"
                      // value={postDemandeur.nom}
                      className="form-control"
                      onChange={initform}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>Prenom</label>
                    <input
                      type="text"
                      name="prenom"
                      // value={postDemandeur.prenom}
                      className="form-control"
                      onChange={initform}
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      // value={postDemandeur.email}
                      className="form-control"
                      onChange={initform}
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label>Tel</label>
                    <input
                      type="text"
                      name="tel"
                      // value={postDemandeur.tel}
                      className="form-control"
                      onChange={initform}
                    />
                  </div>
                </div>
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

export default Form1Inscription;
