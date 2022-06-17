import React, { useState, useMemo } from "react";

const IndividualProductList = ({
  attachToInvoiceList,
  individualPs,
  setIsOpenNewProduct,
}) => {
  const [sProduct, setSProduct] = useState(null);
  const [query, setQuery] = useState("");
  const filterFunction = (e) => setQuery(e.target.value);

  const filteredProducts = useMemo(() => {
    return individualPs.filter((product) => {
      const { name } = product;
      const q = query.toLowerCase();
      return name.toLowerCase().includes(q);
    });
  }, [individualPs, query]);
  const getSProduct = () => {
    if (sProduct && sProduct.name) return sProduct.name;
    return "Select Product or Add ";
  };
  const handleAttachToInvoiceList = () => {
    if (sProduct) {
      attachToInvoiceList(sProduct);
      setIsOpenNewProduct(false);
      setSProduct(null);
    }
  };
  return (
    <div className="shadow p-5 mb-5 bg-white rounded">
      <h4>Add Product</h4>
      <div className="dropdown">
        <a
          className="dropdown-toggle"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <span>{getSProduct()}</span>
        </a>
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <input value={query} onChange={filterFunction} type="text" />
          </div>
          <div class="dropdown-divider"></div>
          <div className="dropdown-data">
            {filteredProducts.map((product) => (
              <a
                key={product._id}
                onClick={() => setSProduct(product)}
                className="dropdown-item font-italic"
              >
                {product.name + " : " + product.price}
              </a>
            ))}
            <a
              onClick={() => setIsOpenNewProduct(true)}
              className="dropdown-item"
            >
              <span className="cursor-pointer font-weight-bolder">
                <i className="fa fa-plus-circle"></i> Add new Product
              </span>
            </a>
          </div>
        </div>
      </div>
      {sProduct && (
        <ul className="list-unstyled user-detail">
          <li>
            <span>{"Product Name : " + sProduct.name}</span>
          </li>
          <li>{"Product Price : $" + sProduct.price}</li>
          <li>
            <div className="mt-3">
              <button
                onClick={handleAttachToInvoiceList}
                className="custom-default-button"
              >
                Add product to Invoice
              </button>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default IndividualProductList;
