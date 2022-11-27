import "./Ajouter.css";
import React, { Component }  from 'react';
export default function Ajouter() {
  return (
    <div className="newCommande">
      <h1 className="newCommandeTitle">Ajouter Commande</h1>
      <form className="newCommandeForm">
        <div className="newCommandeItem">
          <label>Livre titre</label>
          <input type="text" className="newCommandeInput" />
        </div>
        <div className="newCommandeItem">
          <label>Nom Client</label>
          <input type="text" className="newCommandeInput" />
        </div>
        <div className="newCommandeItem">
          <label>Commande Quantite</label>
          <input type="number" className="newCommandeInput" />
        </div>
        <div className="newCommandeItem">
          <label>Commande Prix</label>
          <input type="number" step={0.01} className="newCommandeInput" />
        </div>
<div className="newCommandeItem">
          <label>Etat</label>
          <input type="text" className="newCommandeInput" />
        </div>
        
        
        <button className="newCommandeBotton">Ajouter</button>
      </form>
    </div>
  );
}
