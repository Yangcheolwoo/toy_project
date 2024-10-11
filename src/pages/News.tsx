import { Flex } from '@/components/flex/Flex.tsx';
import { getMovie } from '@/components/news/api/movie.api.ts';
import { useEffect, useState } from 'react';
import { NewsResponse, initNewsResponse } from '@/components/news/data/News.ts';
import { PageBodyContainer } from '@/components/pageContainer/PageBodyContainer.tsx';
import { NewsList } from '@/components/news/component/NewsList.tsx';
// import { PageBodyContainer } from '@/components/pageContainer/PageBodyContainer.tsx';
// import { NewsList } from '@/components/movie/component/NewsList.tsx';
export const News = () => {
  const [response, setResponse] = useState<NewsResponse>(initNewsResponse);

  useEffect(() => {
    (async () => {
      await handleGetMovie();
    })();
  }, []);
  const handleGetMovie = async () => {
    const { data } = await getMovie();

    if (data) {
      setResponse(data);
    }
    console.log(response);
  };
  return (
    <PageBodyContainer>
      <Flex>
        <NewsList response={response}></NewsList>
      </Flex>
    </PageBodyContainer>
  );
};
