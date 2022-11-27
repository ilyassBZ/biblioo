import "./AjouterCategorie.css";
import React, { Component }  from 'react';
export default function Ajouter() {
  return (
    <div className="newCategorie">
      <h1 className="newCategorieTitle">Ajouter Categorie</h1>
      <form className="newCategorieForm">
        <div className="newCategorieItem">
          <label>Categorie titre</label>
          <input type="text" className="newCategorieInput" />
        </div>
      
        <button className="newCategorieBotton">Ajouter</button>
      </form>
    </div>
  );
}
