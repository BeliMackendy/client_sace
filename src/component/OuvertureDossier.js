import React, { useState } from "react";

import Form1Inscription from "./Form1Inscription";
import Form2Inscription from "./Form2Inscription";
import Form3Inscription from "./Form3Inscription";

import Login from "./Login";

const OuvertureDossier = ({url}) => {
  const form1data = {
    nom: "",
    prenom: "",
    email: "",
    tel: "",
  };

  const form2data = {
    denomination: "",
    dde: "",
    commune: "",
    section_communale: "",
    bds: "",
    biz: "",
  };

  const form3data = {
    password: "",
    date_demande: "",
  };

  const [currentform, setCurrentform] = useState(1);
  const [dataform1, setdataform1] = useState(form1data);
  const [dataform2, setdataform2] = useState(form2data);
  const [dataform3, setdataform3] = useState(form3data);

  return (
    <>
      {currentform === 1 ? (
        <>
          <Form1Inscription
            setCurrentform={setCurrentform}
            currentform={currentform}
            dataform1={dataform1}
            setdataform1={setdataform1}
          />
        </>
      ) : currentform === 2 ? (
        <>
          <Form2Inscription
            setCurrentform={setCurrentform}
            currentform={currentform}
            dataform2={dataform2}
            setdataform2={setdataform2}
          />
        </>
      ) : currentform === 3 ? (
        <>
          <Form3Inscription
            setCurrentform={setCurrentform}
            currentform={currentform}
            dataform1={dataform1}
            dataform2={dataform2}
            dataform3={dataform3}
            setdataform3={setdataform3}
            url={url}
          />
        </>
      ) : (
        <>
          <Login/>
          {/* <DossierEtablissement /> */}
          {/* <Form4 setCurrentform={setCurrentform}  currentform={currentform}  form_data2={form2_data} /> */}
        </>
      )}
    </>
  );
};

export default OuvertureDossier;
