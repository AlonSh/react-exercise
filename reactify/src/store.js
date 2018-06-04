import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import reducer from "./reducers/playlistReducer";

const middleware = applyMiddleware(createLogger());
const store = createStore(reducer, middleware);

// for debugging purposes.
window.store = store;

export default store;