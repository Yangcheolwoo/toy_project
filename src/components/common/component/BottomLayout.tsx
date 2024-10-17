import { Flex } from '@/components/flex/Flex.tsx';
import Select from '@/assets/icon/selector.svg?react';
import Heart from '@/assets/icon/heart.svg?react';
import Profile from '@/assets/icon/profile.svg?react';
import { styled } from '@stitches/react';

export const BottomLayout = () => {
  console.log('bottomLayout');

  return (
    <Flex
      width={379}
      height={60}
      justifyContent={'center'}
      css={{
        left: 'calc(50% - 379px/2)',
        bottom: '0px',
        border: '1.5px solid rgba(242,242,242,0.32)',
        position: 'absolute',
        // background: 'rgba(255,255,255)',
        // background: '#FFFFFF',
      }}
      bgColor={'rgba(255,255,255)'}
    >
      <Flex
        width={329}
        height={40}
        justifyContent={'start'}
        gap={16}
        css={{
          boxSizing: 'border-box',
          position: 'absolute',
          left: 'calc(50% -329px/2)',
          top: '12px',
        }}
        bgColor={'#FFFFFF'}
      >
        <BottomIconFrame>
          <Select width={24} height={24} />
          <NavText>Explore</NavText>
        </BottomIconFrame>
        <BottomIconFrame>
          <Heart width={24} height={24} />
          <NavText>Wishlists</NavText>
        </BottomIconFrame>
        <BottomIconFrame>
          <Profile width={24} height={24} />
          <NavText>Profile</NavText>
        </BottomIconFrame>
      </Flex>
    </Flex>
  );
};
const BottomIconFrame = styled(Flex, {
  gap: 4,
  alignItems: 'center !important',
  flexDirection: 'column !important',
  width: 53,
  height: 40,
});

const NavText = styled('span', {
  fontFamily: 'lnter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: 10,
  // lineHeight: 12,
  textAlign: 'center',
  letterSpacing: -0.5,
  // color: '#d83752',
  color: '#717171',
  variants: {
    color: {},
  },
});
