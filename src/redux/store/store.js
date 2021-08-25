import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "../root-reducer";
const middleWare = [logger];
const store = createStore(
  rootReducer,
  compose(
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleWare)
  )
);

export default store;
