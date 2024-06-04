import { Flex } from '@/components/flex/Flex.tsx';
import { Text } from '@/components/text/Text.tsx';
import { Movie } from '@/pages/Movie.tsx';
import { useAxiosInterceptor } from '@/plugins/axios.ts';

export const Login = () => {
  console.log('123');
  useAxiosInterceptor();
  return (
    <Flex flexDirection={'column'}>
      <Flex justifyContent={'center'}>
        <Text fontWeight={'bold'} fontSize={40}>
          로그인
        </Text>
        <Movie />
      </Flex>
    </Flex>
  );
};
