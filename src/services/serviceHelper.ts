import axios from 'axios';
import {URL} from '../utils/constants';
import {RequestResponse} from '../types/request.types';

export const axiosInstance = axios.create({baseURL: URL.BASE_URL});

export const requestWrapper = async (request: Promise<RequestResponse>) => {
  try {
    const response = await request;
    return {response};
  } catch (error) {
    return error;
  }
};
