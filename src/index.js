import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
// REDUX
import thunk from "redux-thunk";
import { createStore,  applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";


const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
