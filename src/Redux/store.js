import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Siempre vamos a llamar a reducer aqui
import userReducer from "./repogitDucks";

//El que leemos en el componente
const rootReducer = combineReducers({
  userGit: userReducer,
});

//extension del navegador de redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}