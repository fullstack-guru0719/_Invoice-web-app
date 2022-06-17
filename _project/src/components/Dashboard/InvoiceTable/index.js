import React from "react";
import InvoiceTableRow from "./InvoiceTableRow";

const InvoiceTable = ({ invoices }) => (
  <div className="col-md-6 d-flex">
    <div className="card card-table flex-fill">
      <div className="card-header">
        <h3 className="card-title mb-0">Invoices</h3>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-nowrap custom-table mb-0">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Client</th>
                <th>Due Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices
                ? invoices.map((invoice) => (
                    <InvoiceTableRow key={invoice._id} invoice={invoice} />
                  ))
                : "no data"}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card-footer">
        <a href="/blue/app/accounts/invoices">View all invoices</a>
      </div>
    </div>
  </div>
);

export default InvoiceTable;
