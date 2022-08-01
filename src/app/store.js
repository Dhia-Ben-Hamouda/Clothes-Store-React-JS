import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "@redux-devtools/extension";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer.js";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer , composeWithDevTools());
export const persistor = persistStore(store);

export default store;