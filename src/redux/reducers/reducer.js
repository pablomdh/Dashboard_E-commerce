const userReducer = (state = { accessKey: "" }, action) => {
  //state es user

  switch (action.type) {
    case "LOGIN":
      return { ...state, accessKey: action.payload };
    default:
      return state;
  }
};

export default userReducer;
