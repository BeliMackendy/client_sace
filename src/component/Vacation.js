import React, { useState, useEffect } from "react";
import axios from "axios";

const Vacation = ({ initData }) => {
  const [vacation, setVacation] = useState([]);
  let url_vacation = "http://localhost:3001/app/sace/vacation";

  useEffect(() => {
    axios
      .get(url_vacation)
      .then((res) => {
        setVacation(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  const vacation_handler = (e) => {
    initData(e.target.name, e.target.value);
  };

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
          {vacation.map((post, index) => (
            <option key={index} value={post.Id_vacation}>
              {post.libelle_vacation}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Vacation;
