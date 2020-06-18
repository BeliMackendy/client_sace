import React, { useState, useEffect } from "react";
import axios from "axios";

const PublicCible = ({ initData, institution }) => {
  const [public_cible, setpublic_cible] = useState([]);
  let url_public_cible = "http://localhost:3001/app/sace/public_cible";

  const loadPublicCible = async()=>{
   await axios
    .get(url_public_cible)
    .then((res) => {
      // console.log(res.data);
      setpublic_cible(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    loadPublicCible()
  },[]);

  const public_cible_handler = (e) => {
    initData(e.target.name, e.target.value);
  };

  const pub = (
    <>
      {public_cible.map((post, index) =>
        post.id_public_cible === institution.cible ? (
          <option key={index} value={post.id_public_cible} selected="selected">
            {post.libelle_cible}
          </option>
        ) : (
          <option key={index} value={post.id_public_cible}>
            {post.libelle_cible}
          </option>
        )
      )}
    </>
  );

  return (
    <>
      <div className="form-group">
        <label>Public cible </label>
        <select
          className="form-control"
          name="cible"
          onChange={(e) => public_cible_handler(e)}
        >
          <option value="0">Selection Public cible </option>
          {pub}
        </select>
      </div>
    </>
  );
};

export default PublicCible;
