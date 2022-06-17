import "../../index.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  DashWidget,
  ProductTable,
  ClientTable,
  InvoiceTable,
  PaymentTable,
  StatsInfo,
} from "../../../components";
import { jwtService } from "../../../services";

// import 'Assets/plugins/morris/morris.min.js';
// import 'Assets/plugins/raphael/raphael.min.js';
// import 'Assets/js/chart.js';

const AdminDashboard = () => {
  // UNSAFE_componentWillMount() {
  //   let firstload = localStorage.getItem("firstload");
  //   if (firstload === "true") {
  //     setTimeout(function () {
  //       window.location.reload(1);
  //       localStorage.removeItem("firstload");
  //     }, 1000);
  //   }
  // }
  /** Redux Store **/
  const user = useSelector((state) => state.user, shallowEqual);
  const { clients, products } = user;

  /** Invoice List **/
  const [invoices, setInvoices] = useState([]);

  /** Chart Data **/
  const [chartData, setChartData] = useState([
    {
      y: "June",
      "Invoices sent": 90,
      "Invoices paid": 50,
      "Invoices draft": 50,
    },
    {
      y: "July",
      "Invoices sent": 65,
      "Invoices paid": 50,
      "Invoices draft": 50,
    },
    {
      y: "Aug",
      "Invoices sent": 40,
      "Invoices paid": 50,
      "Invoices draft": 50,
    },
    {
      y: "Sep",
      "Invoices sent": 65,
      "Invoices paid": 50,
      "Invoices draft": 50,
    },
    {
      y: "Oct",
      "Invoices sent": 40,
      "Invoices paid": 50,
      "Invoices draft": 50,
    },
    {
      y: "Nov",
      "Invoices sent": 65,
      "Invoices paid": 50,
      "Invoices draft": 50,
    },
    {
      y: "Dec",
      "Invoices sent": 90,
      "Invoices paid": 50,
      "Invoices draft": 50,
    },
  ]);

  // get invoice list on mount
  useEffect(() => {
    if (!user._id) return;
    jwtService
      .getMyInvoices()
      .then((response) => setInvoices(response.data))
      .catch((error) => {
        console.log("[fetch invoice error]", error);
        setInvoices([]);
      });
  }, [user]);

  // get chart data from the invoice list
  useEffect(() => {
    if (!invoices) return;

    const numberByDate = {};
    const numberByDateWithFormat = [];

    invoices.forEach((invoice) => {
      const date = new Date(invoice.updatedAt).getDate();
      const status = invoice.status;
      console.log(date, status);
      const initialCount = { sent: 0, paid: 0, draft: 0 };
      if (!numberByDate[date]) {
        numberByDate[date] = { ...initialCount, [status]: 1 };
      } else numberByDate[date][status]++;
    });
    Object.entries(numberByDate).forEach(([key, value]) => {
      numberByDateWithFormat.push({
        y: key,
        "Invoices sent": value.sent ? value.sent : 0,
        "Invoices paid": value.paid ? value.paid : 0,
        "Invoices draft": value.draft ? value.draft : 0,
      });
    });
    console.log(numberByDate, numberByDateWithFormat);

    setChartData(numberByDateWithFormat);
  }, [invoices]);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Dashboard - Invoices, Products and Clients</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Welcome!</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <DashWidget
              icon="fa-user"
              number={clients.length}
              title={"Clients"}
            />
          </div>

          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <DashWidget
              icon="fa-usd"
              number={invoices.length}
              title={"Invoices"}
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <DashWidget
              icon="fa-cubes"
              number={products.length}
              title={"Products"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Invoice Sent</h3>
                    {/* <div id="bar-charts" /> */}
                    <ResponsiveContainer width="100%" height={342}>
                      <BarChart
                        data={chartData}
                        margin={{
                          top: 5,
                          right: 5,
                          left: 5,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid />
                        <XAxis dataKey="y" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Invoices sent" fill="#667eea" />
                        <Bar dataKey="Invoices draft" fill="#764ba2" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Payments Recieved</h3>
                    <ResponsiveContainer width="100%" height={342}>
                      <LineChart
                        data={chartData}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                      >
                        <CartesianGrid />
                        <XAxis dataKey="y" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="Invoices paid"
                          stroke="#667eea"
                          fill="#667eea"
                          strokeWidth={3}
                          dot={{ r: 3 }}
                          activeDot={{ r: 7 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Invoices sent"
                          stroke="#764ba2"
                          fill="#764ba2"
                          strokeWidth={3}
                          dot={{ r: 3 }}
                          activeDot={{ r: 7 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>

                    {/* <div id="line-charts" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Statistics Widget */}
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
            <div className="card flex-fill dash-statistics">
              <div className="card-body">
                <h5 className="card-title">Statistics</h5>
                <div className="stats-list">
                  <StatsInfo
                    value={31}
                    title="Total Invoices"
                    number={invoices.length}
                    color="primary"
                  />
                  <StatsInfo
                    value={31}
                    title="Pending Invoices"
                    number={
                      invoices.filter((invoice) => invoice.status === "sent")
                        .length
                    }
                    color="warning"
                  />
                  <StatsInfo
                    value={62}
                    title="Total Products"
                    number={products.length}
                    color="success"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Statistics Widget */}
        <div className="row">
          <InvoiceTable invoices={invoices} />
          <PaymentTable invoices={invoices} />
        </div>
        <div className="row">
          <div className="col-md-6 d-flex">
            <ClientTable clients={clients} />
          </div>
          <div className="col-md-6 d-flex">
            <ProductTable products={products} />
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default withRouter(AdminDashboard);
