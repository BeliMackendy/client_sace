import React, { useState, useEffect } from "react";
import axios from "axios";

const Niveau = ({ initData, institution }) => {
  const [niveau, setNiveau] = useState([]);
  let url_niveau = "http://localhost:3001/app/sace/niveau";

  const loadNiveau =async ()=>{
    axios
    .get(url_niveau)
    .then((res) => {
      // console.log(res.data);
      setNiveau(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    loadNiveau()
  });

  const niveau_handler = (e) => {
    initData(e.target.name, e.target.value);
  };

  const niv = (
    <>
      {niveau.map((post, index) =>
        post.Id_niveau === institution.niveau ? (
          <option key={index} value={post.Id_niveau} selected="selected">
            {post.libelle_niveau}
          </option>
        ) : (
          <option key={index} value={post.Id_niveau}>
            {post.libelle_niveau}
          </option>
        )
      )}
    </>
  );
  return (
    <>
      <div className="form-group">
        <label>Niveau d’enseignement </label>
        <select
          className="form-control"
          name="niveau"
          onChange={(e) => niveau_handler(e)}
        >
          <option value="0">Selection Niveau</option>
          {niv}
        </select>
      </div>
    </>
  );
};

export default Niveau;
