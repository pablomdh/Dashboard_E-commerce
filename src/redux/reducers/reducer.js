const userReducer = (state = { products: [] }, action) => {
  //state es user
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default userReducer;
