import React, { useState, useEffect } from "react";
import axios from "axios";

const ModaliteFonctionnement = ({ initData,institution }) => {
  const [modalite, setModalite] = useState([]);
  let url_modalite = "http://localhost:3001/app/sace/modalite";

  const loadModalite = async()=>{
    axios
    .get(url_modalite)
    .then((res) => {
      setModalite(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    loadModalite()
  },[]);

  const modalite_handler = (e) => {
    initData(e.target.name, e.target.value);
  };

  const modal = (
    <>
      {modalite.map((post, index) =>
        post.id === institution.modalite ? (
          <option key={index} value={post.id} selected="selected">
            {post.libelle}
          </option>
        ) : (
          <option key={index} value={post.id}>
            {post.libelle}
          </option>
        )
      )}
    </>
  );
  
  return (
    <>
      <div className="form-group">
        <label>Modalité de fonctionnement </label>
        <select
          className="form-control"
          name="modalite"
          onChange={(e) => modalite_handler(e)}
        >
          <option value="0">Selection Modalite</option>
          {modalite.map((post, index) => (
            <option key={index} value={post.id}>
              {post.libelle}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ModaliteFonctionnement;
