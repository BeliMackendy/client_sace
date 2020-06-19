import React, { useState } from "react";
import axios from "axios";

const Form_Document = ({ postInstitution }) => {
  const [postDocuments, setPostDocuments] = useState({
    lettre_demande: "",
    titre_propriete: "",
    photos: "",
    autorisation_mairie: "",
    projet_ecole: "",
  });

  const Initform = (e) => {
    if (e.target.type !== "file") {
      setPostDocuments({ ...postDocuments, [e.target.name]: e.target.value });
    } else {
      setPostDocuments({
        ...postDocuments,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  const sendData = (url, data) => {
    axios
      .post(url, data, { header: { "Content-Type": "multipart/form-data" } })
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };
  const submitForm = () => {
    const url_documents_soumettre =
      "http://localhost:3001/app/sace/documents_soumettre";

    const formData = new FormData();

    formData.append("id", postInstitution.Id_institution);
    formData.append("lettre_demande", postDocuments.lettre_demande);
    formData.append("titre_propriete", postDocuments.titre_propriete);
    formData.append("photos", postDocuments.photos);
    formData.append("autorisation_mairie", postDocuments.autorisation_mairie);
    formData.append("projet_ecole", postDocuments.projet_ecole);

    sendData(url_documents_soumettre, formData);
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
                  <label>
                    Accusé de réception de la lettre demande d’ouverture
                  </label>
                  <input
                    type="file"
                    name="lettre_demande"
                    className="form-control"
                    onChange={Initform}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Titre de propriété  </label>
                  <input
                    type="file"
                    name="titre_propriete"
                    className="form-control"
                    onChange={Initform}
                  />
                </div>
              </div>
            </div>
            <div className="row border border-info rounded my-1 p-2">
              <div className="col-6">
                <div className="form-group">
                  <label>Photos (4 façades) du local</label>
                  <input
                    type="file"
                    name="photos"
                    className="form-control"
                    onChange={Initform}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Projet d’école</label>
                  <input
                    type="file"
                    name="autorisation_mairie"
                    className="form-control"
                    onChange={Initform}
                  />
                </div>
              </div>
            </div>
            <div className="row border border-info rounded my-1 p-2">
              <div className="col-6">
                <div className="form-group">
                  <label>Autorisation de la Mairie</label>
                  <input
                    type="file"
                    name="projet_ecole"
                    className="form-control"
                    onChange={Initform}
                  />
                </div>
              </div>
              <div className="col-6"></div>
            </div>
          </form>
          <div className="form-row">
            <div className="form-group col-md-2">
              <button className="btn btn-info" onClick={submitForm}>
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_Document;
