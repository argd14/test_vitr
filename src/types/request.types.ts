import {AxiosError, AxiosResponse} from 'axios';
export interface Param {
  [key: symbol | string]: number | string | boolean | undefined | null;
}
export type NonNullableProperties<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
export interface RequestResponse {
  data: any;
  response?: AxiosResponse;
  error?: AxiosError;
}
