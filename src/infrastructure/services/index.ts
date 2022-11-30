import consoleLogger from "./logger/console";
import productionLogger from "./logger/production";
import api, { IAPI } from "./api";
import { isProduction } from "../../libs/utils";

export type IServices = {
  log: any;
  api: IAPI;
};

const services: IServices = {
  log: isProduction() ? productionLogger : consoleLogger,
  api,
};

export default services;
