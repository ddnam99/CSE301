import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";

import { authReducer } from "./reducers";

const allReducers = combineReducers({
  authReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => console.log(store.getState()));

export default store;
