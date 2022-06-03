import { ActionTypes } from "../contants/action-type";

const initialState = {
  products: [{
      id:1,
      title:'vipin chauhan',
      category :'programmer'
  }],
};

export const productReducers = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
