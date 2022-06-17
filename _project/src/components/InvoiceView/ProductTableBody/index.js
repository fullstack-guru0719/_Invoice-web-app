import React from "react";

// import { makeFixed2 } from "../../../helpers/UtiFunctions";
const makeFixed2 = (number) => {
  if (!number || Number.isNaN(number)) return 0;
  return (Math.round(number * 100) / 100).toFixed(2);
};
const getProductPrice = (product) => {
  const { price, quantity } = product;
  return makeFixed2(price * quantity);
};

const ProductTableBody = ({
  products,
  onChangeProduct,
  removeProductFromInvoice,
}) => {
  const clickSave = () => {};
  const clickEdit = () => {};
  console.log(products);
  return (
    <>
      {products.map((product, idx) => (
        <tr key={idx}>
          <td>
            <span>{product.name}</span>
          </td>
          <td>
            {/* <span>{product.desc}</span> */}
            <input
              value={product.description}
              onChange={(e) => onChangeProduct(idx, e)}
              name="description"
              type="text"
              className="form-control"
            />
          </td>
          <td>
            <span>{product.price}</span>
            {/* <input
              onChange={(e) => onChangeProduct(idx, e)}
              name="price"
              type="number"
            /> */}
          </td>
          <td>
            <input
              value={product.quantity}
              onChange={(e) => onChangeProduct(idx, e)}
              name="quantity"
              type="number"
              className="form-control"
            />
          </td>
          <td>${getProductPrice(product)}</td>
          <td className="text-right">
            {/* {product.edit ? (
              <i
                onClick={clickSave(product._id)}
                className="la la-check-circle table-action-icon"
              />
            ) : (
              <i
                onClick={clickEdit}
                className="la la-pencil table-action-icon"
              />
            )} */}
            <i
              onClick={() => removeProductFromInvoice(idx)}
              className="fa fa-times-circle-o table-action-icon cursor-pointer"
            />
          </td>
        </tr>
      ))}

      {/* <tr>
        <td>
          <button onClick={addNewProduct}>Add Product</button>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr> */}
    </>
  );
};

export default ProductTableBody;
