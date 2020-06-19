import React, { useState, useEffect } from "react";

const Form_P_morale = ({Initformpersonne_morale}) => {
    const nature = [
        "Congrégation",
        "Mission",
        "Fondation",
        "ONG",
        "Organisation",
        "Autre",
      ];
    
      const [postInputform, setPostInputform] = useState({
        denomination: "",
        nature: "",
        reconnaissance: "",
        quitus_patente: "",
      });
      
      console.log(postInputform)
      useEffect(() => {
        Initformpersonne_morale(postInputform);
      });
    
      const Initform = (e) => {
        // setPostInputform({ ...postInputform, [e.target.name]: e.target.value });
        // props.Initformpersonne_morale(postInputform);
        if (e.target.type !== "file") {
          setPostInputform({ ...postInputform, [e.target.name]: e.target.value });
          // props.Initformnomscollectifs(postInputform);
        } else {
          setPostInputform({
            ...postInputform,
            [e.target.name]: e.target.files[0],
          });
          // console.log(postInputform);
          // props.Initformnomscollectifs(postInputform);
        }
      };
    

  return (
    <>
      <div className="row border border-info rounded my-1 p-2">
        <div className="col-12">
          <div className="form-group">
            <label>Dénomination</label>
            <input
              type="text"
              name="denomination"
                onChange={Initform}
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="row border border-info rounded my-1 p-2">
        <div className="col-12">
          <label>Nature</label>
          <div className="form-group">
            {nature.map((n, index) => (
              <div className="form-check form-check-inline" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="nature"
                    onChange={Initform}
                  value={n}
                />
                <label className="form-check-label">{n}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row border border-info rounded my-1 p-2">
        <div className="col-6">
          <div class="form-group">
            <label>Reconnaissance légale à jour</label>
            <input
              type="file"
              name="reconnaissance"
              onChange={Initform}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label>Quitus fiscal et/ou Patente valide </label>
            <input
              type="file"
              name="quitus_patente"
              onChange={Initform}
              className="form-control"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form_P_morale;
