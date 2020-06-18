import React, { useState} from "react";
import axios from "axios";
import Categorie from "./Categorie";
import Niveau from "./Niveau";
import PublicCible from "./PublicCible";
import Vacation from "./Vacation";
import ModaliteFonctionnement from "./ModaliteFonctionnement";
import Programme from "./Programme";

const FormInstitution = ({ postInstitution }) => {
  const [institution, setInstitution] = useState(postInstitution);

  const url_updateInstitutionuser =
    "http://localhost:3001/app/sace/institutionUpdate";

  const initData = (name, value) => {
    setInstitution({
      ...institution,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    axios
      .post(url_updateInstitutionuser, institution)
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
            <p className="text-bold text-center">
              {postInstitution.denomination}
            </p>
          </div>

          <form className="form  py-2">
            <div className="row border border-info rounded my-1 p-2">
              <div className="col-6">
                <div className="form-group">
                  <label>Adresse</label>
                  <input
                    type="text"
                    name="adresse"
                    value={institution.adresse}
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
                    value={institution.tel}
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
                    value={institution.email}
                    onChange={(e) => initData(e.target.name, e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            {/* Nouvelle Ligne */}

            <div className="row border border-info rounded my-1 p-2">
              <div className="col-12">
              <Categorie initData={initData} institution={institution} />
                {/* {React.useMemo(
                  () => (
                    <Categorie initData={initData} institution={institution} />
                  ),
                  [initData, institution]
                )} */}
              </div>
            </div>
            <div className="row border border-info rounded my-1 p-2">
              <div className="col-6">
                <Niveau initData={initData} institution={institution} />
              </div>
              <div className="col-6">
                <PublicCible initData={initData} institution={institution} />
              </div>
            </div>
            <div className="row border border-info rounded my-1 p-2">
              {/* <div col-12> */}
              <div className="col-6">
                <Vacation initData={initData} institution={institution} />
              </div>
              <div className="col-6">
                <ModaliteFonctionnement
                  initData={initData}
                  institution={institution}
                />
              </div>
              {/* </div> */}
            </div>
            <div className="row border border-info rounded my-1 p-2">
              <div className="col-12">
                <Programme initData={initData} institution={institution} />
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
