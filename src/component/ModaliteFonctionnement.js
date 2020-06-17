import React, { useState, useEffect } from "react";
import axios from "axios";

const ModaliteFonctionnement = ({ initData }) => {
  const [modalite, setModalite] = useState([]);
  let url_modalite = "http://localhost:3001/app/sace/modalite";

  useEffect(() => {
    axios
      .get(url_modalite)
      .then((res) => {
        setModalite(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  const modalite_handler = (e) => {
    initData(e.target.name, e.target.value);
  };
  
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
