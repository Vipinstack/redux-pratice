import { ActionType } from "../contants/action-type";

export const  setProducts = (products) => {
  return { type: ActionType.SET_PRODUCTS, payload:products};
};

export const selectedProducts = (products) => {
  return { type: ActionType.SELECTED_PRODUCTS, payload:products};
};


export const removePuroducts = (products) => {
  return { type: ActionType.REMOVE_SELECTED_PRODUCTS, payload:products};
};