import React, { useState, useEffect } from "react";
import axios from "axios";

const Categorie = ({ initData, institution }) => {
  const [categorie, setCategorie] = useState([]);
  const [souscategorie, setSousCategorie] = useState([]);
  const [postmission, setMission] = useState();
  const [typemission, setTypemission] = useState([]);
  const [autretypemission, setAutreTypemission] = useState();
  const [text_typemission, setText_typemission] = useState(true);
  

  const mission_handler = (e) => {
    const name = "type_categorie";
    const value = e.target.value;
    if (e.target.value !== "Autre mission") {
      initData(name, value);
      setAutreTypemission("");
      setText_typemission(true);
    } else {
      setText_typemission(false);
      initData(name, "");
      setAutreTypemission("");
    }
  };

  const text_autre_mission_handler = (e) => {
    const name = "type_categorie";
    const value = e.target.value;
    setAutreTypemission(value);
    initData(name, value);
  };

  const mission =
    postmission == "Mission" &&
    typemission.map((e, index) => (
      <>
        <div className="form-check form-check-inline form-group" key={index}>
          <input
            className="form-check-input"
            type="radio"
            name="type_souscategorie"
            value={e.libelle}
            onChange={mission_handler}
          />
          {e.libelle !== "Autre mission" ? (
            e.libelle
          ) : (
            <>
              {e.libelle}
              <input
                className="form-control"
                type="text"
                name="type_souscategorie"
                value={autretypemission}
                readOnly={text_typemission}
                onChange={(e) => text_autre_mission_handler(e)}
              />
            </>
          )}
        </div>
      </>
    ));

  const url_categorie = "http://localhost:3001/app/sace/categorie";
  const url_souscategorie = "http://localhost:3001/app/sace/souscategorie";
  const url_sous_souscategorie =
    "http://localhost:3001/app/sace/sous_souscategorie";

    const LoadCategorie = async()=>{
      axios
      .get(url_categorie)
      .then((res) => {
        // console.log(res.data);
        setCategorie(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  

  useEffect(() => {
   LoadCategorie() 
  },[]);

  console.log(categorie);

  const categorie_handler = async (e) => {
    const data = {
      Id_categorie: e.target.value,
    };
  //  console.log("wwww")
   initData(e.target.name, e.target.value);
   await axios
      .post(url_souscategorie, data)
      .then((res) => {
        // console.log(res.data);
        setSousCategorie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
     

  };

  const souscategorie_handler = (e) => {
    const souscategorie_select = souscategorie.filter(function (o) {
      return o.Id_souscategorie == e.target.value;
    });
    setMission(souscategorie_select[0].Libelle_souscategorie);
    if (souscategorie_select[0].Libelle_souscategorie !== "Mission")
      initData(e.target.name, souscategorie_select[0].Libelle_souscategorie);
    else {
      initData(e.target.name, "");
      const data = {
        id_souscategorie: souscategorie_select[0].Id_souscategorie,
      };

      axios
        .post(url_sous_souscategorie, data)
        .then((res) => {
          // console.log(res.data);
          setTypemission(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);
    }
  };

  const categ = (
    <>
      {categorie.map((post, index) =>
        post.IdCategorie === institution.categorie ? (
          <option key={index} value={post.IdCategorie} selected>
            {post.Libelle_Categorie}
          </option>
        ) : (
          <option key={index} value={post.IdCategorie}>
            {post.Libelle_Categorie}
          </option>
        )
      )}
    </>
  );

  return (
    <>
      <div className="row">
        <div className="col-6">
          <label>Catégorie</label>
          <select
            className="form-control"
            name="categorie"
            onChange={categorie_handler}
            
          >
            <option value="0">Selection Catégorie</option>
            {categ}
          </select>
        </div>

        <fieldset className="col-6">
          {souscategorie.map((p, index) => (
            <div
              className="form-check form-check-inline form-group"
              key={index}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type_categorie"
                value={p.Id_souscategorie}
                onChange={(e) => souscategorie_handler(e)}
              />
              <label className="form-check-label">
                {p.Libelle_souscategorie}
              </label>
            </div>
          ))}
          <div className="form-group">{mission}</div>
        </fieldset>
      </div>
    </>
  );
};

export default Categorie;
