import { Flex } from '@/components/flex/Flex.tsx';
import { Text } from '@/components/text/Text.tsx';
import { News } from '@/pages/News.tsx';

export const Login = () => {
  return (
    <Flex flexDirection={'column'}>
      <Flex justifyContent={'center'}>
        <Text fontWeight={'bold'} fontSize={40}>
          로그인
        </Text>
        <News />
      </Flex>
    </Flex>
  );
};
