import React from 'react'
import { NavLink } from "react-router-dom";

const MenuDossier = () => {
    return (
      <div className="container m-formulaire">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <NavLink to="Ouverture">Etablissement</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/">Fondateur</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/">Upload</NavLink>
          </li>
        </ul>
      </div>
    );
}

export default MenuDossier
