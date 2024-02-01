
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemConatiner from "./Components/ItemConatiner";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <ItemConatiner cake />
        <ItemConatiner />

        <CakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
