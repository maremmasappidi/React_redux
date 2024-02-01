const initialState = {
    users: [],
    error: null,
  };
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS_SUCCESS':
        return {
          ...state,
          users: action.payload,
          error: null,
        };
      case 'GET_USERS_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'ADD_USER_SUCCESS':
        return {
          ...state,
          users: [...state.users, action.payload],
          error: null,
        };
      case 'ADD_USER_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  