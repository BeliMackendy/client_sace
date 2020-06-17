import React, { useState, useEffect } from "react";
import axios from "axios";
import Categorie from "./Categorie";
import Niveau from "./Niveau";
import PublicCible from "./PublicCible";
import Vacation from "./Vacation";
import ModaliteFonctionnement from "./ModaliteFonctionnement";
import Programme from "./Programme";

const FormInstitution = ({ postInstitution }) => {
  const [Id_institution, setId_institution] = useState();
  const [denomination, setDenomination] = useState();

  const url_updateInstitutionuser =
    "http://localhost:3001/app/sace/institutionUpdate";

  useEffect(() => {
    postInstitution.map((i) => {
      setDenomination(i.denomination);
    });
  });  

  const [dataInstintution, setdataInstintution] = useState({   
    adresse: "",
    tel: "",
    email: "",
    categorie: "",
    type_categorie: "",
    niveau: "",
    vacation: "",
    modalite: "",
    programme: "",
    type_programme: "",
    cible: "",
    affiliation: "",
    institution_affiliation: "",
  });

  const initData = (name, value) => {
    setdataInstintution({
      ...dataInstintution,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    postInstitution.map((i) => {
      setId_institution(i.Id_institution);
    });
    const data = {
      institution_: Id_institution,
      adresse: dataInstintution.adresse,
      tel: dataInstintution.tel,
      email: dataInstintution.email,
      categorie: dataInstintution.categorie,
      type_categorie: dataInstintution.type_categorie,
      niveau: dataInstintution.niveau,
      vacation: dataInstintution.vacation,
      modalite: dataInstintution.modalite,
      programme: dataInstintution.programme,
      type_programme: dataInstintution.type_programme,
      cible: dataInstintution.cible,
      affiliation: dataInstintution.affiliation,
      institution_affiliation: dataInstintution.institution_affiliation,
    };
    axios
      .post(url_updateInstitutionuser, data)
      .then((res) => {
        // setPostInstitution(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row d-flex justify-content-between pt-3">
            <h4>Etablissement Scolaire</h4>
            <p className="text-bold text-center">{denomination}</p>
          </div>

          <form className="form  py-2">
            <div className="row border border-info rounded my-1 p-2">
              <div className="col-6">
                <div className="form-group">
                  <label>Adresse</label>
                  <input
                    type="text"
                    name="adresse"
                    onChange={(e) => initData(e.target.name, e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label>Tel</label>
                  <input
                    type="text"
                    name="tel"
                    onChange={(e) => initData(e.target.name, e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => initData(e.target.name, e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            {/* Nouvelle Ligne */}

            <div className="row border border-info rounded my-1 p-2">
              <div className="col-12">
                <Categorie initData={initData} />
              </div>
            </div>
            <div className="row border border-info rounded my-1 p-2">
              <div className="col-6">
                <Niveau initData={initData} />
              </div>
              <div className="col-6">
                <PublicCible initData={initData} />
              </div>
            </div>
            <div className="row border border-info rounded my-1 p-2">
              {/* <div col-12> */}
              <div className="col-6">
                <Vacation initData={initData} />
              </div>
              <div className="col-6">
                <ModaliteFonctionnement initData={initData} />
              </div>
              {/* </div> */}
            </div>
            <div className="row border border-info rounded my-1 p-2">
              <div className="col-12">
                <Programme initData={initData} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container"></div>
      <div className="form-row">
        <div className="form-group col-md-2">
          <button className="btn btn-info" onClick={submitForm}>
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormInstitution;
