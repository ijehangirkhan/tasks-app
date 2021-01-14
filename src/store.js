import {createStore} from "redux";
import mainReducer from "./reducers";
import {loadState, saveState} from "./localstorage";

const persistedState = loadState();

const store = createStore(
  mainReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
