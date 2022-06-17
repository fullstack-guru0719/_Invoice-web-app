
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,invoicenumber:"INV-0001",client:"	Global Technologies",paymenttype:"Paypal",duedate:"11 Mar 2019",amount:"2099",status:"Paid"},
         {id:2,invoicenumber:"INV-0002",client:"Delta Infotech",paymenttype:"Paypal",duedate:"11 Mar 2019",amount:"2099",status:"Sent"},
        ],          
    };
  }
   render() {
    const{data} = this.state
    const columns = [         
      {
        title: 'Invoice ID',
        dataIndex: 'invoicenumber',
        render: (text, record) => (
          <a href="/purple/app/accounts/invoices-view">#{text}</a>
          ),
        sorter: (a, b) => a.invoicenumber.length - b.invoicenumber.length,
      },     
      {
        title: 'Client',
        dataIndex: 'client',
        sorter: (a, b) => a.client.length - b.client.length,
      },

      {
        title: 'Payment Type',
        dataIndex: 'paymenttype', 
        sorter: (a, b) => a.paymenttype.length - b.paymenttype.length,
      },
      {
        title: 'Paid Date',
        dataIndex: 'duedate',
          sorter: (a, b) => a.duedate.length - b.duedate.length,
      },    
      {
        title: 'Paid Amount',
        dataIndex: 'amount',
        render: (text, record) => (
        <span>$ {text}</span>
          ),
        sorter: (a, b) => a.amount.length - b.amount.length,
      }
    ]
      return ( 
        <div className="page-wrapper">
            <Helmet>
                <title>Payments - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Payments</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Payments</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">	
               <Table className="table-striped"
                  pagination= { {total : data.length,
                    showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                  style = {{overflowX : 'auto'}}
                  columns={columns}                 
                  // bordered
                  dataSource={data}
                  rowKey={record => record.id}
                  onChange={this.handleTableChange}
                />
              {/* <table className="table table-striped custom-table datatable mb-0">
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
                  <tr>
                    <td><a href="/purple/app/accounts/invoices-view">#INV-0001</a></td>
                    <td>
                      <h2><a href="#">Global Technologies</a></h2>
                    </td>
                    <td>Paypal</td>
                    <td>8 Feb 2019</td>
                    <td>$500</td>
                  </tr>
                  <tr>
                    <td><a href="/purple/app/accounts/invoices-view">#INV-0002</a></td>
                    <td>
                      <h2><a href="#">Delta Infotech</a></h2>
                    </td>
                    <td>Paypal</td>
                    <td>8 Feb 2019</td>
                    <td>$500</td>
                  </tr>
                  <tr>
                    <td><a href="/purple/app/accounts/invoices-view">#INV-0003</a></td>
                    <td>
                      <h2><a href="#">Cream Inc</a></h2>
                    </td>
                    <td>Paypal</td>
                    <td>8 Feb 2019</td>
                    <td>$500</td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
      );
   }
}

export default Payments;
