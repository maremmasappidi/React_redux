// console.log('form index.js')
const redux = require("redux");
const reduxLogger = require("redux-logger");
const createSore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

//Action
const BUY_CAKE = "BUY_CAKE"; //string constants
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "first redux action",
  };
}
//reducer
//(previousState,action)=>newState

// const intialState = {
//   //it is obj
//   numOfCakes: 10,
//numOFIcecream: 10,
// };
const intialCakeState = {
  numOfCakes: 10,
};
const intialIceCreamState = {
  numOfIceCreams: 20,
};

// const reducer = (state = intialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//       case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfCakes: state.iceCreamReducer - 1,
//       };
//     default:
//       return state;
//   }
// };
//different reducers

const cakeReducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = intialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
//combine Reducer
const rootReducer = combineReducers({
  //this method accepts the obeject \
  //it stores the key and value pairs
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//store
const store = redux.createStore(rootReducer, applyMiddleware(logger));
console.log("intial state", store.getState());
const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
