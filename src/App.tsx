import { Flex } from '@/components/flex/Flex.tsx';
import AxiosInterceptor from '@/plugins/AxiosInterceptor.ts';
import { News } from '@/pages/News.tsx';
import { BottomLayout } from '@/components/common/component/BottomLayout.tsx';

function App() {
  const { axiosInterceptor } = AxiosInterceptor();
  axiosInterceptor();
  return (
    <Flex
      height={812}
      alignItems={'flex-start'}
      justifyContent={'center'}
      css={{ flex: '1 0 auto' }}
    >
      <Flex height={812} alignItems={'center'} justifyContent={'center'}>
        <News />
        <BottomLayout />
      </Flex>
    </Flex>
  );
}

export default App;
