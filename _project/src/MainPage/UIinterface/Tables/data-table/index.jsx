/**
 * Data Table
 */
import React from 'react';
import { Helmet } from "react-helmet";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../../paginationfunction"
import "../../../antdstyle.css"

// Datatable JS
// import "../../../assets/js/jquery.dataTables.min.js";
// import "../../../assets/js/dataTables.bootstrap4.min.js";	
	
  
class DataTable extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
           data : [
             {id:1,name:"Tiger Nixon",position:"System Architect",office:"Edinburgh",age:"61",salary:'320,800'},
			 {id:2,name:"Brenden Wagner",position:	"Software Engineer",office:	"San Francisco"	,age:"28",	salary:"206,850"},
			 {id:3,name:"Fiona Green",position:	"Chief Operating Officer (COO)"	,office:"San Francisco"	,age:"48",	salary:"850,000"},
			 {id:4,name:"Shou Itou",position:	"Regional Marketing",office:	"Tokyo",	age:"20",	salary:"163,000"},
             {id:5,name:"Garrett Winters",position:"Accountant",office:"Tokyo",age:"63",salary:'170,750'},
             {id:6,name:"Ashton Cox",position:"Junior Technical Author",office:"San Francisco",age:"66",salary:'86,000'},
             {id:7,name:"Ashton",position:"Support Lead",office:"San",age:"66",salary:'86'},
             {id:8,name:"Jena Gaines",position:"Support Lead",office:"London",age:"30",salary:'90,560'},
             {id:9,name:"Sonya Frost",position:"Office Manager",office:"Edinburgh",age:"23",salary:'103,600'},
             {id:10,name:"Colleen Hurst",position:"Software Engineer",office:"San Francisco",age:"39",salary:'205,500'},
             {id:11,name:"Rhona Davidson",position:"Javascript Developer",office:"Tokyo",age:"55",salary:'327,900'},
             {id:12,name:"Herrod Chandler",position:"Integration Specialist",office:"San Francisco",age:"59",salary:'137,500'},
             {id:13,name:"Brielle Williamson",position:"Integration Specialist",office:"New York",age:"61",salary:'372,000'},
             {id:14,name:"Airi Satou",position:"Accountant",office:"Tokyo",age:"33",salary:'162,700'},
             {id:15,name:"Cedric Kelly",position:"Senior Javascript Developer",office:"Edinburgh",age:"22",salary:'433,060'},
           ],          
        };
	  }
	
	render() {
		const{data} = this.state
          const columns = [
            
            {
              title: 'Name',
              dataIndex: 'name',
                sorter: (a, b) => a.name.length - b.name.length,
            },
            {
              title: 'Position',
              dataIndex: 'position',
              sorter: (a, b) => a.position.length - b.position.length,
            },
          
            {
              title: 'Office',
              dataIndex: 'office',
              sorter: (a, b) => a.office.length - b.office.length,
            },

            {
              title: 'Age',
              dataIndex: 'age',
              sorter: (a, b) => a.age.length - b.age.length,
            },

            {
              title: 'Salary',
              dataIndex: 'salary', 
              render: (text, record) => (            
			  <span>$ {text}</span>
                ), 
              sorter: (a, b) => a.salary.length - b.salary.length,
            },
          ]
		return (
			<div className="page-wrapper">
			<Helmet>
				  <title>Data Tables - HRMS Admin Template</title>
				  <meta name="description" content="Data Tables"/>					
			</Helmet>
			
			<div className="content container-fluid">
			  {/* Page Header */}
			  <div className="page-header">
				<div className="row">
				  <div className="col">
					<h3 className="page-title">Data Tables</h3>
					<ul className="breadcrumb">
					  <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
					  <li className="breadcrumb-item active">Data Tables</li>
					</ul>
				  </div>
				</div>
			  </div>
			  {/* /Page Header */}
			  <div className="row">
				<div className="col-sm-12">
				  <div className="card mb-0">
					<div className="card-header">
					  <h4 className="card-title mb-0">Default Datatable</h4>
					  <p className="card-text">
						This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code> class to initialize datatables.
					  </p>
					</div>
					<div className="card-body">
					  <div className="table-responsive">
					  <Table
							pagination= { {total : data.length,
								showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
								showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
							style = {{overflowX : 'auto'}}
							columns={columns}                 
							bordered
							dataSource={data}
							rowKey={record => record.id}
							onChange={this.handleTableChange}
						/>
						
						{/* <table className="datatable table table-stripped mb-0">
						  <thead>
							<tr>
							  <th>Name</th>
							  <th>position</th>
							  <th>Office</th>
							  <th>Age</th>
							  <th>Salary</th>
							</tr>
						  </thead>
						  <tbody>
							<tr>
							  <td>Tiger Nixon</td>
							  <td>System Architect</td>
							  <td>Edinburgh</td>
							  <td>61</td>
							  <td>$320,800</td>
							</tr>
							<tr>
							  <td>Garrett Winters</td>
							  <td>Accountant</td>
							  <td>Tokyo</td>
							  <td>63</td>
							  <td>$170,750</td>
							</tr>
							<tr>
							  <td>Ashton Cox</td>
							  <td>Junior Technical Author</td>
							  <td>San Francisco</td>
							  <td>66</td>
							  <td>$86,000</td>
							</tr>
							<tr>
							  <td>Cedric Kelly</td>
							  <td>Senior Javascript Developer</td>
							  <td>Edinburgh</td>
							  <td>22</td>
							  <td>$433,060</td>
							</tr>
							<tr>
							  <td>Airi Satou</td>
							  <td>Accountant</td>
							  <td>Tokyo</td>
							  <td>33</td>
							  <td>$162,700</td>
							</tr>
							<tr>
							  <td>Brielle Williamson</td>
							  <td>Integration Specialist</td>
							  <td>New York</td>
							  <td>61</td>
							  <td>$372,000</td>
							</tr>
							<tr>
							  <td>Herrod Chandler</td>
							  <td>Sales Assistant</td>
							  <td>San Francisco</td>
							  <td>59</td>
							  <td>$137,500</td>
							</tr>
							<tr>
							  <td>Rhona Davidson</td>
							  <td>Integration Specialist</td>
							  <td>Tokyo</td>
							  <td>55</td>
							  <td>$327,900</td>
							</tr>
							<tr>
							  <td>Colleen Hurst</td>
							  <td>Javascript Developer</td>
							  <td>San Francisco</td>
							  <td>39</td>
							  <td>$205,500</td>
							</tr>
							<tr>
							  <td>Sonya Frost</td>
							  <td>Software Engineer</td>
							  <td>Edinburgh</td>
							  <td>23</td>
							  <td>$103,600</td>
							</tr>
							<tr>
							  <td>Jena Gaines</td>
							  <td>Office Manager</td>
							  <td>London</td>
							  <td>30</td>
							  <td>$90,560</td>
							</tr>
							<tr>
							  <td>Quinn Flynn</td>
							  <td>Support Lead</td>
							  <td>Edinburgh</td>
							  <td>22</td>
							  <td>$342,000</td>
							</tr>
							<tr>
							  <td>Charde Marshall</td>
							  <td>Regional Director</td>
							  <td>San Francisco</td>
							  <td>36</td>
							  <td>$470,600</td>
							</tr>
							<tr>
							  <td>Haley Kennedy</td>
							  <td>Senior Marketing Designer</td>
							  <td>London</td>
							  <td>43</td>
							  <td>$313,500</td>
							</tr>
							<tr>
							  <td>Tatyana Fitzpatrick</td>
							  <td>Regional Director</td>
							  <td>London</td>
							  <td>19</td>
							  <td>$385,750</td>
							</tr>
							<tr>
							  <td>Michael Silva</td>
							  <td>Marketing Designer</td>
							  <td>London</td>
							  <td>66</td>
							  <td>$198,500</td>
							</tr>
							<tr>
							  <td>Paul Byrd</td>
							  <td>Chief Financial Officer (CFO)</td>
							  <td>New York</td>
							  <td>64</td>
							  <td>$725,000</td>
							</tr>
							<tr>
							  <td>Gloria Little</td>
							  <td>Systems Administrator</td>
							  <td>New York</td>
							  <td>59</td>
							  <td>$237,500</td>
							</tr>
							<tr>
							  <td>Bradley Greer</td>
							  <td>Software Engineer</td>
							  <td>London</td>
							  <td>41</td>
							  <td>$132,000</td>
							</tr>
							<tr>
							  <td>Dai Rios</td>
							  <td>Personnel Lead</td>
							  <td>Edinburgh</td>
							  <td>35</td>
							  <td>$217,500</td>
							</tr>
							<tr>
							  <td>Jenette Caldwell</td>
							  <td>Development Lead</td>
							  <td>New York</td>
							  <td>30</td>
							  <td>$345,000</td>
							</tr>
							<tr>
							  <td>Yuri Berry</td>
							  <td>Chief Marketing Officer (CMO)</td>
							  <td>New York</td>
							  <td>40</td>
							  <td>$675,000</td>
							</tr>
							<tr>
							  <td>Caesar Vance</td>
							  <td>Pre-Sales Support</td>
							  <td>New York</td>
							  <td>21</td>
							  <td>$106,450</td>
							</tr>
							<tr>
							  <td>Doris Wilder</td>
							  <td>Sales Assistant</td>
							  <td>Sidney</td>
							  <td>23</td>
							  <td>$85,600</td>
							</tr>
							<tr>
							  <td>Angelica Ramos</td>
							  <td>Chief Executive Officer (CEO)</td>
							  <td>London</td>
							  <td>47</td>
							  <td>$1,200,000</td>
							</tr>
							<tr>
							  <td>Gavin Joyce</td>
							  <td>Developer</td>
							  <td>Edinburgh</td>
							  <td>42</td>
							  <td>$92,575</td>
							</tr>
							<tr>
							  <td>Jennifer Chang</td>
							  <td>Regional Director</td>
							  <td>Singapore</td>
							  <td>28</td>
							  <td>$357,650</td>
							</tr>
							<tr>
							  <td>Brenden Wagner</td>
							  <td>Software Engineer</td>
							  <td>San Francisco</td>
							  <td>28</td>
							  <td>$206,850</td>
							</tr>
							<tr>
							  <td>Fiona Green</td>
							  <td>Chief Operating Officer (COO)</td>
							  <td>San Francisco</td>
							  <td>48</td>
							  <td>$850,000</td>
							</tr>
							<tr>
							  <td>Shou Itou</td>
							  <td>Regional Marketing</td>
							  <td>Tokyo</td>
							  <td>20</td>
							  <td>$163,000</td>
							</tr>
						  </tbody>
						</table>
					  */}
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>			
		  </div>
		);
	}
}

export default DataTable;
