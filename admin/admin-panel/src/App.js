import Sidebar from "./components/sidebar/sidebar";
import React, { Component }  from 'react';
import "./App.css";
import Topbar from "./components/topbar/topbar";
import AjouterLivre from "./pages/AjouterLivres/Ajouter";
import ListLivres from "./pages/ListLivres/ListLivres";
import Livre from "./pages/Livre/Livre";
import AjouterCategorie from "./pages/AjouterCategorie/AjouterCategorie";
import ListCategorie from "./pages/ListCategorie/ListCategorie";
import Categorie from "./pages/Categorie/Categorie";
import AjouterCommande from "./pages/AjouterCommande/Ajouter";
import ListCommandes from "./pages/ListCommande/ListCommandes";
import Commande from "./pages/Commande/Commande";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={ <AjouterLivre />}>
           
          </Route>
          <Route path="/ListLivres" element={ <ListLivres />}>
            
          </Route>
 
          <Route path="/ListLivres/:livreId" element={ <Livre />}>
            
          </Route>
           <Route path="/AjouterCategorie" element={ <AjouterCategorie />}>
           
          </Route>
          <Route path="/ListCategorie" element={ <ListCategorie />}>
            
          </Route>
 
          <Route path="/ListCategorie/:categorieId" element={ <Categorie />}>
            
          </Route>
          <Route path="/AjouterCommande" element={ <AjouterCommande />}>
           
          </Route>
          <Route path="/ListCommandes" element={ <ListCommandes />}>
            
          </Route>
 
          <Route path="/ListCommandes/:commandeId" element={ <Commande />}>
            
          </Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
