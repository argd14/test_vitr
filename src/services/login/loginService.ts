import {AxiosInstance} from 'axios';
import {axiosInstance, requestWrapper} from '../serviceHelper';
import {ILoginParams} from './login.types';

const handleRequest = async (requestPromise: Promise<any>) => {
  const {response, error}: any = await requestWrapper(requestPromise);
  if (error) {
    throw error;
  }
  return response?.data;
};

export const loginService = async (
  params: ILoginParams,
  request: AxiosInstance = axiosInstance,
) => {
  const requestPromise = request.post('/auth/login', params);
  return handleRequest(requestPromise);
};
