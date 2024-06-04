import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'X-Naver-Client-Id': import.meta.env.VITE_NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_CLIENT_SECRET,
  },
});

instance.interceptors.response.use(
  (res) => {
    console.log('Axios Response !!', res);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  },
);
const useAxiosInterceptor = () => {
  const errorHandler = (error: AxiosError) => {
    console.log('Axios Error !!', error);
    return Promise.reject(error);
  };

  const responseHandler = (res: AxiosResponse<any, any>) => {
    console.log('Axios Response !!', res);
    return res;
  };

  const responseInterceptor = instance.interceptors.response.use(
    (res) => responseHandler(res),
    (error) => {
      console.log('Axios Error! !!');
      errorHandler(error);
    },
  );

  useEffect(() => {
    console.log('123');
    return () => {
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor]);
};

export { useAxiosInterceptor };
