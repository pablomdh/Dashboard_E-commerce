const userReducer = (state = { products: [], accessKey: "" }, action) => {
  //state es user
  console.log(action.payload);
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "DELETE_PRODUCT":
      return {
        ...state.accessKey,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "LOGIN":
      return { ...state, accessKey: action.payload };
    default:
      return state;
  }
};

export default userReducer;
