import React from 'react'
import { NavLink } from "react-router-dom";

const MenuDossier = () => {
    return (
      <div className="container m-formulaire">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <NavLink to="Etablissement">Etablissement</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/Fondateur">Fondateur</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/Document">Upload</NavLink>
          </li>
        </ul>
      </div>
    );
}

export default MenuDossier
