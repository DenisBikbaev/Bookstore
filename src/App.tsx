import { Provider } from "react-redux";

import Router from "./router/Router";

import "reset-css";

import "./variables.css";

import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
