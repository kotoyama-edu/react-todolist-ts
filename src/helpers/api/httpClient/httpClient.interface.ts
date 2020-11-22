import { IHttpClientRequestParams } from "./httpClientRequestParams.interface";

export interface IHttpClient {
  get<T, TResult>(params: IHttpClientRequestParams<T>): Promise<TResult>;
  post<T, TResult>(params: IHttpClientRequestParams<T>): Promise<TResult>;
  put<T, TResult>(params: IHttpClientRequestParams<T>): Promise<TResult>;
  delete<T>(params: IHttpClientRequestParams<T>): Promise<T>;
}
