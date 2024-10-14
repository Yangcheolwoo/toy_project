import { Flex } from '@/components/flex/Flex.tsx';
import Select from '@/assets/icon/selector.svg?react';

export const BottomLayout = () => {
  console.log('bottomLayout');

  return (
    <Flex
      width={379}
      height={88}
      css={{
        left: 'calc(50% - 379px/2)',
        bottom: '0px',
        border: '1.5px solid rgba(242,242,242,0.32)',
        position: 'absolute',
      }}
      bgColor={'rgba(255,255,255,0.9'}
    >
      <Flex
        justifyContent={'center'}
        gap={16}
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          left: 'calc(50% -329px/2)',
          top: '12px',
        }}
        bgColor={'#FFFFFF'}
      >
        <Select />
      </Flex>
    </Flex>
  );
};
