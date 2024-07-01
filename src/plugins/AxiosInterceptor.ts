import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';

const AxiosInterceptor = () => {
  const axiosInterceptor = () => {
    const requestInterceptor = axios.interceptors.request.use((config) => {
      console.log('refreshAxios');
      config.headers['X-Naver-Client-Id'] = import.meta.env.VITE_NAVER_CLIENT_ID;
      config.headers['X-Naver-Client-Secret'] = import.meta.env.VITE_NAVER_CLIENT_SECRET;

      return config;
    });

    const responseInterceptor = axios.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log('response = ', response);
        return response;
      },
      async (
        error: AxiosError & {
          data: { error: string; message: string; responseMessage: { messageText: string } };
        },
      ) => {
        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  };

  useEffect(() => {
    console.log('useEffect axiosInterceptor');
    axiosInterceptor();
  }, []);
  return {
    axiosInterceptor,
  };
};
export default AxiosInterceptor;
