import React from "react";
import { Avatar_19 } from "../../../Entryfile/imagepath.jsx";

const ClientTableRow = ({ client }) => (
  <tr>
    <td>
      <h2 className="table-avatar">
        {/* <a href="#" className="avatar">
          <img alt="" src={Avatar_19} />
        </a> */}
        <a href="/blue/app/profile/client-profile">
          {client.name} <span>{client.address}</span>
        </a>
      </h2>
    </td>
    <td>{client.email}</td>
    <td>
      <div className="dropdown action-label">
        <a
          className="btn btn-white btn-sm btn-rounded dropdown-toggle"
          href="#"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-dot-circle-o text-success" /> Active
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="#">
            <i className="fa fa-dot-circle-o text-success" /> Active
          </a>
          <a className="dropdown-item" href="#">
            <i className="fa fa-dot-circle-o text-danger" /> Inactive
          </a>
        </div>
      </div>
    </td>
    <td className="text-right">
      <div className="dropdown dropdown-action">
        <a
          href="#"
          className="action-icon dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="material-icons">more_vert</i>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="">
            <i className="fa fa-pencil m-r-5" /> Edit
          </a>
          <a className="dropdown-item" href="">
            <i className="fa fa-trash-o m-r-5" /> Delete
          </a>
        </div>
      </div>
    </td>
  </tr>
);

export default ClientTableRow;
