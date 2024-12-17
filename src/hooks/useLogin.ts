import {useEffect, useState} from 'react';
import {ILoginParams} from '../services/login/login.types';
import {loginService} from '../services/login/loginService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [notifications, setNotifications] = useState<boolean>(false);
  const [isToken, setIsToken] = useState('');

  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('token', value);
      console.log(value);
      setMessage('Success');
    } catch (e) {
      console.log(e);
      setMessage('Error');
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null && value !== '') {
        setMessage('Success');
        storeData(value);
        setIsToken(value);
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const loginRequest = async (params: ILoginParams) => {
    setLoading(true);
    try {
      const response = await loginService(params);
      setLoading(false);
      storeData(response?.token);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      storeData('');
      setIsToken('');
      console.log('logout');
    } catch (e) {
      console.log(e);
      setMessage('Error');
    }
  };

  useEffect(() => {
    getData();
    console.log('isToken', isToken);
    return () => {
      console.log('cleanup');
    };
  }, [isToken, setIsToken]);

  return {
    loading,
    loginRequest,
    message,
    setMessage,
    notifications,
    setNotifications,
    getData,
    setIsToken,
    isToken,
    logout,
  };
};
