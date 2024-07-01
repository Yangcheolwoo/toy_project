import { Flex } from '@/components/flex/Flex.tsx';
import { getMovie } from '@/components/movie/api/movie.api.ts';
import * as cheerio from 'cheerio';
export const Movie = () => {
  const handleGetMovie = async () => {
    const { data } = await getMovie();

    console.log(data);

    const $ = cheerio.load(data);
    console.log($);
  };
  return (
    <Flex>
      <Flex>
        <button onClick={handleGetMovie}>movie</button>
      </Flex>
    </Flex>
  );
};
