const userReducer = (state = { products: [], accessKey: "" }, action) => {
  //state es user
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "LOGIN":
      return { ...state, accessKey: action.payload };
    default:
      return state;
  }
};

export default userReducer;
