import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { IServices } from "../infrastructure/services";
import { isProduction } from "../libs/utils";
import reducers from "./reducers";
import middlewares from "./middlewares";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (!isProduction() && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const configureStore = (services: IServices) =>
  createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares.map((f) => f(services))))
  );
