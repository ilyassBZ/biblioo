import React from "react";
import "./sidebar.css";
import { Add, List } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Livres</h3>
          <ul className="sidebarList">
            <Link to={"/"} className="link">
              <li className="sidebarListItem">
                <Add className="sidebarIcon" />
                Ajouter
              </li>
            </Link>
            <Link to={"/ListLivres"} className="link">
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                Listes Livres
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Categories</h3>
          <ul className="sidebarList">
            <Link to={"/AjouterCategorie"} className="link">
            <li className="sidebarListItem">
              <Add className="sidebarIcon" />
              Ajouter
            </li></Link>
            <Link to={"/ListCategorie"} className="link">
            <li className="sidebarListItem">
              <List className="sidebarIcon" />
              Listes Categories
            </li></Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Commandes</h3>
          <ul className="sidebarList">
            <Link to={"/AjouterCommande"} className="link">
            <li className="sidebarListItem">
              <Add className="sidebarIcon" />
              Ajouter
            </li></Link>
            <Link to={"/ListCommandes"} className="link">
            <li className="sidebarListItem">
              <List className="sidebarIcon" />
              Listes Commandes
            </li></Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Profils</h3>
          <ul className="sidebarList">
            <Link to={"/ListProfils"} className="link">
            <li className="sidebarListItem">
              <List className="sidebarIcon" />
              Listes profils
            </li></Link>
            <Link to={"/ListMessages"} className="link">
            <li className="sidebarListItem">
              <List className="sidebarIcon" />
              Listes des messages
            </li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
