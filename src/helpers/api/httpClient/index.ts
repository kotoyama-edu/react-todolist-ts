import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { apiConfig } from "../api.config";
import { IHttpClient } from "./httpClient.interface";
import { IHttpClientRequestParams } from "./httpClientRequestParams.interface";

class HttpClient implements IHttpClient {
  protected readonly client: AxiosInstance;

  // TODO: set auth
  constructor() {
    this.client = axios.create(apiConfig);
    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.client.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = (response: AxiosResponse) => response;

  protected _handleError = (error: AxiosError) => Promise.reject(error);

  public async get<T, TResult>(
    params: IHttpClientRequestParams<T>
  ): Promise<TResult> {
    const res = await this.client.get(params.url, {
      params: params.payload,
    });
    return res?.data;
  }

  public async post<T, TResult>(
    params: IHttpClientRequestParams<T>
  ): Promise<TResult> {
    return (await this.client.post(params.url, params.payload, params.config))
      ?.data;
  }

  public async put<T, TResult>(
    params: IHttpClientRequestParams<T>
  ): Promise<TResult> {
    return (await this.client.put(params.url, params.payload))?.data;
  }

  public async delete<T>(params: IHttpClientRequestParams<T>): Promise<T> {
    return (await this.client.delete(params.url, { params: params.payload }))
      ?.data;
  }
}

export const httpClient = new HttpClient();
