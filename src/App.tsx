import { Flex } from '@/components/flex/Flex.tsx';
import AxiosInterceptor from '@/plugins/AxiosInterceptor.ts';
import { News } from '@/pages/News.tsx';

function App() {
  const { axiosInterceptor } = AxiosInterceptor();
  axiosInterceptor();
  return (
    <Flex width={800} height={800} alignItems={'flex-start'} justifyContent={'center'}>
      <News />
    </Flex>
  );
}

export default App;
