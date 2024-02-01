import { createStore, applyMiddleware } from 'redux';
const redux = require("redux");
const createStore = redux.createStore;
// const applyMiddleware = redux.applyMiddleware;
// const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

import thunkMiddleware from 'redux-thunk';


//state
const initialState = {
  loading: false,
  users: [],
  error: "",
};
//Action Types
//declaring constans for the actions

const FETCH_USERS_REQUEST = " FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
//Action Creators
//fetch the data
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
//Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return;
      {
        loading: true;
      }

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};
const fetchUsers = () => {
  dispatch(fetchUsersRequest());
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((responce) => {
        //responce.data is the array of users
        const users = responce.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        //error messasge
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

//store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers);
