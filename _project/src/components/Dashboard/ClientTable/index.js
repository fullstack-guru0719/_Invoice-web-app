import React from "react";
import ClientTableRow from "./ClientTableRow";

const ClientTable = ({ clients }) => (
  <div className="card card-table flex-fill">
    <div className="card-header">
      <h3 className="card-title mb-0">Clients</h3>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table custom-table mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients
              ? clients.map((client) => (
                  <ClientTableRow key={client._id} client={client} />
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </div>
    <div className="card-footer">
      <a href="/blue/app/employees/clients">View all clients</a>
    </div>
  </div>
);

export default ClientTable;
