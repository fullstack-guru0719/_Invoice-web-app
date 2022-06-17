import React from "react";

const ProductTableRow = ({ product }) => (
  <tr>
    <td>
      <h2>
        <a href="/blue/app/projects/projects-view">{product.name}</a>
      </h2>
      <small className="block text-ellipsis">
        <span className="text-muted">in</span> <span>1</span>{" "}
        <span className="text-muted">invoices for</span> <span>9</span>{" "}
        <span className="text-muted">rows</span>
      </small>
    </td>
    <td>{"$" + product.price}</td>
    <td>{product.name}</td>
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

export default ProductTableRow;
