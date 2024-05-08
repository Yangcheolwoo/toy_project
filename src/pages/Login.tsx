import { Flex } from '@/components/flex/Flex.tsx';
import { Text } from '@/components/text/Text.tsx';

export const Login = () => {
  console.log('123');

  return (
    <Flex flexDirection={'column'}>
      <Flex justifyContent={'center'}>
        <Text fontWeight={'bold'} fontSize={40}>
          로그인
        </Text>
      </Flex>
    </Flex>
  );
};
