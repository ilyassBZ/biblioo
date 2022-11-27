import React from "react";
import "./Categorie.css";

import { Link } from "react-router-dom";

export default function categorie() {
  return (
    <div className="categorie">
      <div className="categorieTitleContainer">
        <h1 className="categorieTitle">Edit Categorie</h1>
				<Link to={"/AjouterCategorie"}>
        <button className="categorieAddButton">Create</button>
				</Link>
      </div>
      <div className="categorieContainer">
        <div className="categorieShow">
          <div className="categorieShowTop">
            <div className="categorieShowTopTitle">
              <span className="categorieShowTopName">Animal Farm</span>
            </div>
          </div>
          
        </div>
        <div className="categorieUpdate">
          <span className="categorieUpdateTitle">Edit</span>
          <form className="categorieUpdateForm">
            <div className="categorieUpdateLeft">
              <div className="categorieUpdateItem">
                <label>Categorie Titre</label>
                <input
                  type="text"
                  placeholder="Categorie"
                  className="categorieUpdateInput"
                />
              </div>
            </div>
            <button className="categorieUpdateButton">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
