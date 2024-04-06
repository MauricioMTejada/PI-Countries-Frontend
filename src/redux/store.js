// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./reducer";
// import thunkMidddleware from "redux-thunk";

// const commposeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

// const store = createStore(
// 	rootReducer,
// 	commposeEnhancer(applyMiddleware(thunkMidddleware))
// );

// export default store;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
    // otros mejoradores del store si los tienes
  )
);

export default store;
