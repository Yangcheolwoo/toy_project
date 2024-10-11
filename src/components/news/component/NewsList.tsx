import { Flex } from '@/components/flex/Flex.tsx';
import { NewsResponse } from '@/components/news/data/News.ts';
import { Text } from '@/components/text/Text.tsx';

export const NewsList = ({ response }: { response: NewsResponse }) => {
  console.log('response == ', response);
  return (
    <Flex flexDirection={'column'}>
      {response.items.length > 0 &&
        response.items.map((item) => (
          <Flex
            flexDirection={'column'}
            gap={20}
            padding={'20px 20px 20px 20px'}
            style={{ border: '1px solid black' }}
          >
            <Flex>
              <Text>{item.title}</Text>
            </Flex>
            <Flex>{item.description}</Flex>
          </Flex>
        ))}
    </Flex>
  );
};
