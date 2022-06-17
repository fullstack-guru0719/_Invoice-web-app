import React, { useState, useCallback, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/actions";

import { jwtService } from "../../services";

// client adding section reducer
const initialData = {
  submit: false,
  name: "",
  price: 0,
  description: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "SET_SUBMITTED":
      return {
        ...state,
        submit: true,
      };
    case "CLEAR_FIELD":
      return initialData;
    default:
      return state;
  }
};

const NewProductAddSection = ({ open, onClose, onSave }) => {
  const dispatch = useDispatch();
  const [formValue, dispatchValue] = useReducer(reducer, initialData);
  const handler = (e) => {
    const { name, value } = e.target;
    dispatchValue({ type: "SET_VALUE", payload: { name, value } });
  };
  const { submit, name, price, description } = formValue;
  const onSaveHandler = () => {
    dispatchValue({ type: "SET_SUBMITTED" });
    if (!name || !price) return;
    jwtService
      .addNewProduct({ name, price, description })
      .then((response) => {
        dispatch(userActions.addProduct(response.data));
        onSave(response.data);
        onClose();
        dispatchValue({ type: "CLEAR_FIELD" });
      })
      .catch((error) => console.log("add new product error", error));
  };
  return (
    <>
      {open && (
        <tr>
          <td>
            <input
              className="form-control product-input-control"
              type="text"
              name="name"
              value={name}
              onChange={handler}
              placeholder="Product name"
            />
            {submit && !name && (
              <div className="text-danger">Product name is required.</div>
            )}
          </td>
          <td>
            <input
              className="form-control product-input-control"
              type="text"
              name="description"
              value={description}
              onChange={handler}
              placeholder="Product description"
            />
          </td>
          <td>
            <input
              type="number"
              name="price"
              value={price}
              onChange={handler}
              className="form-control product-input-control"
              placeholder="Product price"
            />
            {submit && !price && (
              <div className="text-danger">Product price is required.</div>
            )}
          </td>
          <td>
            <input
              className="form-control product-input-control disabled"
              type="text"
              placeholder="Quantity"
              disabled
            />
          </td>
          <td>
            <input
              className="form-control product-input-control disabled"
              type="text"
              placeholder="Total Price"
              disabled
            />
          </td>
          <td className="d-flex text-right">
            <span
              onClick={onSaveHandler}
              className="product-input-btn btn btn-success ml-auto mr-2"
            >
              Add
            </span>
            <span onClick={onClose} className="btn">
              Cancel
            </span>
          </td>
        </tr>
      )}
    </>
  );
};
export default NewProductAddSection;
