import { createStore, applyMiddleware } from "redux";
// import {Provider} from 'react-redux'
import logger from "redux-logger";
import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger));
window.__REDUX_DEVTOOLS_EXTENSION__({
  trace: true,
});
// const store = createStore(cakeReducer);
export default store;
