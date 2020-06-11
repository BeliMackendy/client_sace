import React from "react";

const Form3Inscription = ({
  setCurrentform,
  currentform,
  dataform1,
  dataform2,
  dataform3,
  setdataform3,
}) => {
  const initform = (e) => {
    setdataform3({ ...dataform3, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    const setformdataInstitution = {
      denomination: dataform2.denomination,
      adresse: "",
      tel: "",
      email: "",
      dde: dataform2.dde,
      commune: dataform2.commune,
      section_communale: dataform2.section_communale,
      bds: dataform2.bds,
      biz: dataform2.biz,
      categorie: "0",
      typecategorie: "",
      niveau: "0",
      vacation: "0",
      programme: "0",
      typeprogramme: "",
      cible: "0",
      date_demande: "0000-00-00",
    };

    const setformdataUser = {
      nom: dataform1.nom,
      prenom: dataform1.prenom,
      tel: dataform1.tel,
      email: dataform1.email,
      password: dataform3.password,
      role: "",
    };
    console.log(setformdataInstitution);
    console.log(setformdataUser);
    // setCurrentform(currentform + 1);
  };
  return (
    <div className="container mainformulaire">
      <div className="row">
        <div className="col-sm-9 col-md-9 col-lg-8 mx-auto">
          <div className="card">
            <div className="card-header">Creation de Compte</div>
            <div className="card-body">
              <h5 className="card-title">Information de Connexion</h5>
              <form className="form-signin">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    //   value={postDemandeur.email}
                  />
                </div>
                <div className="form-group">
                  <label>Mot de Passe</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={initform}
                  />
                </div>
              </form>
              <button className="btn btn-primary" onClick={submitForm}>
                Terminer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3Inscription;
