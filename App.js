const { createStore, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

// State
const initialState = {
  loading: false,
  data: null,
  error: '',
};

// Action Types
const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action Creators
const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Thunk Action Creator
const fetchData = () => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

// Store with Middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Subscribe to Store Changes
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Thunk Action
store.dispatch(fetchData());
