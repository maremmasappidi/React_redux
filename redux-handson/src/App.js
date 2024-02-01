

import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import GetUserComponent from "./components/GetUserComponent";
import AddUserComponent from "./components/AddUserComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GetUserComponent />
        <AddUserComponent />
      </div>
    </Provider>
  );
}

export default App;
