import React, { useState, useEffect } from "react";

const Form_individuelle = ({ InitformIndividuelle }) => {
  const [postInputform, setPostInputform] = useState({
    nom: "",
    prenom: "",
    nif: "",
    cin_nin: "",
    email: "",
    tel: "",
    niveau_acad: "",
    identite: "",
    certificat_sante: "",
    certificat_vie_moeurs: "",
    dd_impots: "",
  });

  useEffect(() => {
    InitformIndividuelle(postInputform);
  });

  const Initform = (e) => {
    if (e.target.type !== "file") {
      setPostInputform({ ...postInputform, [e.target.name]: e.target.value });      
    } else {
      setPostInputform({
        ...postInputform,
        [e.target.name]: e.target.files[0],
      });    
    }
  };

  return (
    <>
      <div className="row border border-info rounded my-1 p-2">
        <div className="col-6">
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              className="form-control"
              name="nom"
              onChange={Initform}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Prenom</label>
            <input
              type="text"
              name="prenom"
              onChange={Initform}
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row border border-info rounded my-1 p-2">
        <div className="col-4">
          <div className="form-group">
            <label>Nif</label>
            <input
              type="text"
              name="nif"
              onChange={Initform}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>CIN/NIN</label>
            <input
              type="text"
              name="cin_nin"
              onChange={Initform}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={Initform}
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row border border-info rounded my-1 p-2">
        <div className="col-6">
          <div className="form-group">
            <label>Tel</label>
            <input
              type="text"
              name="tel"
              onChange={Initform}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Niveau Academique</label>
            <input
              type="text"
              name="niveau_acad"
              onChange={Initform}
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row border border-info rounded my-1 p-2">
        <div className="col-6">
          <div className="form-group">
            <label>Pièce Identité</label>
            <input
              type="file"
              name="identite"
              onChange={Initform}             
              className="form-control"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Certificat de santé</label>
            <input
              type="file"
              name="certificat_sante"
              onChange={Initform}              
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row border border-info rounded my-1 p-2">
        <div className="col-6">
          <div className="form-group">
            <label>Certificat de bonne vie et mœurs </label>
            <input
              type="file"
              name="certificat_vie_moeurs"
              onChange={Initform}              
              className="form-control"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Déclaration définitive d’impôts </label>
            <input
              type="file"
              name="dd_impots"
              onChange={Initform}            
              className="form-control"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form_individuelle;
