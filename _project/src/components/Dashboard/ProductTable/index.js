import React from "react";
import ProductTableRow from "./ProductTableRow";

const ProductTable = ({ products }) => (
  <div className="card card-table flex-fill">
    <div className="card-header">
      <h3 className="card-title mb-0">Products</h3>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table custom-table mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Desc</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {products
              ? products.map((product) => (
                  <ProductTableRow key={product._id} product={product} />
                ))
              : "No data"}
          </tbody>
        </table>
      </div>
    </div>
    <div className="card-footer">
      <a href="/blue/app/projects/project_dashboard">View all projects</a>
    </div>
  </div>
);

export default ProductTable;
