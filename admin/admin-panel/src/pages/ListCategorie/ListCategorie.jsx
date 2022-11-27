import "./ListCategorie.css";
import React, { Component, useEffect }  from 'react';
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CategorieRows } from "../../dummyData";
import { DataGrid } from "@material-ui/data-grid";
import CategorieService from "../../services/CategorieService";


export default function ListeCategorie(){
const [data,setData] = useState (CategorieRows);
const handleDelete = (id)=>{
  setData(data.filter((item)=> item.id !== id));
}
 const [categories , setCategories]= useState([])
useEffect(()=>{

  CategorieService.getAllCategories().then((response)=>{
    setCategories(response.data)
    console.log(response.data);

  }).catch(error =>{
    console.log(error);
  })
},[])
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "title",
    headerName: "Title",
    width: 140,
    editable: true,
  },
  
  {
    field: "nombreDeLivres",
    headerName: "Nombre De Livres",
    type: "number",
    width: 200,
    editable: true,
  },
  

  {
    field: "action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/ListCategorie/" + params.row.id}>
            <button className="categorieListEdit"> Edit </button>
          </Link>
          <DeleteOutline className="categorieListDelete" onClick={()=>handleDelete(params.row.id)} />
        </>
      );
    },
  },
];


  return (
    <div className="ListCategorie">
      <div className="List">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pagesize={5}
          checkboxselection
        />
      </div>
    </div>
  );

}