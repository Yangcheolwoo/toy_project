import axios from 'axios';

export const getMovie = () =>
  axios.get(
    '/search.naver?where=nexearch&sm=tab_etc&qvt=0&query=%EB%B0%95%EC%8A%A4%EC%98%A4%ED%94%BC%EC%8A%A4',
  );
