import React, { useState, useEffect } from "react";

const Form_Collectifs = ({Initformnomscollectifs}) => {
  const nature = ["Noms collectifs", "Société Anonyme (SA)", "Autre"];

  const [postInputform, setPostInputform] = useState({
    denomination: "",
    nature: "",
    acte_constitutif: "",
    reconnaissance: "",
    copie_p_identite: "",
  });

  useEffect(() => {
    Initformnomscollectifs(postInputform);
  });

 const Initform = (e) => {  
   if (e.target.type !== "file") {
     setPostInputform({ ...postInputform, [e.target.name]: e.target.value });     
   } else {
     setPostInputform({
       ...postInputform,
       [e.target.name]: e.target.files[0],
     });     
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
        <div className="col-6">
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
        <div className="col-6">
          <div className="form-group">
            <label>Acte constitutif</label>
            <input
              type="file"
              name="acte_constitutif"
                onChange={Initform}             
              className="form-control"
            />
          </div>
        </div>
      
      </div>
      <div className="row border border-info rounded my-1 p-2">
        <div className="col-6">
          <div className="form-group ">
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
          <div className="form-group ">
            <label>Copie des pièces d’identité valides des actionnaires </label>
            <input
              type="file"
              name="copie_p_identite"
              onChange={Initform}             
              className="form-control"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form_Collectifs;
