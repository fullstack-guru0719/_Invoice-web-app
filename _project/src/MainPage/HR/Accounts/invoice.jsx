import React, { useState, useCallback, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";
import { Table } from "antd";
import "antd/dist/antd.css";
import "../../antdstyle.css";

import { itemRender, onShowSizeChange } from "../../paginationfunction";
import { jwtService } from "../../../services";
import {
  makeFixed2,
  getInvoicePrice,
  inCludeQuery,
  invoiceStatus,
} from "../../../helpers/UtiFunctions";
import { useMemo } from "react";

const initialRows = [
  {
    id: 1001,
    client: {
      _id: "",
      name: "client",
      address: "address",
      email: "email",
      phone: "phone",
    },
    vendor: {},
    billfor: "bill",
    products: [],
    tax: 5,
    created_at: "2020-12-12T03:46:37.728Z",
    updatedAt: "2020-12-12T03:46:37.728Z",
    status: "paid",
  },
];
const Invoices = () => {
  /** Redux store **/
  const user = useSelector((state) => state.user, shallowEqual);

  /** Table data **/
  const [rows, setRows] = useState(initialRows);
  const columns = [
    {
      title: "Invoice Number",
      dataIndex: "id",
      render: (text, record) => (
        <Link to={"/app/accounts/invoices-view/" + record._id}>#{text}</Link>
      ),
      sorter: (a, b) => {
        return (
          a.id.replace(/\D/g, "") - b.id.replace(/\D/g, "") ||
          a.id.localeCompare(b.id)
        );
      },
    },
    {
      title: "Client",
      dataIndex: "client",
      render: (text, record) => <span>{text ? text.name : ""}</span>,
      sorter: (a, b) => a.client.name.localeCompare(b.client.name),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (text, record) => (
        <span>$ {makeFixed2(getInvoicePrice(record))}</span>
      ),
      sorter: (a, b) => getInvoicePrice(a) - getInvoicePrice(b),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <span className={"badge " + invoiceStatus[text].class}>
          {invoiceStatus[text].name}
        </span>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
  ];
  const [query, setQuery] = useState("");

  /** get invoice list on mount **/
  useEffect(() => {
    if (!user._id) return;
    jwtService
      .getMyInvoices()
      .then((response) => setRows(response.data))
      .catch((error) => {
        console.log("[fetch invoice error]", error);
        setRows([]);
      });
  }, [user]);

  /** return filtered Rows **/
  const filteredRows = useMemo(
    () =>
      rows.filter(
        (row) =>
          row.status !== "void" &&
          (inCludeQuery(row.client.name, query) ||
            inCludeQuery(row.id, query) ||
            inCludeQuery(row.amount, query))
      ),
    [rows, query]
  );

  const handleTableChange = () => {};

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Invoices - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Invoices</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/purple/app/main/dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Invoices</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <Link to="/app/accounts/invoices-view" className="btn add-btn">
                <i className="fa fa-plus" /> Create Invoice
              </Link>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="row filter-row">
          <div className="col-sm-6">
            <div className="form-group d-flex">
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Invoice, Client, Amount"
              />
            </div>
          </div>
        </div>
        {/* /Search Filter */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                pagination={{
                  total: filteredRows.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={filteredRows}
                rowKey={(record) => record.id}
                onChange={handleTableChange}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default withRouter(Invoices);
