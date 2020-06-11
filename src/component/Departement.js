import React, { useState, useEffect } from "react";
import axios from "axios";

const Departement = ({ initform }) => {
  const [departement, setDepartement] = useState([]);
  const [district, setDistrict] = useState([]);
  const [commune, setCommune] = useState([]);
  const [sectionCommunale, setSectionCommunale] = useState([]);

  const url_departement = "http://localhost:3001/app/sace/departement";
  const url_district = "http://localhost:3001/app/sace/district_departement";
  const url_commune = "http://localhost:3001/app/sace/commune_departement";
  const url_section_communale =
    "http://localhost:3001/app/sace/section_communale_commune";

  useEffect(() => {
    axios
      .get(url_departement)
      .then((res) => {
        // console.log(res.data);
        setDepartement(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  const departement_handler = (e) => {
    const departement_select = departement.filter(function (o) {
      return o.Code_direction === e.target.value;
    });
    // console.log(e.target.value);
    if (departement_select.length !== 0) {
      const Code_direction = departement_select[0].Code_direction;
      initform(e.target.name, departement[0].Libelle_departement);
      // props.setDepartement(departement[0].Libelle_departement);

      // --------------  District ----------
      const district = {
        Code_Direction: Code_direction,
      };
      axios
        .post(url_district, district)
        .then((res) => {
          //   console.log(res.data);
          setDistrict(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);

      // --------------  Commune ----------
      const commune = {
        Code_Direction: Code_direction,
      };

      axios
        .post(url_commune, commune)
        .then((res) => {
          // console.log(res.data);
          setCommune(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);
    }
  };

  const commune_handler = (e) => {
    const commune_select = commune.filter(function (o) {
      return o.Code_Commune === e.target.value;
    });

    if (commune_select.length !== 0) {
      initform(e.target.name, commune[0].Libelle_Commune);
      // props.setCommune(commune[0].Libelle_Commune);
      const commune_req = {
        Code_Com: commune_select[0].Code_Commune,
      };
      axios
        .post(url_section_communale, commune_req)
        .then((res) => {
          // console.log(res.data);
          setSectionCommunale(res.data);
        })
        .catch((err) => {
          console.log(err);
        }, []);
    }
  };

  const district_handler = (e) => {
    const district_select = district.filter(function (o) {
      return o.CodeDistrict === e.target.value;
    });

    if (district_select.length !== 0) {
      initform(e.target.name, district_select[0].District);
      // props.setBureau(district[0].District);
    }
  };

  const section_communale_handler = (e) => {
    const section_communale_select = sectionCommunale.filter(function (o) {
      return o.CodeSec === e.target.value;
    });

    if (section_communale_select.length !== 0) {
      initform(e.target.name, section_communale_select[0].LibelleSec);
      // props.setBureau(district[0].District);
    }
  };

  const biz_handler = (e) => {
      initform(e.target.name, e.target.value);
  };

  return (
    <>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Direction départementale d’éducation (DDE)</label>
          <select
            className="form-control"
            name="dde"
            onChange={departement_handler}
          >
            <option value="0">Choix du Departement</option>
            {departement.map((d, index) => (
              <option key={index} value={d.Code_direction}>
                {d.Libelle_departement}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-6">
          <label>Bureau District Scolaire (BDS)</label>
          <select
            className="form-control"
            name="bds"
            onChange={district_handler}
          >
            <option value="0">Choix du District</option>
            {district.map((d, index) => (
              <option key={index} value={d.CodeDistrict}>
                {d.District}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label>Ville/Commune</label>
          <select
            className="form-control"
            name="commune"
            onChange={commune_handler}
          >
            <option value="0">Choix du Commune</option>
            {commune.map((d, index) => (
              <option key={index} value={d.Code_Commune}>
                {d.Libelle_Commune}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Section Communale</label>
          <select
            className="form-control"
            name="section_communale"
            onChange={section_communale_handler}
          >
            <option value="0">Choix du Section Communale</option>
            {sectionCommunale.map((d, index) => (
              <option key={index} value={d.CodeSec}>
                {d.LibelleSec}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label>Zone scolaire (BIZ)</label>
          <input
            type="text"
            className="form-control"
            name="biz"
            onChange={biz_handler}
          />
        </div>
      </div>
    </>
  );
};

export default Departement;
