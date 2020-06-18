import React, { useState, useEffect } from "react";
import axios from "axios";

const Vacation = ({ initData, institution }) => {
  const [vacation, setVacation] = useState([]);
  let url_vacation = "http://localhost:3001/app/sace/vacation";

  const loadvacation = async()=>{
    axios
    .get(url_vacation)
    .then((res) => {
      setVacation(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    loadvacation();
  },[]);

  

  const vacation_handler = (e) => {
    initData(e.target.name, e.target.value);
  };

  const vac = (
    <>
      {vacation.map((post, index) =>
        post.Id_vacation === institution.vacation ? (
          <option key={index} value={post.Id_vacation} selected="selected">
            {post.libelle_vacation}
          </option>
        ) : (
          <option key={index} value={post.Id_vacation}>
            {post.libelle_vacation}
          </option>
        )
      )}
    </>
  );
  
  return (
    <>
      <div className="form-group">
        <label>Vacation </label>
        <select
          className="form-control"
          name="vacation"
          onChange={(e) => vacation_handler(e)}
        >
          <option value="0">Selection Vacation</option>
          {vac}
        </select>
      </div>
    </>
  );
};

export default Vacation;
