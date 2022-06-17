import React from "react";
import {
  makeFixed2,
  getInvoicePrice,
  formatDate,
  invoiceStatus,
} from "../../../helpers/UtiFunctions";

const InvoiceTableRow = ({ invoice }) => {
  const { status } = invoice;
  console.log("status", invoice.updatedAt, new Date(invoice.updatedAt));
  return (
    <tr>
      <td>
        <a href="/blue/app/accounts/invoices-view">{"#INV-" + invoice.id}</a>
      </td>
      <td>
        <h2>
          <a href="#">{invoice.client.name}</a>
        </h2>
      </td>
      <td>{formatDate(invoice.updatedAt)}</td>
      <td>{"$" + makeFixed2(getInvoicePrice(invoice))}</td>
      <td>
        <span className={"badge " + invoiceStatus[status].class}>
          {invoiceStatus[status].name}
        </span>
      </td>
    </tr>
  );
};

export default InvoiceTableRow;
