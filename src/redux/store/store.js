import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
import rootReducer from "../root-reducer";
const middleWare = [];
if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

export const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleWare)
  )
);
export const persistor = persistStore(store);
// eslint-disable-next-line
export default { store, persistor };
