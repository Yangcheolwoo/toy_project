import axios from 'axios';

export const getMovie = () =>
  axios.get('/v1/search/news.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1', {
    headers: {
      'X-Naver-Client-Id': import.meta.env.VITE_NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': import.meta.env.VITE_NAVER_CLIENT_SECRET,
    },
  });
