import React from "react";
import "./Commande.css";
import { Link } from "react-router-dom";

export default function Commande() {
  return (
    <div className="Commande">
      <div className="CommandeTitleContainer">
        <h1 className="CommandeTitle">Edit Commande</h1>
				<Link to={"/AjouterCommande"}>
        <button className="CommandeAddButton">Create</button>
				</Link>
      </div>
      <div className="CommandeContainer">
        <div className="CommandeShow">
          <div className="CommandeShowTop">
            <div className="CommandeShowTopTitle">
              <span className="CommandeShowTopName">Animal Farm</span>
              <span className="CommandeShowTopBy">by George Orwell</span>
            </div>
          </div>
          <div className="CommandeShowBottom">
            <span className="CommandeShowTitle">Commande Detail</span>
            <div className="CommandeShowInfo">
              <span className="CommandeshowIcon" >Nom client:</span>
              <span className="CommandeShowinfotitle">Ahmed Lchekare</span>
            </div>
            <div className="CommandeShowInfo">
              <span className="CommandeshowIcon" >Quantite: </span>
              <span className="CommandeShowinfoAuteur">15</span>
            </div>
            <div className="CommandeShowInfo">
              <span className="CommandeshowIcon" >Prix: </span>
              <span className="CommandeShowinfoAuteur">150</span>
            </div>
            <div className="CommandeShowInfo">
              <span className="CommandeshowIcon" > Etat:</span>
              <span className="CommandeShowinfoCategorie">En coure</span>
            </div>
            <div className="CommandeShowInfo">
              <span className="CommandeshowIcon" >Date de commande : </span>
              <span className="CommandeShowinfoPrix">22/67/2021</span>
            </div>
           
          </div>
        </div>
        <div className="CommandeUpdate">
          <span className="CommandeUpdateTitle">Edit</span>
          <form className="CommandeUpdateForm">
            <div className="CommandeUpdateLeft">
              <div className="CommandeUpdateItem">
                <label>Livre Titre</label>
                <input
                  type="text"
                  placeholder="Animal Farm"
                  className="CommandeUpdateInput"
                />
              </div>
              <div className="CommandeUpdateItem">
                <label>Nom Client</label>
                <input
                  type="text"
                  placeholder="Ahmed Ger"
                  className="CommandeUpdateInput"
                />
               
                

                <div className="CommandeUpdateItem">
                  <label>Commande Quantite</label>
                  <input
                    type="number"
                    placeholder="10"
                    className="CommandeUpdateInput"
                  />
                </div>
                <div className="CommandeUpdateItem">
                  <label>Commande Prix</label>
                  <input
                    type="number"
                    step={0.01}
                    placeholder="13"
                    className="CommandeUpdateInput"
                  />
                </div>
                
              </div>
            </div>
            <div className="CommandeUpdateRight">
              
              <button className="CommandeUpdateButton">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
