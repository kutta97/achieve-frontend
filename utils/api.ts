import { AUTH } from '@consts/LocalStorage';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { getStorage } from './localStorage';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://ec2-3-38-71-163.ap-northeast-2.compute.amazonaws.com:8080'
    : 'http://ec2-3-38-71-163.ap-northeast-2.compute.amazonaws.com:8080';

const Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

export interface baseRs {
  ok: boolean;
  message: string;
}

const getCommonHeaders = () => {
  const token = JSON.parse(getStorage(AUTH));
  if (!token) {
    return undefined;
  }
  return {
    Authorization: token.accessToken,
  };
};

const api = () => {
  const instance = axios.create();

  const request = async <T>(
    method: keyof typeof Methods,
    url: string,
    data: any,
    opt: any
  ): Promise<{ data: T } & baseRs> => {
    return instance({
      url: BASE_URL + url,
      method,
      headers: opt?.headers,
      data: method !== Methods.GET ? data : undefined,
      params: method === Methods.GET ? data : undefined,
      timeout: opt.timeout ?? 300 * 1000,
      responseType: opt?.responseType || 'json',
    })
      .then(async (result: AxiosResponse<{ data: T } & baseRs>) => {
        if (result) {
          const data = result.data;
          return Promise.resolve(data);
        }
        return Promise.reject('Invalid Result');
      })
      .catch(async (result: AxiosError | string) => {
        return Promise.reject(result);
      });
  };

  const get = async <T = any>(url: string, data?: any, config?: any) => {
    return request<T>(
      Methods.GET,
      url,
      data,
      config || {
        params: data,
        headers: getCommonHeaders(),
      }
    );
  };

  const post = async <T = any>(url: string, data?: any, config?: any) => {
    return request<T>(
      Methods.POST,
      url,
      data,
      config || { headers: getCommonHeaders() }
    );
  };

  const put = async <T = any>(url: string, data?: any, config?: any) => {
    return request<T>(
      Methods.PUT,
      url,
      data,
      config || {
        params: data,
        headers: getCommonHeaders(),
      }
    );
  };

  const deleted = async <T = any>(url: string, data?: any, config?: any) => {
    return request<T>(
      Methods.DELETE,
      url,
      data,
      config || {
        params: data,
        headers: getCommonHeaders(),
      }
    );
  };

  return {
    get,
    post,
    put,
    deleted,
  };
};

export default api();
