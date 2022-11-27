import "./ListLivres.css";
import React, { Component } from "react";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LivreRows } from "../../dummyData";
import { DataGrid } from "@material-ui/data-grid";

export default function ListeLivres() {
  const [data, setData] = useState(LivreRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "title",
      headerName: "Title",
      width: 140,
      editable: true,
    },
    {
      field: "categorie",
      headerName: "Categorie",
      width: 140,
      editable: true,
    },
    {
      field: "prix",
      headerName: "Prix",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "quantite",
      headerName: "Quantite",
      type: "number",
      width: 140,
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
            <Link to={"/ListLivres/" + params.row.id}>
              <button className="livreListEdit"> Edit </button>
            </Link>
            <DeleteOutline
              className="livreListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="ListLivres">
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
