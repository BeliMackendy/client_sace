import React from "react";
import axios from "axios";

const Form3Inscription = ({
  setCurrentform,
  currentform,
  dataform1,
  dataform2,
  dataform3,
  setdataform3,
  url
}) => {
  // const url_ouverture = "http://localhost:3001/app/sace/ouverture";
  // const url_addUser = "http://localhost:3001/app/sace/addUser";

  const url_ouverture = url+"/ouverture";
  const url_addUser = url+"/addUser";

  const initform = (e) => {
    setdataform3({ ...dataform3, [e.target.name]: e.target.value });
  };

  const createInstitution = (data) => {
    axios
      .post(url_ouverture, data)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  const submitForm = (e) => {
    console.log(url)
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
      categorie: "1",
      typecategorie: "",
      niveau: "1",
      vacation: "1",
      modalite_fonctionnement: "1",
      programme: "1",
      typeprogramme: "",
      affiliation:"",
      institution_affiliation:"",
      cible: "1",
      // date_demande: dataform3.date_demande,
      user: dataform1.email,
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

    axios
      .post(url_addUser, setformdataUser)
      .then((res) => {
        createInstitution(setformdataInstitution);  
      })
      .catch((err) => {
        console.log(err);
      }, []);
   
    setCurrentform(currentform + 1);
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
                    value={dataform1.email}
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
                {/* <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date_demande"
                    className="form-control"
                    onChange={initform}
                  />
                </div> */}
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
