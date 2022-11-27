import "./Ajouter.css";
import React, { Component }  from 'react';
export default function Ajouter() {
  return (
    <div className="newLivre">
      <h1 className="newLivreTitle">Ajouter Livre</h1>
      <form className="newLivreForm">
        <div className="newLivreItem">
          <label>Livre titre</label>
          <input type="text" className="newLivreInput" />
        </div>
        <div className="newLivreItem">
          <label>Livre Author</label>
          <input type="text" className="newLivreInput" />
        </div>
        <div className="newLivreItem">
          <label>Livre Categorie</label>
          <select className="newLivreSelect" name="active" id="active">
            <option value="Categorie1">Categorie1</option>
            <option value="Categorie2">Categorie2</option>
            <option value="Categorie3">Categorie3</option>
          </select>
        </div>
        <div className="newLivreItem">
          <label>Livre Prix</label>
          <input type="number" step={0.01} className="newLivreInput" />
        </div>

        <div className="newLivreItem">
          <label>Livre Quantite</label>
          <input type="number" className="newLivreInput" />
        </div>
        <div className="newLivreItem">
          <label>Livre Description</label>
          <textarea type="text" className="newLivreInput" />
        </div>
        <button className="newLivreBotton">Ajouter</button>
      </form>
    </div>
  );
}
