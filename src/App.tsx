import './App.css';
import { Login } from '@/pages/Login.tsx';
import { Flex } from '@/components/flex/Flex.tsx';

function App() {
  return (
    <Flex width={800} height={800} alignItems={'flex-start'} justifyContent={'center'}>
      <Login />
    </Flex>
  );
}

export default App;
