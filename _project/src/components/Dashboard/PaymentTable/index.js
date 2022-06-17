import React, { useMemo } from "react";
import PaymentTableRow from "./PaymentTableRow";

const PaymentTable = ({ invoices }) => {
  const paidInvoices = useMemo(
    () =>
      invoices ? invoices.filter((invoice) => invoice.status === "paid") : [],
    [invoices]
  );
  return (
    <div className="col-md-6 d-flex">
      <div className="card card-table flex-fill">
        <div className="card-header">
          <h3 className="card-title mb-0">Payments</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table custom-table table-nowrap mb-0">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Client</th>
                  <th>Payment Type</th>
                  <th>Paid Date</th>
                  <th>Paid Amount</th>
                </tr>
              </thead>
              <tbody>
                {paidInvoices.length ? (
                  paidInvoices.map((invoice) => (
                    <PaymentTableRow key={invoice._id} invoice={invoice} />
                  ))
                ) : (
                  <tr>
                    <td>No data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer">
          <a href="/blue/app/accounts/payments">View all payments</a>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
