import React, { useState, useEffect } from "react";
import axios from "axios";

const Niveau = ({ initData }) => {
  const [niveau, setNiveau] = useState([]);
  let url_niveau = "http://localhost:3001/app/sace/niveau";

  useEffect(() => {
    axios
      .get(url_niveau)
      .then((res) => {
        // console.log(res.data);
        setNiveau(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  const niveau_handler = (e) => {
    initData(e.target.name, e.target.value);
  };
  return (
    <>
      <div className="form-group">
        <label>Niveau d’enseignement </label>
        <select className="form-control" name="niveau" onChange={(e) => niveau_handler(e)}>
          <option value="0">Selection Niveau</option>
          {niveau.map((post, index) => (
            <option key={index} value={post.Id_niveau}>
              {post.libelle_niveau}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Niveau;
