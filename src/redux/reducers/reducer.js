const userReducer = (state = { accessKey: "" }, action) => {
  //state es user

  switch (action.type) {
    case "LOGIN":
      return { ...state, accessKey: action.payload };
    case "LOGOUT":
      return { ...state, accessKey: "" };
    default:
      return state;
  }
};

export default userReducer;
