import React from "react";
import { makeFixed2, getInvoicePrice } from "../../../helpers/UtiFunctions";

const PaymentTableRow = ({ invoice }) => (
  <tr>
    <td>
      <a href="/blue/app/accounts/invoices-view">{"#INV-" + invoice.id}</a>
    </td>
    <td>
      <h2>
        <a href="#">{invoice.client.name}</a>
      </h2>
    </td>
    <td>Paypal</td>
    <td>11 Mar 2019</td>
    <td>{"$" + makeFixed2(getInvoicePrice(invoice))}</td>
  </tr>
);

export default PaymentTableRow;
