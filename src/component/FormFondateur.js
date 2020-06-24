import React, { useState } from "react";
import axios from "axios";
import Formindividuelle from "./Form_individuelle";
import FormCollectifs from "./Form_Collectifs";
import FormPmorale from "./Form_P_morale";

const FormFondateur = ({ postInstitution,url }) => {
  const [postfondateur, setPostfondateur] = useState();
  const [postformfondateur, setPostformfondateur] = useState();
  const [e_ind, Post_E_ind] = useState([]);
  const [e_nomsC, Post_E_nomsC] = useState([]);
  const [e_Per, Post_E_Per] = useState([]);

  const fondateur = [
    "Entreprise individuelle",
    "Entreprise en noms collectifs",
    "Personne morale",
  ];

  const load_e_individuelle = () => {
    // const url_e_individuelle =
    //   "http://localhost:3001/app/sace/e_individuelle_select_byInstitution";
      
      const url_e_individuelle =url+"/e_individuelle_select_byInstitution";

    const data = {
      id: postInstitution.Id_institution,
    };

    axios
      .post(url_e_individuelle, data)
      .then((res) => {
        Post_E_ind(res.data);
        // return res.data;
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  const load_e_nomscollectifs = () => {
    // const url_e_nomscollectif =
    //   "http://localhost:3001/app/sace/e_nomscollectifsCtrl_select_byInstitution";
      
      const url_e_nomscollectif =url+"/e_nomscollectifsCtrl_select_byInstitution";

    const data = {
      id: postInstitution.Id_institution,
    };

    axios
      .post(url_e_nomscollectif, data)
      .then((res) => {
        Post_E_nomsC(res.data);
        // return res.data;
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  const load_e_personne_morale = () => {
    // const url_e_personnemorale =
    //   "http://localhost:3001/app/sace/e_personnemorale_select_byInstitution";

 const url_e_personnemorale =url+"/e_personnemorale_select_byInstitution";

    const data = {
      id: postInstitution.Id_institution,
    };

    axios
      .post(url_e_personnemorale, data)
      .then((res) => {
        Post_E_Per(res.data);
        // return res.data;
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };

  const InitformIndividuelle = (i) => {
    setPostformfondateur(i);
  };
  const Initformnomscollectifs = (i) => {
    setPostformfondateur(i);
  };
  const Initformpersonne_morale = (i) => {
    setPostformfondateur(i);
  };

  const form_fondateur = () => {
    if (postfondateur === "Entreprise individuelle")
      return <Formindividuelle InitformIndividuelle={InitformIndividuelle} />;
    if (postfondateur === "Entreprise en noms collectifs")
      return <FormCollectifs Initformnomscollectifs={Initformnomscollectifs} />;
    if (postfondateur === "Personne morale")
      return <FormPmorale Initformpersonne_morale={Initformpersonne_morale} />;
  };

  const select_fondateur_handler = (e) => {
    load_e_individuelle();
    load_e_nomscollectifs();
    load_e_personne_morale();
    if (e.target.value === "Entreprise individuelle")
      setPostfondateur(e.target.value);
    if (e.target.value === "Entreprise en noms collectifs")
      setPostfondateur(e.target.value);
    if (e.target.value === "Personne morale") setPostfondateur(e.target.value);
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
    load_e_individuelle();
    load_e_nomscollectifs();
    load_e_personne_morale();
    if (e_ind.length == 0) {
      if (e_nomsC == 0) {
        if (e_Per.length == 0) {
          // const url_ent_individuelle =
          //   "http://localhost:3001/app/sace/e_individuelle";
          // const url_ent_nomscollectif =
          //   "http://localhost:3001/app/sace/e_nomscollectifs";
          // const url_personne_morale =
          //   "http://localhost:3001/app/sace/e_personnemorale";

 const url_ent_individuelle =
            url+"/e_individuelle";
          const url_ent_nomscollectif =
            url+"/e_nomscollectifs";
          const url_personne_morale =
            url+"/e_personnemorale";

          const formData = new FormData();
          if (postfondateur === "Entreprise individuelle") {
            formData.append("id", postInstitution.Id_institution);
            formData.append("nom", postformfondateur.nom);
            formData.append("prenom", postformfondateur.prenom);
            formData.append("nif", postformfondateur.nif);
            formData.append("cin_nin", postformfondateur.cin_nin);
            formData.append("email", postformfondateur.email);
            formData.append("tel", postformfondateur.tel);
            formData.append("niveau_acad", postformfondateur.niveau_acad);
            formData.append("identite", postformfondateur.identite);
            formData.append(
              "certificat_sante",
              postformfondateur.certificat_sante
            );
            formData.append(
              "certificat_vie_moeurs",
              postformfondateur.certificat_vie_moeurs
            );
            formData.append("dd_impots", postformfondateur.dd_impots);
            sendData(url_ent_individuelle, formData);
          }

          if (postfondateur === "Entreprise en noms collectifs") {
            formData.append("id", postInstitution.Id_institution);
            formData.append("denomination", postformfondateur.denomination);
            formData.append("nature", postformfondateur.nature);
            formData.append(
              "acte_constitutif",
              postformfondateur.acte_constitutif
            );
            formData.append("reconnaissance", postformfondateur.reconnaissance);
            formData.append(
              "copie_p_identite",
              postformfondateur.copie_p_identite
            );
            sendData(url_ent_nomscollectif, formData);
          }
          if (postfondateur === "Personne morale") {
            formData.append("id", postInstitution.Id_institution);
            formData.append("denomination", postformfondateur.denomination);
            formData.append("nature", postformfondateur.nature);
            formData.append("reconnaissance", postformfondateur.reconnaissance);
            formData.append("quitus_patente", postformfondateur.quitus_patente);
            sendData(url_personne_morale, formData);
          }
        } else {
          alert("Desole Vous avez deja un Fondateur");
        }
      } else {
        alert("Desole Vous avez deja un Fondateur");
      }
    } else {
      alert("Desole Vous avez deja un Fondateur");
    }
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
            <div className="form-group">
              <label>Choix du fondateur/fondatrice </label>
              <select
                className="form-control"
                onChange={select_fondateur_handler}
              >
                <option value="0">Selection Catégorie</option>
                {fondateur.map((post, index) => (
                  <option key={index} value={post}>
                    {post}
                  </option>
                ))}
              </select>
            </div>
            {form_fondateur()}
          </form>
          <div className="form-group col-md-2">
            <button className="btn btn-info" onClick={submitForm}>
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFondateur;
