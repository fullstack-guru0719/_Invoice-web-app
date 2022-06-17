import React, {
  useState,
  useCallback,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Applogo } from "../../../Entryfile/imagepath";
import { jwtService } from "../../../services";
import {
  NewClientAddSection,
  AddNewProduct,
  IndividualProductList,
  ProductTableBody,
} from "../../../components";
import { userActions } from "../../../store/actions";
import { makeFixed2 } from "../../../helpers/UtiFunctions";

const getProductPrice = (product) => {
  const { price, quantity } = product;
  return makeFixed2(price * quantity);
};

const Invoice = () => {
  // redux store states & dispatchers //

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user, shallowEqual);
  const { products } = user;

  const [invoiceId, setInvoiceId] = useState(null); // invoiceID e.g #1001
  const [orgInvoice_id, setOrg_id] = useState(null); // invoice_id e.g 5fe10f1dff0d0958acc9e958
  const [currentInvoice, setCurrentInvoice] = useState(null); // latest invoice, used for redirect in previous invoices view
  const [prevInvoices, setPrevInvoices] = useState(null); // previous version invoices

  /** Get Invoice ID from the URL params **/
  useEffect(() => {
    const { pathname } = history.location;
    const params = pathname.split("invoices-view/");
    if (params.length === 2) setOrg_id(params[1]);
  }, [history]);

  /** Fetch Invoice Details From Backend with orgInvoice_id **/
  useEffect(() => {
    if (!orgInvoice_id) return;
    jwtService
      .getInvoiceFromInvoiceId(orgInvoice_id)
      .then((response) => {
        setFiledsData(response.data);
        setCurrentInvoice(response.data);
      })
      .catch((error) => console.log("error", error));
  }, [orgInvoice_id, setFiledsData, setCurrentInvoice]);

  /** invoice details state **/
  const [sClient, setSClient] = useState(null); // selected client in dropdown
  const [query, setQuery] = useState(""); // search query
  const [billfor, setBillFor] = useState(""); // bill
  const [status, setStatus] = useState("draft"); // status of invoice, default is `draft`
  const [tax, setTax] = useState(5); // tax
  const [invoiceProducts, setIProducts] = useState([]); // product list of invoice

  const filteredClients = useMemo(() => {
    // momoized value for filtered clients in dropdown according to query
    if (!user || !user.clients) return [];
    return user.clients
      .filter((client) => client.role !== "admin")
      .filter((client) => {
        const { name } = client;
        const q = query.toLowerCase();
        return name.toLowerCase().includes(q);
      });
  }, [user, query]);

  /** component state **/
  const [discardInput, setDiscardInput] = useState(""); // input value of the popup when discarding
  const [isOpenNewClient, setIsOpenNewClient] = useState(false); // status shows whether add client section is opened or not
  const [isOpenNewProduct, setIsOpenNewProduct] = useState(false); // status shows whether add product section is opened or not

  // shows "Select Client" when no client is selected, otherwise return client's name
  const getSClientName = useMemo(() => {
    if (!sClient) return "Select Client";
    return sClient.name;
  }, [sClient]);
  /** component event listeners **/

  // event listener for query input change
  const filterFunction = useCallback((e) => setQuery(e.target.value), []);

  // add new product to invoice
  const addNewProduct = useCallback(
    (product) => {
      setIProducts((prod) => prod.concat({ ...product }));
    },
    [setIProducts]
  );
  // remove product from the invoice product list
  const removeProductFromInvoice = useCallback(
    (idx) => {
      setIProducts((products) => {
        const tmpProducts = products.map((p) => p);
        tmpProducts.splice(idx, 1);
        return tmpProducts;
      });
    },
    [setIProducts]
  );
  // change product from the invoice product list
  const onChangeProduct = useCallback(
    (idx, e) => {
      const { name, value } = e.target;
      setIProducts((products) => {
        const newProducts = products.map((p) => p);
        newProducts[idx][name] = value;
        return newProducts;
      });
    },
    [setIProducts]
  );

  // get total price of invoice including tax
  // returns { totalPrice, taxPrice, sum }
  const getTotalPrice = useMemo(() => {
    if (!invoiceProducts || !invoiceProducts.length)
      return {
        totalPrice: 0.0,
        taxPrice: 0.0,
      };

    const totalPrice = invoiceProducts.reduce(
      (total, product) => Number(total) + Number(getProductPrice(product)),
      0
    );
    const taxPrice = tax && totalPrice ? (totalPrice * tax) / 100 : 0.0;
    const sum = totalPrice && taxPrice ? totalPrice + taxPrice : 0.0;

    return {
      totalPrice: makeFixed2(totalPrice),
      taxPrice: makeFixed2(taxPrice),
      sum: makeFixed2(sum),
    };
  }, [invoiceProducts, tax]);

  // Invoice Edit Decisions
  const sendInvoice = () => {
    jwtService
      .postInvoice({
        orgId: orgInvoice_id,
        id: invoiceId,
        vendor: user._id,
        client: sClient._id,
        billfor,
        products: invoiceProducts,
        tax,
        status: "sent",
      })
      .then((response) => {
        history.push({
          pathname: "/app/accounts/invoices",
        });
      })
      .catch((error) => console.log("create invoice error", error));
  };
  const saveInvoice = () => {
    jwtService
      .postInvoice({
        orgId: orgInvoice_id,
        id: invoiceId,
        vendor: user._id,
        client: sClient._id,
        billfor,
        products: invoiceProducts,
        tax,
        status: "draft",
      })
      .then((response) => {
        history.push({
          pathname: "/app/accounts/invoices",
        });
      })
      .catch((error) => console.log("create invoice error", error));
  };
  const discardInvoice = () => {};

  const addNewClient = ({ name, email, phone, address }) => {
    jwtService
      .addNewClient({ id: user._id, name, email, phone, address })
      .then((response) => {
        dispatch(userActions.addClient(response.data));
        setSClient(response.data);
      })
      .catch((error) => console.log("[add new client error]", error));
  };

  const onClickPrevInvoice = useCallback(
    (prevInvoice) => {
      setFiledsData(prevInvoice);
    },
    [setFiledsData]
  );

  const setFiledsData = useCallback((data) => {
    setInvoiceId(data.id);
    setPrevInvoices(data.voidedInivoices);
    setBillFor(data.billfor);
    setSClient(data.client);
    setIProducts(
      data.products.map((p) => ({
        ...p,
        ...p.product,
      }))
    );
    setTax(data.tax);
    setStatus(data.status);
  }, []);
  return (
    <div className="page-wrapper invoice-view">
      <Helmet>
        <title>{`Invoice ${invoiceId} Detail`}</title>
        <meta name="description" content="Invoice Detail Page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Invoice</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Invoice</li>
              </ul>
            </div>
            {currentInvoice &&
              currentInvoice.id !== invoiceId &&
              status === "void" && (
                <a
                  role="button"
                  className="btn-link text-primary"
                  onClick={() => setFiledsData(currentInvoice)}
                >
                  <span>{`Go to #INV-${currentInvoice.id}`}</span>
                </a>
              )}
            {prevInvoices && prevInvoices.length && (
              <div className="col text-right">
                <div className="dropdown">
                  {currentInvoice && currentInvoice.id === invoiceId && (
                    <>
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>Previous Version</span>
                      </a>
                      <div className="dropdown-menu">
                        <div className="dropdown-data">
                          {prevInvoices.map((prevInvoice) => (
                            <a
                              key={prevInvoice._id}
                              onClick={() => onClickPrevInvoice(prevInvoice)}
                              className="dropdown-item font-italic"
                            >{`#INV-${prevInvoice.id}`}</a>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            <div className="col-auto float-right ml-auto">
              <div className="btn-group btn-group-sm">
                <button className="btn btn-white">CSV</button>
                <button className="btn btn-white">PDF</button>
                <button className="btn btn-white">
                  <i className="fa fa-print fa-lg" /> Print
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4 m-b-20">
                    <ul className="list-unstyled user-detail">
                      <li className="primaryColor">
                        {user && user.firstName + " " + user.lastName}
                      </li>
                      <li>{user && user.address}</li>
                      <li>{user && user.phone}</li>
                      <li>{user && user.email}</li>
                    </ul>
                  </div>
                  <div className="col-sm-8 m-b-20">
                    <div className="invoice-details">
                      <h3 className="text-uppercase">
                        Invoice #INV-{invoiceId}
                      </h3>
                      {/* <ul className="list-unstyled">
                        <li>Date: <span>March 12, 2019</span></li>
                        <li>Due date: <span>April 25, 2019</span></li>
                      </ul> */}
                    </div>
                    <div className="vendor-logo">
                      <img src={Applogo} alt="vendor logo" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-lg-4 col-xl-4 m-b-20">
                    <h4>Invoice to:</h4>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle dropdown-on-hover"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>{getSClientName}</span>
                      </a>
                      <div className="dropdown-menu">
                        <div className="dropdown-item hover-none">
                          <input onChange={filterFunction} type="text" />
                        </div>
                        <div class="dropdown-divider"></div>
                        <div className="dropdown-data">
                          {filteredClients.map((client) => (
                            <a
                              key={client._id}
                              onClick={() => setSClient(client)}
                              className="dropdown-item font-italic"
                            >
                              {client.name}
                            </a>
                          ))}
                          <a
                            onClick={() => setIsOpenNewClient(true)}
                            className="dropdown-item"
                          >
                            <span className="cursor-pointer font-weight-bolder">
                              <i className="fa fa-plus-circle"></i> Add new
                              client
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {sClient && (
                      <ul className="list-unstyled user-detail">
                        <li>
                          <span>{sClient.address}</span>
                        </li>
                        <li>{[sClient.phone]}</li>
                        <li>{sClient.email}</li>
                      </ul>
                    )}
                    <NewClientAddSection
                      open={isOpenNewClient}
                      onSave={addNewClient}
                      onClose={() => setIsOpenNewClient(false)}
                    />
                  </div>
                  <div className="col-sm-6 col-lg-8 col-xl-8 m-b-20">
                    <span className="text-muted">Bill for</span>
                    <input
                      type="text"
                      className="bill-for"
                      onChange={(e) => setBillFor(e.target.value)}
                      value={billfor}
                    />
                    {/* <ul className="list-unstyled invoice-payment-details">
                      <li><h5>Total Due: <span className="text-right">$8,750</span></h5></li>
                      <li>Bank name: <span>Profit Bank Europe</span></li>
                      <li>Country: <span>United Kingdom</span></li>
                      <li>City: <span>London E1 8BF</span></li>
                      <li>Address: <span>3 Goodman Street</span></li>
                      <li>IBAN: <span>KFH37784028476740</span></li>
                      <li>SWIFT code: <span>BPT4E</span></li>
                    </ul> */}
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-hover invoice-table">
                    <thead>
                      <tr>
                        <th>PRODUCT</th>
                        <th className="d-none d-sm-table-cell">DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th class="width-150">TOTAL</th>
                        <th className="text-right">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ProductTableBody
                        products={invoiceProducts}
                        onChangeProduct={onChangeProduct}
                        removeProductFromInvoice={removeProductFromInvoice}
                      />
                      <AddNewProduct
                        open={isOpenNewProduct}
                        onSave={(product) => {
                          addNewProduct(product);
                        }}
                        onClose={() => setIsOpenNewProduct(false)}
                      />
                    </tbody>
                  </table>
                </div>
                <IndividualProductList
                  attachToInvoiceList={addNewProduct}
                  individualPs={products}
                  setIsOpenNewProduct={setIsOpenNewProduct}
                />
                <div>
                  <div className="row invoice-payment">
                    <div className="col-sm-7"></div>
                    <div className="col-sm-5">
                      <div className="m-b-20">
                        <div className="table-responsive no-border">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <th>Subtotal:</th>
                                <td className="text-right">
                                  $<span>{getTotalPrice.totalPrice}</span>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  Tax:{" "}
                                  <span className="text-regular">
                                    <input
                                      type="number"
                                      className="tax-input"
                                      onChange={(e) => setTax(e.target.value)}
                                      value={tax}
                                    />
                                    %
                                  </span>
                                </th>
                                <td className="text-right">
                                  $<span>{getTotalPrice.taxPrice}</span>
                                </td>
                              </tr>
                              <tr>
                                <th>Total:</th>
                                <td className="text-right text-primary">
                                  <h5>${getTotalPrice.sum}</h5>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-info">
                    <h5>Other information</h5>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus sed dictum ligula, cursus blandit risus. Maecenas
                      eget metus non tellus dignissim aliquam ut a ex. Maecenas
                      sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae
                      lorem interdum, eu scelerisque tellus fermentum. Curabitur
                      sit amet lacinia lorem. Nullam finibus pellentesque
                      libero, eu finibus sapien interdum vel
                    </p>
                    {status && status !== "void" && (
                      <div className="text-right mt-3">
                        <button
                          onClick={sendInvoice}
                          className="btn btn-success btn-sm mr-2"
                        >
                          Send invoice to client
                        </button>
                        {status === "draft" && (
                          <button
                            onClick={saveInvoice}
                            className="btn btn-primary btn-sm mr-2"
                          >
                            Save
                          </button>
                        )}
                        <button
                          className="btn btn-danger btn-sm"
                          data-toggle="modal"
                          data-target="#discard-confirm-modal"
                        >
                          Discard
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  id="discard-confirm-modal"
                  className="modal custom-modal fade"
                  role="dialog"
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-md"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Once you discard it, changes you've made are fully
                          deleted.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()}>
                          <div className="form-group">
                            <label>
                              If you are really going to discard, please type
                              "Discard" and hit the button.
                            </label>
                            <input
                              onChange={(e) => setDiscardInput(e.target.value)}
                              value={discardInput}
                              className="form-control"
                              type="text"
                            />
                          </div>
                          <div className="submit-section">
                            <button
                              className="btn btn-secondary mr-3"
                              data-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              className={
                                "btn btn-danger " +
                                (discardInput !== "Discard" ? "disabled" : "")
                              }
                              disabled={discardInput !== "Discard"}
                              data-dismiss="modal"
                              onClick={discardInvoice}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default Invoice;
