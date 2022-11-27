import React from "react";
import "./Livre.css";
import {
  MonetizationOn,
  LibraryBooks,
  ShoppingBasket,
  Description,
  Person,
  MenuBook,
  Backup,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Livre() {
  return (
    <div className="livre">
      <div className="livreTitleContainer">
        <h1 className="livreTitle">Edit Livre</h1>
				<Link to={"/"}>
        <button className="livreAddButton">Create</button>
				</Link>
      </div>
      <div className="livreContainer">
        <div className="livreShow">
          <div className="livreShowTop">
            <div className="livreShowTopTitle">
              <span className="livreShowTopName">Animal Farm</span>
              <span className="livreShowTopBy">by George Orwell</span>
            </div>
          </div>
          <div className="livreShowBottom">
            <span className="livreShowTitle">Livre Detail</span>
            <div className="livreShowInfo">
              <MenuBook className="livreshowIcon" />
              <span className="livreShowinfotitle">Animal Farm</span>
            </div>
            <div className="livreShowInfo">
              <Person className="livreshowIcon" />
              <span className="livreShowinfoAuteur">George Orwell</span>{" "}
            </div>
            <div className="livreShowInfo">
              <LibraryBooks className="livreshowIcon" />
              <span className="livreShowinfoCategorie">Classic Literature</span>
            </div>
            <div className="livreShowInfo">
              <MonetizationOn className="livreshowIcon" />
              <span className="livreShowinfoPrix">13$</span>
            </div>
            <div className="livreShowInfo">
              <ShoppingBasket className="livreshowIcon" />
              <span className="livreShowinfoQuantite">10 Qu</span>
            </div>
            <div className="livreShowInfo">
              <Description className="livreshowIcon" />
              <span className="livreShowinfoDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit...
              </span>
            </div>
          </div>
        </div>
        <div className="livreUpdate">
          <span className="livreUpdateTitle">Edit</span>
          <form className="livreUpdateForm">
            <div className="livreUpdateLeft">
              <div className="livreUpdateItem">
                <label>Livre Titre</label>
                <input
                  type="text"
                  placeholder="Animal Farm"
                  className="livreUpdateInput"
                />
              </div>
              <div className="livreUpdateItem">
                <label>Livre Author</label>
                <input
                  type="text"
                  placeholder="George Orwell"
                  className="livreUpdateInput"
                />
                <div className="livreUpdateItem">
                  <label>Livre Categorie</label>
                  <input
                    type="text"
                    placeholder="Classic Literature"
                    className="livreUpdateInput"
                  />
                </div>
                <div className="livreUpdateItem">
                  <label>Livre Prix</label>
                  <input
                    type="number"
                    step={0.01}
                    placeholder="13"
                    className="livreUpdateInput"
                  />
                </div>

                <div className="livreUpdateItem">
                  <label>Livre Quantite</label>
                  <input
                    type="number"
                    placeholder="10"
                    className="livreUpdateInput"
                  />
                </div>
                <div className="livreUpdateItem">
                  <label>Livre Description</label>
                  <textarea
                    type="text"
                    placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit..."
                    className="livreUpdateInput"
                  />
                </div>
              </div>
            </div>
            <div className="livreUpdateRight">
              <div className="livreUpdateUpload">
                <label htmlFor="file">
                  <Backup className="livreUpdateImage" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="livreUpdateButton">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
