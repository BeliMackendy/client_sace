import React, { useEffect } from "react";
import axios from "axios";

const Accueil = ({setPostUser}) => {
  
  const url_user = "http://localhost:3001/app/sace/me";

  const getUser = async () => {
    const res = await axios.get(url_user, {
      headers: { "x-auth-token": localStorage.token },
    });
  
    setPostUser(res.data[0].email);   
  };
  
  useEffect(() => {
    getUser();
  });
  return <div>Accueil</div>;
};

export default Accueil;
