
import axios from 'axios';
//get details 
export const getUsers = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({ type: 'GET_USERS_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'GET_USERS_FAILURE', payload: error.message });
      });
  };
};
//add user details
export const addUser = (userData) => {
  return (dispatch) => {
    axios.post('https://jsonplaceholder.typicode.com/users', userData)
      .then((response) => {
        dispatch({ type: 'ADD_USER_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'ADD_USER_FAILURE', payload: error.message });
      });
  };
};
