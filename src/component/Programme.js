import React, { useState, useEffect } from "react";
import axios from "axios";

const Programme = ({ initData, institution }) => {
  const [postprogramme, setPostProgramme] = useState([]);
  const [programme_type, setProgramme_type] = useState([]);
  const [programme, setProgramme] = useState();
  const [
    text_typeprogramme_readonly,
    setText_typeprogramme_readonly,
  ] = useState(true);

  const [text_type_programme, setText_type_programme] = useState();

  const url_programme = "http://localhost:3001/app/sace/programme";
  const url_programme_menfp = "http://localhost:3001/app/sace/programme_menfp";
  const url_programme_etranger =
    "http://localhost:3001/app/sace/programme_etranger";

    const loadProgramme = async()=>{
     await axios
      .get(url_programme)
      .then((res) => {
        // console.log(res.data);
        setPostProgramme(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }

  useEffect(() => {
    loadProgramme();
  },[]);
  
  const init = () => {
    const name = "type_programme";
    const value = "";
    initData(name, value);
  };

  const programme_handler = (e) => {
    const programme_select = postprogramme.filter(function (o) {
      return o.id == e.target.value;
    });

    if (programme_select.length !== 0) {
      if (programme_select[0].libelle_programme === "Programme du MENFP") {
        setProgramme(programme_select[0].libelle_programme);
        initData(e.target.name, programme_select[0].id);
        const data = {
          programme_: programme_select[0].id,
        };

        axios
          .post(url_programme_menfp, data)
          .then((res) => {
            setProgramme_type(res.data);
          })
          .catch((err) => {
            console.log(err);
          }, []);
      }
      if (programme_select[0].libelle_programme === "Programme étranger ") {
        // initData(name, value);
        setProgramme(programme_select[0].libelle_programme);
        initData(e.target.name, programme_select[0].id);

        const data = {
          programme_: programme_select[0].id,
        };

        axios
          .post(url_programme_etranger, data)
          .then((res) => {
            setProgramme_type(res.data);
          })
          .catch((err) => {
            console.log(err);
          }, []);
      }
    }
    
  };

  const type_programme_handler = (e) => {
    const type_programme_select = programme_type.filter(function (o) {
      return o.Id == e.target.value;
    });

    if (type_programme_select[0].libelle_programme !== "autre") {
      setText_typeprogramme_readonly(true);
      setText_type_programme("");
      initData(e.target.name, type_programme_select[0].libelle_programme);
    } else {
      setText_typeprogramme_readonly(false);
      initData(e.target.name, "");
    }
  };

  const text_autre_programme_handler = (e) => {
    const name = "type_programme";
    const value = e.target.value;
    setText_type_programme(value);
    initData(name, value);
  };

  const type_programme =
    programme === "Programme du MENFP" ? (
      programme_type.map((p, index) => (
        <div className="form-check form-check-inline form-group" key={index}>
          <input
            className="form-check-input"
            type="radio"
            name="type_programme"
            value={p.Id}
            onChange={(e) => type_programme_handler(e)}
          />
          <label className="form-check-label">{p.libelle_programme}</label>
        </div>
      ))
    ) : (
      <>
        {programme_type.map((p, index) => (
          <div className="form-check form-check-inline form-group" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="type_programme"
              value={p.Id}
              onChange={(e) => type_programme_handler(e)}
            />
            {p.libelle_programme !== "autre" ? (
              <> {p.libelle_programme}</>
            ) : (
              <>
                {p.libelle_programme}
                <input
                  className="form-control"
                  type="text"
                  value={text_type_programme}
                  readOnly={text_typeprogramme_readonly}
                  onChange={(e) => text_autre_programme_handler(e)}
                />
              </>
            )}
          </div>
        ))}
      </>
    );

  const prog = (
    <>
      {postprogramme.map((post, index) =>
        post.id === institution.programme ? (
          <option key={index} value={post.id} selected="selected">
            {post.libelle_programme}
          </option>
        ) : (
          <option key={index} value={post.id}>
            {post.libelle_programme}
          </option>
        )
      )}
    </>
  );

  return (
    <>
      <div className="row">
        <div className="col-6">
          <label>Programme</label>
          <select
            className="form-control"
            name="programme"
            onChange={programme_handler}
          >
            <option value="0">Selection Programme</option>
            {prog}
          </select>
        </div>

        <fieldset className="col-6">{type_programme}</fieldset>
      </div>
    </>
  );
};

export default Programme;
