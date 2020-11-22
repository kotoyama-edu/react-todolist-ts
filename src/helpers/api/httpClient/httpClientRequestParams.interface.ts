import { AxiosRequestConfig } from "axios";

export interface IHttpClientRequestParams<T> {
  url: string;
  payload?: T;
  config?: AxiosRequestConfig;
}
