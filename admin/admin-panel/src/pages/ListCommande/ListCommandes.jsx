import "./ListCommandes.css";
import React, { Component }  from 'react';
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CommandeRows } from "../../dummyData";
import { DataGrid } from "@material-ui/data-grid";

export default function ListeCommandes() {
  const [data, setData] = useState(CommandeRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "reference",
      headerName: "Reference",
      type: "number",
      width: 147,
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
      field: "nomClient",
      headerName: "Nom Client",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 110,
      editable: true,
    },
    {
      field: "etat",
      headerName: "Etat",
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
            <Link to={"/ListCommandes/" + params.row.id}>
              <button className="CommandeListEdit"> Edit </button>
            </Link>
            <DeleteOutline
              className="CommandeListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="ListCommande">
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
